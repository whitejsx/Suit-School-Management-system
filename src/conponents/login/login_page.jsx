import React from 'react'
import loader_img from '../../assests/images/wave.svg'
import {Link } from 'react-router-dom'

function login_page() {
  return (
    <div>
    <div className='bg-white flex flex-row w-full h-[100vh] justify-center'>
      <div className='w-1/2 bg-slate-100 h-[100vh] flex justify-center items-center '>
        <div className='w-5/6 h-[55vh] bg-white shadow-lg rounded-md p-10'>
          <form>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
             Name:
            </label>
            <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Adamu Bello"
          />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="textl">
              Staff ID:
            </label>
            <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="passcode"
            placeholder="Staff ID"
          />
            </div>
           <Link to="/profile">
            <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pr-2 pl-2 rounded-sm outline-1 w-[200px] text-sm text-white mt-10 p-2 mb-30 hover:outline-blue-500 hover:bg-blue-500 cursor-pointer active:text-blue-900 active:bg-blue-400'>Login</button>
            </Link>
          </form>
      <p className='mt-4 text-slate-400'>Forget Password? Click here</p>
      </div>
      </div>
      <div className='w-1/2 bg-white h-[100vh] justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 '>
        <img src={loader_img} alt='Loader_image' className="w-full" />

       
      </div>
    
    </div>
   </div>
  )
}

export default login_page