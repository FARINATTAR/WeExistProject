import Volunteer from '../Models/volunteerModel.js';

export const saveVolunteerData = async (req, res) => {
  try {
    const { name, email, phone, availability } = req.body;

    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      availability,
    });

    await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer registered successfully' });

  } catch (error) {
    console.error('Error saving volunteer data:', error);
    res.status(500).json({ message: 'Failed to save volunteer data' });
  }
};
