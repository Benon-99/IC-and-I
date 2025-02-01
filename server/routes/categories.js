import express from 'express';
import { 
    getCategories, 
    createCategory, 
    updateCategory, 
    deleteCategory 
} from '../controllers/adminControllers/categoryController.js';

const router = express.Router();

// Categories routes
router.get('/', getCategories);
router.post('/create', createCategory);
router.put('/update', updateCategory);
router.delete('/delete', deleteCategory);

export default router;