import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileCard = () => {
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem('volunteerName');
    if (name) {
      axios.get(`http://localhost:8080/api/volunteer/${name}`)
        .then(res => setVolunteer(res.data))
        .catch(err => console.error("Error fetching volunteer:", err));
    }
  }, []);

  if (!volunteer) return <div className="text-center text-gray-600">Loading profile...</div>;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 overflow-hidden">
          {volunteer.profilePicture ? (
            <img src={volunteer.profilePicture} alt="Profile" className="object-cover w-full h-full" />
          ) : (
            <span className="text-gray-400 text-sm">No Image</span>
          )}
        </div>
        <h2 className="text-xl font-bold mt-4">{volunteer.name}</h2>
        <p className="text-gray-600">{volunteer.email}</p>
      </div>

      <div className="mt-6">
        <p><strong>Phone:</strong> {volunteer.phone}</p>
        <p><strong>Gender:</strong> {volunteer.gender}</p>
        <p><strong>Availability:</strong> {volunteer.availability}</p>
        <p><strong>Location:</strong> {volunteer.location.city}, {volunteer.location.state}</p>
        <p className="mt-2"><strong>Skills:</strong></p>
        <ul className="list-disc list-inside text-gray-700">
          {volunteer.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
