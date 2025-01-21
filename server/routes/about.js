import express from 'express';
import upload from '../upload.js';
import { getAboutUs , updateAboutUs , deleteAboutUs , createAbout} from '../controllers/aboutController.js';


const router = express.Router();

router.get('/', getAboutUs);
router.post('/update', upload.single('img'), updateAboutUs);
router.post('/delete', deleteAboutUs);
router.post('/create',upload.single('img'),createAbout);


export default router;