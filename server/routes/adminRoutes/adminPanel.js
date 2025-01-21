import express from 'express';
import { createFeature, deleteFeature, getFeature, updateFeature } from '../../controllers/adminControllers/featureController.js';

const router = express.Router()


//features routes
router.get('/features', getFeature)
router.post('/features/create',createFeature)
router.post('/features/update',updateFeature)
router.delete('/features/delete',deleteFeature)

export default router