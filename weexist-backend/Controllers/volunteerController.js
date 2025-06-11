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

    // Check if email already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(409).json({ message: 'A volunteer with this email already exists.' });
    }

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
    // Send error details for debugging
    res.status(500).json({ message: 'Failed to save volunteer data', error: error.message, details: error });
  }
};
