import express from 'express';
import { saveVolunteerData } from '../Controllers/volunteerController.js';

const router = express.Router();

router.post('/', saveVolunteerData);

export default router;
