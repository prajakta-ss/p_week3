import express from 'express';
import { signup,login,admin } from '../controller/user.controller.js';
const router = express.Router();

router.post('/signup',signup )
router.post('/login',login )
router.post('/admin',admin )

export default router;