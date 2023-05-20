import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom'

function StaffHomes() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="  p-2 overflow-hidden">
      <div className="flex items-center float-right p-5">
        <div>
          <h1 className="mr-4 font-bold text-gray-500">Umar Bello</h1>
          <div 
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
          >
          <p className="text-xs text-gray-500 cursor-pointer flex">
            profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
          </div>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className='text-slate-400'
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Activities</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link to="/profile">
          My account
          </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <Link to="/">Logout
          </Link></MenuItem>
      </Menu>
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-slate-50 flex justify-center text-xl items-center">
          UB
        </div>
      </div>
    </div>
  );
}

export default StaffHomes;
