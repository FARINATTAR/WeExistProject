import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VolunteerThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Thank You for Volunteering!</h2>
        <p className="text-gray-600 mb-6">
          Your submission has been received. Our team will get in touch with you soon. 🌟
        </p>

        <Link to="/" className="text-red-600 hover:underline font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default VolunteerThankYou;
