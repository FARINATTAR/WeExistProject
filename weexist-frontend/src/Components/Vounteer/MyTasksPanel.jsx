import React, { useState } from 'react';

const OngoingTasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 101,
      title: 'Help with Food Drive',
      location: 'Dadar, Mumbai',
      date: 'June 12, 2025',
      status: 'In Progress',
    },
    {
      id: 102,
      title: 'Event Setup Volunteer',
      location: 'Thane, Mumbai',
      date: 'June 14, 2025',
      status: 'In Progress',
    },
  ]);

  const markCompleted = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: 'Completed' } : task
      )
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">🕒 Ongoing Tasks</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-600 text-sm">No ongoing tasks at the moment.</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`border p-4 rounded-lg ${
                task.status === 'Completed'
                  ? 'bg-green-50 border-green-300'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-gray-700">{task.title}</h4>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    task.status === 'Completed'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {task.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">📍 {task.location}</p>
              <p className="text-sm text-gray-600">📅 {task.date}</p>
              {task.status !== 'Completed' && (
                <button
                  onClick={() => markCompleted(task.id)}
                  className="mt-3 text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full transition"
                >
                  Mark as Completed
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OngoingTasks;
