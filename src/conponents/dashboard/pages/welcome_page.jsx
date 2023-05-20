import React from "react";
import { Link } from "react-router-dom";

function welcome_page() {
  return (
    <div className="w-screen h-[100vh] overflow-hidden">
      {/* banner header */}
      <div className="w-screen h-[30vh] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-10 text-white">
        
        <Link to="/dashboard">
          <h1 className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
            Welcome Back
          </h1>
        </Link>
      </div>
      {/* user cars */}
      <div className="flex justify-around items-center">
        <div className="block  bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-3/12 mt-[-35px]">
          <div className="border-b-2 bg-gray-100 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              21/12/2023
            </div>
          </div>

          <div className="p-6 flex flex-col justify-center items-center">
            <div className="w-20 h-20 rounded-full bg-blue-400"></div>
            <h5 className="mb-2 mt-12 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Umar Bello
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              x-suit-21222/11
            </p>
            <div className="flex text-gray-700 text-xs tracking-wide">
              <p className="mr-1">Full Time </p>|
              <p className="mr-1">Mathemetices</p>|
              <p className="mr-1">Primary Five</p>
            </div>
          </div>
          <Link to="/dashboard">
          <div className="border-t-2 border-neutral-100 text-gray-500 cursor-pointer hover:bg-gray-50 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            Proceed to Dashboard
          </div>
          </Link>
        </div>

        <div className="block  bg-white text-center rounded-sm dark:bg-neutral-700 w-6/12 mt-[-105px]">
          <div className="border-b-2 bg-gray-100 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            School Management System
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {/* Special title treatment */}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {/* With supporting text below as a natural lead-in to additional
      content. */}
            </p>
            <button
              type="button"
              className="inline-block mt-2 justify-end bg-gray-200 w-full rounded-sm bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-primary-600 hover:bg-gray-50 active:bg-slate-100"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Curiculum
            </button>

            <button
              type="button"
              className="inline-block mt-2 justify-end bg-gray-200 w-full rounded-sm bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-primary-600 hover:bg-gray-50 active:bg-slate-100"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Lession Note
            </button>
          </div>
          <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            <p><span >Last login : </span> 2 days ago</p>
          </div>
        </div>
      </div>
      {/* activity summery */}
    </div>
  );
}

export default welcome_page;
