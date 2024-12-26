import express from 'express';
import { 
    createPostController, 
    updatePostController, 
    deletePostController, 
    getPostController, 
    getAllPostsController,
    getPostByIdController 
} from '../controllers/blogController.js';
import { authenticateToken } from '../middleware/auth.js';
import { blogRepository } from '../repositories/blog-repo.js';

const router = express.Router();

// Debug middleware
router.use((req, res, next) => {
    console.log(`Blog Route - ${req.method} ${req.originalUrl}`);
    next();
});

// Public routes - order matters! More specific routes first
router.get('/categories', async (req, res) => {
    try {
        const categories = await blogRepository.getCategories();
        res.status(200).json({ status: 'success', categories });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
});

// Blog post routes
router.get('/post/:id', getPostByIdController);
router.get('/slug/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        console.log('Direct route - Getting post with slug:', slug);
        
        const post = await blogRepository.getPost(slug);
        console.log('Direct route - Post found:', post ? 'Yes' : 'No');
        
        if (!post) {
            console.log('Direct route - Post not found for slug:', slug);
            return res.status(404).json({ 
                status: 'fail', 
                message: `Post not found with slug: ${slug}` 
            });
        }
        
        console.log('Direct route - Successfully retrieved post:', post.title);
        res.status(200).json({ status: 'success', post });
    } catch (error) {
        console.error('Direct route - Error getting post:', error);
        res.status(500).json({ 
            status: 'fail', 
            message: error.message || 'Internal server error' 
        });
    }
});
router.get('/', getAllPostsController);

// Protected routes
router.post('/', authenticateToken, createPostController);
router.put('/post/:id', authenticateToken, updatePostController);
router.delete('/post/:id', authenticateToken, deletePostController);

export default router;