"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar({
  homePage,
  setHomePage,
  lookerStudio,
  setLookerStudio,
}) {
  const [query, setQuery] = useState("");
  const handlePageClick = () => {
    setLookerStudio(true);
    setHomePage(1);
  };

  return (
    <nav className="w-full bg-blue-600 py-4 px-6 shadow-md flex flex-wrap justify-between items-center">
      <a
        className="text-white text-lg font-bold hover:cursor-pointer"
        onClick={() => {
          setHomePage(0);
        }}
      >
        Search Engine
      </a>
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
        {homePage === 1 && (
          <>
            <input
              type="text"
              className="p-2 rounded-lg focus:outline-none w-full sm:w-auto text-slate-500"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full sm:w-auto">
              Search
            </button>
          </>
        )}
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full sm:w-auto"
          onClick={handlePageClick}
        >
          知識溫度計
        </button>
      </div>
    </nav>
  );
}
