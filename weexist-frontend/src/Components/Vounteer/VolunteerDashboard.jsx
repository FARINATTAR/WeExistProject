import React from 'react';
import ProfileCard from './ProfileCard';
import NearbyRequestsList from './NearbyRequestsList';
import MyTasksPanel from './MyTasksPanel';
import ActivityHistory from './ActivityHistory';

const VolunteerDashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Welcome to Your Volunteer Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Profile & Requests) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <ProfileCard />
          <NearbyRequestsList />
        </div>

        {/* Right Column (My Tasks & History) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <MyTasksPanel />
          <ActivityHistory />
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
