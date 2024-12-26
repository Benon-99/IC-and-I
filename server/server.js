import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import prisma from './prisma/client.js';
import blogRouter from './routes/blog.js';
import messageRouter from './routes/message.js';
import authRouter from './routes/auth.js';
import emailRouter from './routes/email.js';
import adminRouter from './routes/admin.js'; // added adminRouter import


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(helmet());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
});

// Routes
app.use('/api/messages', messageRouter);
app.use('/api/blog', blogRouter);
app.use('/api/auth', authRouter);
app.use('/api/email', emailRouter);
app.use('/api/admin', adminRouter); // added admin routes

// Database connection test
async function testDbConnection() {
    try {
        await prisma.$connect();
        await prisma.$queryRaw`SELECT 1`;
        console.log("Database connection is Ready");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

testDbConnection();

// Start server
app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`);
});

// Catch All Route for 404 Errors
app.use((req, res) => {
    console.error('404 Error: Route not found -', req.originalUrl);
    res.status(404).json({ 
        status: "fail", 
        message: `Route not found: ${req.method} ${req.originalUrl}` 
    });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Error:', error);
    res.status(500).json({ 
        status: "fail", 
        message: error.message || "Internal server error",
        path: req.originalUrl
    });
});