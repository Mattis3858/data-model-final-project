import React, { useState, useEffect } from "react";
import InputBar from "../components/input_bar";
import NavBar from "../components/navbar";

export default function HomePage({ isHomePage, setHomePage }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [placeholder, setPlaceholder] = useState(
    "Type your search query here..."
  );

  // Mock search function
  const handleSearch = () => {
    if (query) {
      // Mocking search results
      setResults([
        `Result for "${query}" - 1`,
        `Result for "${query}" - 2`,
        `Result for "${query}" - 3`,
      ]);
      setHomePage(1);
    } else {
      setPlaceholder("Please type some shit!");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Search Engine</h1>
        <p className="text-gray-600">
          Find the information you need quickly and easily!
        </p>
      </header>

      {/* Search Section */}
      <div className="w-full max-w-2xl">
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            className="w-full p-4 text-gray-800 focus:outline-none"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="px-6 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-500 focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full max-w-2xl mt-8">
        {results.length > 0 ? (
          <ul className="bg-white shadow-lg rounded-lg divide-y divide-gray-200">
            {results.map((result, index) => (
              <li
                key={index}
                className="p-4 hover:bg-gray-100 transition-colors"
              >
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center mt-4">
            No results found. Try searching for something.
          </p>
        )}
      </div>
    </div>
  );
}
