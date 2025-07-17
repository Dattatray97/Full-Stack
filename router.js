import express from 'express';
import { adminlogin } from './controll.js';

const router = express.Router();

router.get('/login', adminlogin);
router.get('/signup', adminlogin);

export default router;
