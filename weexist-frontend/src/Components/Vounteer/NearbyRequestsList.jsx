import React from 'react';

const sampleRequests = [
  {
    id: 1,
    title: 'Distribute Food Packs',
    location: 'Andheri, Mumbai',
    category: 'Food',
    date: 'June 15, 2025',
    contact: 'Neha (NGO Co.)',
  },
  {
    id: 2,
    title: 'Teach Basic English',
    location: 'Kurla, Mumbai',
    category: 'Education',
    date: 'June 16, 2025',
    contact: 'Hope Foundation',
  },
  {
    id: 3,
    title: 'Help at Community Event',
    location: 'Bandra, Mumbai',
    category: 'Event Support',
    date: 'June 17, 2025',
    contact: 'Community Care',
  },
];

const NearbyRequestsList = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">📍 Nearby Opportunities</h3>
      <div className="space-y-4">
        {sampleRequests.map((task) => (
          <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-gray-700">{task.title}</h4>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{task.category}</span>
            </div>
            <p className="text-sm text-gray-600">📍 {task.location}</p>
            <p className="text-sm text-gray-600">📅 {task.date}</p>
            <p className="text-sm text-gray-600">📞 Contact: {task.contact}</p>
            <button
              className="mt-3 text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full transition"
              onClick={() => alert(`You’ve accepted: ${task.title}`)}
            >
              Volunteer Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyRequestsList;
