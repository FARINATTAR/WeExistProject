import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VolunteerProfile = () => {
  const [availability, setAvailability] = useState("");
  const navigate = useNavigate(); // ✅ You missed this

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Optional debug
    navigate('/volunteer/thankyou'); // ✅ Redirect on submit
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Complete Your Profile</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
            <select
              name="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
              required
            >
              <option value="" disabled hidden>Select</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="both">Both</option>
            </select>
          </div>

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
