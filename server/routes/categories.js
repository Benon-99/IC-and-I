import express from 'express';
import { 
    createCategoryController, 
    updateCategoryController, 
    deleteCategoryController, 
    getCategoryController, 
    getAllCategoriesController,
    getCategoryByIdController 
} from '../controllers/categoriesController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Debug middleware
router.use((req, res, next) => {
    console.log(`Categories Route - ${req.method} ${req.originalUrl}`);
    next();
});

// Public routes
router.get('/', getAllCategoriesController);
router.get('/category/:category', getCategoryController);
router.get('/id/:id', getCategoryByIdController);

// Protected routes
router.post('/', authenticateToken, createCategoryController);
router.put('/category/:id', authenticateToken, updateCategoryController);
router.delete('/category/:id', authenticateToken, deleteCategoryController);

export default router;