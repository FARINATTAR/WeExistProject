// src/components/VolunteerDashboard/ActivitySummary.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ActivitySummary = ({ refreshCount }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const volunteerName = localStorage.getItem('volunteerName');
    if (volunteerName) {
      axios.get(`http://localhost:8080/api/tasks/completed/${volunteerName}`)
        .then(res => setCompletedTasks(res.data))
        .catch(err => console.error("Error fetching completed tasks", err));
    }
  }, [refreshCount]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-center text-purple-900 mb-6">
        📊 Activity Summary
      </h3>

      <div className="text-center mb-6">
        <div className="bg-green-100 text-green-800 p-4 rounded-lg inline-block">
          <p className="text-2xl font-bold">{completedTasks.length}</p>
          <p>Tasks Completed</p>
        </div>
      </div>

      {completedTasks.length === 0 ? (
        <p className="text-gray-500 text-center">No completed tasks yet.</p>
      ) : (
        <ul className="space-y-4">
          {completedTasks.map(task => (
            <li key={task._id} className="border p-4 rounded-md shadow-sm">
              <h4 className="text-lg font-semibold">{task.title || "Unnamed Task"}</h4>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-sm text-gray-500">
                ✅ Completed on: {new Date(task.updatedAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivitySummary;
