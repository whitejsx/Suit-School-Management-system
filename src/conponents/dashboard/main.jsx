import React from "react";
import {  Routes, Route } from "react-router-dom";
import DashboardFrame from "../layout/dashboardFrame";
// import Welcome_page from "./pages/welcome_page"
import Side_bar from "../layout/side_bar.jsx";
import Home from "../dashboard/pages/staffHomes.jsx";
import Alert from "../common/Alert.jsx";
import Fees from "./pages/Fees";
import GradingSystem from "./pages/gradingSystem";
import Timetable from "./pages/Timetable";
import ClassManagement from './pages/classManagement'
import Staff from "./pages/StaffManagement"
import Report from "./pages/Report"


function main() {
  return (
    <div>
      <Side_bar/>
      <Home />
      <div id="content" className="h-screen w-screen">
      <div className="ml-80 ">
      <Alert />
  
    <Routes>
        <Route  index path="/" element={<DashboardFrame />} />
        <Route   path="/fees" element={<Fees />} />
        <Route   path="/class" element={<ClassManagement />} />
        <Route   path="/grade" element={<GradingSystem />} />
        <Route   path="/staff" element={<Staff />} />
        <Route   path="/report" element={<Report />} />
        <Route   path="/fees" element={<Fees />} />
        <Route   path="/timetable" element={<Timetable />} />
        {/* <Route  index path="/timetable" element={<GradingSystem />} /> */}
        
    </Routes> 

    {/* // <DashboardFrame /> */}
    </div>
    </div>
    </div>
  );
}

export default main;
