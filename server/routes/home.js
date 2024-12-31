import express from 'express';
import upload from '../upload.js';
import { getAbout , updateAbout} from '../controllers/aboutController.js';

const router = express.Router();

router.get('/', getAbout);
router.post('/update' , upload.single('image') , updateAbout);

export default router;