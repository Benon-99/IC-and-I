import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  console.log("Cookies received:", req.cookies);
  const token = req.cookies.token;
  console.log("Token from cookie:", token);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({
      status: "error",
      message: "Invalid token.",
    });
  }
};
