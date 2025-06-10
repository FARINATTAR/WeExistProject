import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Heart, ClipboardCheck } from 'lucide-react'; // if you're using lucide icons

const VolunteerMain = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/volunteer/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Become a Volunteer 🙌</h1>
        <p className="text-gray-600">Here's how you can make an impact:</p>

        <div className="grid sm:grid-cols-3 gap-6 text-gray-700 mt-6">
          <div className="flex flex-col items-center">
            <Users className="h-10 w-10 text-blue-500 mb-2" />
            <p className="font-semibold">Join a Community</p>
            <p className="text-sm text-gray-500">Meet like-minded changemakers</p>
          </div>

          <div className="flex flex-col items-center">
            <Heart className="h-10 w-10 text-red-500 mb-2" />
            <p className="font-semibold">Serve with Purpose</p>
            <p className="text-sm text-gray-500">Help those who truly need support</p>
          </div>

          <div className="flex flex-col items-center">
            <ClipboardCheck className="h-10 w-10 text-green-500 mb-2" />
            <p className="font-semibold">Simple Steps</p>
            <p className="text-sm text-gray-500">Just fill the form and get started!</p>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow transition"
        >
          Continue to Form
        </button>
      </div>
    </div>
  );
};

export default VolunteerMain;
