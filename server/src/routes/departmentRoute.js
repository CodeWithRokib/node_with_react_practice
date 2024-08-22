import express from 'express';
import { createDepartment, getDepartments } from '../controllers/departmentController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/departments', upload.single('image'), createDepartment);
router.get('/departments', getDepartments);

export default router;
