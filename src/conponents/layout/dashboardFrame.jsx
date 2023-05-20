import React from 'react'
import Overview from "../layout/Overview.jsx";
import QuickLinks from "../layout/QuickLinks.jsx";


function DashboardFrame() {
  return (
    <div>
         {/* side bar here */}
      {/* <Welcome_page /> */}
      {/* <Side_bar /> */}
      {/* header banner */}
      {/* <!--Main layout--> */}
        
       
        
         
          <Overview />
          <h2 className="mt-10 font-bold text-gray-400">Quick Link</h2>
          <QuickLinks />
       
    </div>
  )
}

export default DashboardFrame