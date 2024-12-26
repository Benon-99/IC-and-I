import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({
                status: 'fail',
                result: 'No authentication token provided'
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    status: 'fail',
                    result: 'Invalid or expired token'
                });
            }

            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Error in authenticateToken middleware:', error);
        res.status(500).json({
            status: 'fail',
            result: 'Error authenticating token'
        });
    }
};