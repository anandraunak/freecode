import express from "express";
const router = express.Router();

import {email,getSchedule,getHistory} from '../controllers/email.js';

router.post('/sendEmail',email);
router.get('/',getSchedule);
router.get('/history',getHistory);

export default router;