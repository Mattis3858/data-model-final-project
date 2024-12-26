"use client";
import React, { useState } from "react";

export default function NavBar({ homePage, setHomePage }) {
  const [query, setQuery] = useState("");

  return (
    <nav className="w-full bg-blue-600 py-4 px-6 shadow-md flex flex-wrap justify-between items-center">
      <div className="text-white text-lg font-bold">Search Engine</div>
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
        <input
          type="text"
          className="p-2 rounded-lg focus:outline-none w-full sm:w-auto"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full sm:w-auto">
          Search
        </button>
        <a
          href="/new-page"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full sm:w-auto text-center"
        >
          New Page
        </a>
      </div>
    </nav>
  );
}
