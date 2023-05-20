import React from 'react'
import loader_img from '../../assests/images/wave.svg'
import {Link } from 'react-router-dom'

function pages_loader() {
  return (
    <div className='bg-white flex flex-row w-full h-[100vh]'>
      <div className='w-1/2 bg-white h-[100vh] flex justify-center items-center'>
        <div className='w-1/8'>
          <div className='justify-center'>
        <h1 className='text-blue-700 text-2xl font-extrabold mb-3'><span className='bg-blue-700 text-white p-1' >SUIT</span> School Management System </h1>
      <p className='text-slate-400 text-center mb-20'>Power over cutomization Integrating a Seamless and Flexible Application</p>
        <Link to='Login' className='bg-blue-600 pr-4 pl-4 rounded-sm outline-1 w-[200px] text-sm text-white mt-12 p-2 mb-30 hover:outline-blue-500 hover:bg-blue-500 cursor-pointer active:text-blue-900 active:bg-blue-400'>
        <buttom  >Start</buttom>
      </Link>
      </div>
      </div>
      </div>
      <div className='w-1/2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[100vh] justify-center items-center'>
        <img src={loader_img} alt='Loader_image' className="w-full"/>
       
      </div>
    
    </div>
  )
}

export default pages_loader