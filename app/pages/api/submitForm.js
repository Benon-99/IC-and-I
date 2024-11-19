import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // MySQL connection configuration
    const connectionConfig = {
      host: "localhost:3000", // MySQL host
      user: "root", // MySQL username
      database: "ic&i", // MySQL database name
    };

    try {
      // Connect to the database
      const connection = await mysql.createConnection(connectionConfig);

      // Insert form data into the database
      const query = "INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)";
      await connection.execute(query, [name, email, message]);

      // Close the database connection
      await connection.end();

      // Configure nodemailer to send an email
      const transporter = nodemailer.createTransport({
        service: "gmail", // Use Gmail or another email provider
        auth: {
          user: "benon.merdkhanian@apricodes.com", // Your email
          pass: "company@99", // Your email password
        },
      });

      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "specific@example.com", // Recipient email
        subject: "New Form Submission",
        text: `You have a new form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // MySQL connection configuration
    const connectionConfig = {
      host: process.env.DB_HOST, // MySQL host
      user: process.env.DB_USER, // MySQL username
      password: process.env.DB_PASS, // MySQL password
      database: process.env.DB_NAME, // MySQL database name
    };

    try {
      // Connect to the database
      const connection = await mysql.createConnection(connectionConfig);

      // Insert form data into the database
      const query = "INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)";
      await connection.execute(query, [name, email, message]);

      // Close the database connection
      await connection.end();

      // Configure nodemailer to send an email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "benon.merdkhanian@apricodes.com", // Your email
          pass: "company@99", // Your email password
        },
      });

      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "specific@example.com", // Recipient email
        subject: "New Form Submission",
        text: `You have a new form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}