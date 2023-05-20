import React from 'react'

function Top_banner() {
  return (
 
    <div className="w-full h-[60px] p-3 shadow-sm bg-white flex-1 flex justify-center items-baseline">
      <div className="relative border-1 text-gray-600 w-3/6  rounded-lg bg-slate-200 ">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="w-full pl-8 pr-1 py-1 rounded-lg bg-slate-200 border-gray-300 focus:outline-none focus:border-gray-400 outline-1"
        />
        <div className="absolute top-0 left-0 ml-2 mt-2">
          <svg
            className="fill-current pointer-events-none text-gray-600 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M13.67 14.33l-3.54-3.54a5.5 5.5 0 111.42-1.42l3.54 3.54a5.5 5.5 0 11-1.42 1.42zM7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

  )
}

export default Top_banner;