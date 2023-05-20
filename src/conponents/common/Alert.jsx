import React from 'react'
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Alertbox() {
  return (
    <div>
         <Alert severity="info">
            <AlertTitle>
              <strong>HI, Umar Bello</strong>
            </AlertTitle>
            Welcome to Your Dashboard—
          </Alert>
          
    </div>
  )
}

export default Alertbox