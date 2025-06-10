// src/routes/VolunteerRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Volunteer from '../pages/Volunteer/VolunteerMain'; // layout
import VolunteerProfile from '../pages/Volunteer/VolunteerProfile';
import VolunteerDashboard from '../pages/Volunteer/VolunteerDashboard';
import VolunteerTasks from '../pages/Volunteer/VolunteerTasks';

const VolunteerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Volunteer />}>
        <Route path="profile" element={<VolunteerProfile />} />
        <Route path="dashboard" element={<VolunteerDashboard />} />
        <Route path="tasks" element={<VolunteerTasks />} />
      </Route>
    </Routes>
  );
};

export default VolunteerRoutes;
