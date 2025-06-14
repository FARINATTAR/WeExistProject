import React from 'react';

const VolunteerActivityHistory = () => {
  const totalHours = 28;
  const familiesHelped = 12;

  const pastActivities = [
    {
      id: 1,
      title: 'Distributed Food Packs',
      location: 'Andheri, Mumbai',
      date: 'May 10, 2025',
      hours: 3,
    },
    {
      id: 2,
      title: 'Taught Kids at Shelter',
      location: 'Kurla, Mumbai',
      date: 'May 15, 2025',
      hours: 2,
    },
    {
      id: 3,
      title: 'Senior Home Visit',
      location: 'Goregaon, Mumbai',
      date: 'May 22, 2025',
      hours: 4,
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">📜 Activity Summary</h3>

      <div className="flex items-center justify-between mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600">{totalHours} hrs</p>
          <p className="text-sm text-gray-600">Volunteered</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600">{familiesHelped}</p>
          <p className="text-sm text-gray-600">Families Helped</p>
        </div>
      </div>

      <h4 className="text-md font-semibold mb-3 text-gray-700">Past Activities</h4>
      <div className="space-y-3">
        {pastActivities.map((act) => (
          <div
            key={act.id}
            className="border rounded-lg p-4 text-sm text-gray-700 bg-gray-50"
          >
            <p className="font-semibold text-red-600">{act.title}</p>
            <p>📍 {act.location}</p>
            <p>📅 {act.date}</p>
            <p>⏱️ {act.hours} hours</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerActivityHistory;
