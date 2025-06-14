// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import BreakTheChains from "./pages/BreakTheChains";
// import WhatWeDo from "./pages/WhatWeDo";
// import GamifiedGiving from "./pages/GamifiedGiving";
// import DonationPage from "./pages/Donate";
// import LeftOverToLife from "./pages/LeftOverToLife";

// const App = () => {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/leftover-to-life" element={<LeftOverToLife />}/>
//         <Route path="/gamified-giving" element={<GamifiedGiving />} />
//         <Route path="/what-we-do" element={<WhatWeDo />}/>
//         <Route path="/donate" element={<DonationPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BreakTheChains from "./pages/BreakTheChains";
import WhatWeDo from "./pages/WhatWeDo";
import GamifiedGiving from "./pages/GamifiedGiving";
import DonationPage from "./pages/Donate";
import LeftOverToLife from "./pages/LeftOverToLife";
import VerifyOtp from "./pages/VerifyOtp";
import RoleSelection from "./pages/RoleSelectionPage";
import VolunteerRoutes from "./routes/VolunteerRoutes";
import VolunteerThankYou from "./pages/Volunteer/VolunteerThankYou";
import VolunteerDashboard from "./Components/Vounteer/VolunteerDashboard";
import VolunteerProfile from "./pages/Volunteer/VolunteerProfile";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leftover-to-life" element={<LeftOverToLife />}/>
        <Route path="/gamified-giving" element={<GamifiedGiving />} />
        <Route path="/what-we-do" element={<WhatWeDo />}/>
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/choose-role" element={<RoleSelection />} />
        <Route path="/volunteer/*" element={<VolunteerRoutes />} />
        <Route path="/volunteer/profile" element={<VolunteerProfile />} />
        <Route path="/volunteer/thankyou" element={<VolunteerThankYou />} />
        <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
        {/* Add more routes as needed */}
        {/* Redirect to home if no route matches */}
      </Routes>
    </div>
  );
};

export default App;
