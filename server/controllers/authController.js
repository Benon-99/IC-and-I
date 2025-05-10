import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { LoginDTO } from "../DTOs/loginDTO.js";
import { userRepository } from "../repositories/user-repo.js";

export const loginController = async (req, res) => {
  console.log("login");

  try {
    console.log("Login request received:", { email: req.body.email });

    const loginData = new LoginDTO(req.body);
    console.log(1);

    const loginUser = await userRepository.loginUser(loginData);
    // For testing purposes - replace with database lookup in production
    if (loginUser) {
      console.log(2);

      const token = jwt.sign(
        { userId: loginUser.id }, // Payload as object
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "24h" }
      );

      // Set token as HTTP-only cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: false, // Explicitly set to false for HTTP in development
        sameSite: "lax",
        path: "/", // Ensure cookie is accessible everywhere
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      });

      console.log("Login successful for:", loginUser.email);
      return res.status(200).json({
        status: "success",
        user: loginUser,
      });
    }

    console.log("Login failed: Invalid credentials for:", email);
    return res.status(401).json({
      status: "error",
      message: "Invalid credentials",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    // User info is already attached to req by the auth middleware
    if (!req.user) {
      return res.status(401).json({
        status: "error",
        message: "Not authenticated",
      });
    }

    res.json({
      status: "success",
      user: {
        id: req.user.userId,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
      },
    });
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json({
      status: "success",
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
