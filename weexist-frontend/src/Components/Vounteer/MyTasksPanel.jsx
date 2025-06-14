// src/components/VolunteerDashboard/OngoingTasks.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OngoingTasks = ({ refreshCount }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const volunteerName = localStorage.getItem('volunteerName');
    if (!volunteerName) return;

    axios.get(`http://localhost:8080/api/tasks/assigned/${volunteerName}`)
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching assigned tasks:", err));
  }, [ReferenceError]);

  const handleComplete = async (taskId) => {
    try {
      await axios.patch(`http://localhost:8080/api/tasks/mark-complete/${taskId}`);
      setTasks(prev => prev.filter(task => task._id !== taskId));
      alert("Task marked as completed!");
    } catch (err) {
      console.error("Error completing task:", err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-green-700">Ongoing Tasks</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks in progress.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map(task => (
            <li key={task._id} className="border p-4 rounded-md shadow-sm">
              <h4 className="font-bold text-lg">{task.title}</h4>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="mt-2 text-gray-500">
                📍 {task.location.city}, {task.location.state}<br />
                📅 {new Date(task.date).toLocaleDateString()}<br />
                Status: <span className="font-medium text-yellow-600">{task.status}</span>
              </p>
              <button
                onClick={() => handleComplete(task._id)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Mark as Completed
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OngoingTasks;
