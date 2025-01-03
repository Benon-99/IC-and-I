import express from 'express';
import upload from '../upload.js';
import { getAbout , updateAbout} from '../controllers/aboutController.js';
import { updateFeatures } from '../controllers/featuresController.js';

const router = express.Router();

router.get('/', getAbout);
router.post('/about/update' , upload.single('image') , updateAbout);
router.post('/features/update' , updateFeatures);
export default router;