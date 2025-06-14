// import React from 'react';
// import ProfileCard from './ProfileCard';
// import NearbyRequestsList from './NearbyRequestsList';
// // import MyTasksPanel from './MyTasksPanel';
// import ActivityHistory from './ActivityHistory';
// import NearbyTasks from './NearbyTasks';
// import OngoingTasks from './MyTasksPanel';
// import ActivitySummary from './ActivityHistory';

// const VolunteerDashboard = () => {
//   return (
//     <div className="min-h-screen bg-blue-50 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Welcome to Your Volunteer Dashboard</h1>
      
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column (Profile & Requests) */}
//         <div className="lg:col-span-1 flex flex-col gap-6">
//           <ProfileCard />
//           {/* <NearbyRequestsList /> */}
//           <NearbyTasks />
//         </div>

//         {/* Right Column (My Tasks & History) */}
//         <div className="lg:col-span-2 flex flex-col gap-6">
//           {/* <MyTasksPanel /> */}
//           <OngoingTasks />
//           <ActivitySummary />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VolunteerDashboard;
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import NearbyTasks from './NearbyTasks';
import OngoingTasks from './MyTasksPanel';
import ActivitySummary from './ActivityHistory';

const VolunteerDashboard = () => {
  const [refreshCount, setRefreshCount] = useState(0);

  const triggerRefresh = () => setRefreshCount(prev => prev + 1);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
        Welcome to Your Volunteer Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Profile & Tasks) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <ProfileCard />
          <NearbyTasks onTaskAccepted={triggerRefresh} />
        </div>

        {/* Right Column (My Tasks & Summary) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <OngoingTasks refreshCount={refreshCount} />
          <ActivitySummary refreshCount={refreshCount} />
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
