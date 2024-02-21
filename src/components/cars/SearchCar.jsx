import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function SearchCar() {
  return (
    <div>
      <div className="Search-car pt-3">
        <div className="flex justify-between items-center text-sm font-semibold">
          <h1 className="font-bold text-[18px]">What Are You Looking For</h1>
          <MdOutlineKeyboardArrowDown size={30} />
        </div>
        <div className="search-bar">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-2  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Brand, model..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm h-full text-white font-bold bg-[#aeaab7] rounded-e-lg border border-[grey] hover:bg-[#e79004] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#e79004] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCar