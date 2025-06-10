import Volunteer from '../Models/volunteerModel.js';

export const saveVolunteerData = async (req, res) => {
  try {
    // Destructure all relevant fields from req.body
    const {
      name,
      email,
      phone,
      gender,
      availability,
      skills,
      location,
      profilePicture,
      isVerified
    } = req.body;

    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      gender,
      availability,
      skills,
      location,
      profilePicture,
      isVerified
    });

    await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer registered successfully' });

  } catch (error) {
    console.error('Error saving volunteer data:', error);
    res.status(500).json({ message: 'Failed to save volunteer data' });
  }
};
