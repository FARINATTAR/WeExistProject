import express from 'express';
import { saveVolunteerData } from '../Controllers/volunteerController.js';
import Volunteer from '../Models/volunteerModel.js';

const router = express.Router();

router.post('/', saveVolunteerData);

router.get('/:name', async (req, res) => {
  try {
    const volunteer = await Volunteer.findOne({
      name: { $regex: `^${req.params.name}$`, $options: 'i' }
    });
    if (!volunteer) return res.status(404).send("Not found");
    res.json(volunteer);
  } catch (err) {
    res.status(500).send("Server error");
  }
});


export default router;
