// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useState } from 'react';

// const VolunteerProfile = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     gender: '',
//     availability: '',
//     skills: [],
//     location: {
//       city: '',
//       state: ''
//     },
//     profilePicture: '',
//     isVerified: false
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     if (name.includes('location.')) {
//       const field = name.split('.')[1];
//       setFormData(prev => ({
//         ...prev,
//         location: {
//           ...prev.location,
//           [field]: value
//         }
//       }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSkillChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       skills: checked
//         ? [...prev.skills, value]
//         : prev.skills.filter(skill => skill !== value)
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/api/volunteer', formData);
//       navigate('/volunteer/thankyou');
//     } catch (error) {
//       console.error('Submission error:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-100 flex items-center justify-center">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Complete Your Profile</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
//               required
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
//               required
//             />
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
//             >
//               <option value="" disabled>Select</option>
//               <option value="Female">Female</option>
//               <option value="Male">Male</option>
//               <option value="Other">Other</option>
//               <option value="Prefer not to say">Prefer not to say</option>
//             </select>
//           </div>

//           {/* Availability */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
//             <select
//               name="availability"
//               value={formData.availability}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
//               required
//             >
//               <option value="" disabled hidden>Select</option>
//               <option value="weekdays">Weekdays</option>
//               <option value="weekends">Weekends</option>
//               <option value="both">Both</option>
//             </select>
//           </div>

//           {/* Skills */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Skills / Interests</label>
//             <div className="flex flex-wrap gap-2">
//               {['Teaching', 'Food Distribution', 'Elderly Support', 'Tech Assistance', 'Content Creation'].map(skill => (
//                 <label key={skill} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     name="skills"
//                     value={skill}
//                     checked={formData.skills.includes(skill)}
//                     onChange={handleSkillChange}
//                     className="text-black bg-white"
//                   />
//                   <span className="text-black">{skill}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* City */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//             <input
//               type="text"
//               name="location.city"
//               value={formData.location.city}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
//               required
//             />
//           </div>

//           {/* State */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
//             <input
//               type="text"
//               name="location.state"
//               value={formData.location.state}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
//               required
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
//           >
//             Save and Continue
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerProfile;
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const VolunteerProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    availability: '',
    skills: [],
    location: {
      city: '',
      state: ''
    },
    profilePicture: '',
    isVerified: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('location.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        location: {
          ...prev.location,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter(skill => skill !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/volunteer', formData);
      localStorage.setItem('volunteerName', formData.name); // ✅ Store name
      navigate('/volunteer/thankyou');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Complete Your Profile</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
            >
              <option value="" disabled>Select</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
              required
            >
              <option value="" disabled hidden>Select</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Skills / Interests</label>
            <div className="flex flex-wrap gap-2">
              {['Teaching', 'Food Distribution', 'Elderly Support', 'Tech Assistance', 'Content Creation'].map(skill => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleSkillChange}
                    className="text-black bg-white"
                  />
                  <span className="text-black">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="location.city"
              value={formData.location.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              name="location.state"
              value={formData.location.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black bg-white"
              required
            />
          </div>
          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData(prev => ({ ...prev, profilePicture: reader.result }));
                };
                if (file) reader.readAsDataURL(file);
              }}
              className="w-full border border-gray-300 rounded-md p-2 bg-white text-black"
            />
            {formData.profilePicture && (
              <img
                src={formData.profilePicture}
                alt="Preview"
                className="mt-2 rounded-full w-24 h-24 object-cover mx-auto"
              />
            )}
          </div>


          {/* Submit */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerProfile;
