import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NearbyTasks = ({ onTaskAccepted }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Define loading state

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8080/api/tasks/open');
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (taskId) => {
    const volunteerName = localStorage.getItem('volunteerName');
    if (!volunteerName) return alert("Volunteer name not found");

    try {
      await axios.patch(`http://localhost:8080/api/tasks/assign/${taskId}`, {
        volunteerName
      });

      // Remove task from UI
      setTasks(prev => prev.filter(task => task._id !== taskId));
      alert("✅ Task accepted!");
      if (onTaskAccepted) onTaskAccepted(); // ✅ trigger refresh
    } catch (err) {
      console.error("Error assigning task:", err);
      alert("❌ Error accepting task.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-center text-blue-900 mb-6">
        📍 Nearby Opportunities
      </h3>

      {loading ? (
        <p className="text-center text-gray-500">Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No open tasks available at the moment.</p>
      ) : (
        <ul className="space-y-6">
          {tasks.map(task => (
            <li key={task._id} className="border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                {task.title || "Untitled Task"}
              </h4>

              {task.description && (
                <p className="text-gray-700 mb-3">{task.description}</p>
              )}

              <div className="text-sm text-gray-600 leading-6">
                📍 <strong>Location:</strong> {task.location?.city}, {task.location?.state}<br />
                📅 <strong>Date:</strong> {task.date ? new Date(task.date).toLocaleDateString() : "N/A"}<br />
                📞 <strong>Contact:</strong> {task.contactInfo || "Not Provided"}
              </div>

              <button
                onClick={() => handleAccept(task._id)}
                className="mt-4 inline-block px-5 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
              >
                Accept Task
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NearbyTasks;
