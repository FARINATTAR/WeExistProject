// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProfileCard = () => {
//   const [volunteer, setVolunteer] = useState(null);

//   useEffect(() => {
//     const name = localStorage.getItem('volunteerName');
//     if (name) {
//       axios.get(`http://localhost:8080/api/volunteer/${name}`)
//         .then(res => setVolunteer(res.data))
//         .catch(err => console.error("Error fetching volunteer:", err));
//     }
//   }, []);

//   if (!volunteer) return <div className="text-center text-gray-600">Loading profile...</div>;

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10">
//       <div className="text-center">
//         <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 overflow-hidden">
//           {volunteer.profilePicture ? (
//             <img src={volunteer.profilePicture} alt="Profile" className="object-cover w-full h-full" />
//           ) : (
//             <span className="text-gray-400 text-sm">No Image</span>
//           )}
//         </div>
//         <h2 className="text-xl font-bold mt-4">{volunteer.name}</h2>
//         <p className="text-gray-600">{volunteer.email}</p>
//       </div>

//       <div className="mt-6">
//         <p><strong>Phone:</strong> {volunteer.phone}</p>
//         <p><strong>Gender:</strong> {volunteer.gender}</p>
//         <p><strong>Availability:</strong> {volunteer.availability}</p>
//         <p><strong>Location:</strong> {volunteer.location.city}, {volunteer.location.state}</p>
//         <p className="mt-2"><strong>Skills:</strong></p>
//         <ul className="list-disc list-inside text-gray-700">
//           {volunteer.skills.map((skill, idx) => (
//             <li key={idx}>{skill}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Phone, Mail, MapPin, User, Clock } from 'lucide-react';

const ProfileCard = () => {
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem('volunteerName');
    if (name) {
      axios
        .get(`http://localhost:8080/api/volunteer/${name}`)
        .then((res) => setVolunteer(res.data))
        .catch((err) => console.error('Error fetching volunteer:', err));
    }
  }, []);

  if (!volunteer)
    return <div className="text-center text-gray-600">Loading profile...</div>;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xs text-center text-black">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {volunteer.profilePicture ? (
            <img
              src={volunteer.profilePicture}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-gray-500 text-sm">No Image</span>
          )}
        </div>
        <h2 className="text-xl font-bold mt-3 text-red-600">{volunteer.name}</h2>
        <p className="text-gray-700 text-sm flex items-center justify-center gap-1 mt-1">
          <Mail size={14} /> {volunteer.email}
        </p>
      </div>

      <div className="mt-5 space-y-2 text-sm text-left text-gray-800">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-gray-500" />
          <span>{volunteer.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <User size={14} className="text-gray-500" />
          <span>{volunteer.gender}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-gray-500" />
          <span>{volunteer.availability}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-gray-500" />
          <span>
            {volunteer.location.city}, {volunteer.location.state}
          </span>
        </div>
      </div>

      <div className="mt-4 text-left">
        <p className="font-semibold mb-1 text-sm text-gray-700">Skills</p>
        <div className="flex flex-wrap gap-2">
          {volunteer.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
