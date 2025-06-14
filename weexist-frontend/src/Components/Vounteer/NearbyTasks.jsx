import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NearbyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const volunteerName = localStorage.getItem('volunteerName');

  useEffect(() => {
    axios.get('http://localhost:8080/api/tasks/open')
      .then(res => setTasks(res.data))
      .catch(err => console.error("Failed to fetch tasks", err));
  }, []);

  const handleAccept = async (taskId) => {
    try {
      await axios.patch(`http://localhost:8080/api/tasks/assign/${taskId}`, {
        volunteerName
      });
      alert("Task accepted!");
      setTasks(prev => prev.filter(task => task._id !== taskId));
    } catch (err) {
      console.error("Error accepting task", err);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Nearby Opportunities</h3>
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task._id} className="p-4 border rounded-md shadow bg-white">
            <h4 className="font-bold">{task.title}</h4>
            <p>{task.description}</p>
            <p><strong>Location:</strong> {task.location}</p>
            <p><strong>Date:</strong> {task.date}</p>
            <p><strong>Contact:</strong> {task.contact}</p>
            <button
              className="mt-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => handleAccept(task._id)}
            >
              Accept Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyTasks;
