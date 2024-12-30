import { useTheme } from "@/themes/ThemeContext";
import { createContext, useContext, useState, useEffect } from "react";

export default function NavBar({
  homePage,
  setHomePage,
  results,
  setResults,
  lookerStudio,
  setLookerStudio,
  isLoading,
  setIsLoading,
}) {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("Search...");
  const { darkMode, toggleDarkMode } = useTheme();

  const handlePageClick = () => {
    setLookerStudio(true);
    setHomePage(false);
  };

  const handleSearchButtonClick = async () => {
    if (query) {
      setIsLoading(true);
      try {
        const data = await fetchSummary(query);
        setResults([data] || []);
        setQuery("");
      } catch (error) {
        console.error("Error fetching results:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
      setHomePage(false);
      setLookerStudio(false);
      setPlaceholder("Search...");
    } else {
      setPlaceholder("Please type some shit!");
    }
  };

  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-gray-800" : "bg-blue-600"
      } py-4 px-6 shadow-md flex flex-wrap justify-between items-center transition-colors duration-200`}
    >
      <a
        className="text-white text-lg font-bold hover:cursor-pointer"
        onClick={() => {
          setHomePage(true);
        }}
      >
        Knowledge Waves
      </a>
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
        {homePage === false && (
          <>
            <input
              type="text"
              className={`p-2 rounded-lg focus:outline-none w-full sm:w-auto ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-slate-500"
              }`}
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className={`${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-white text-blue-600 hover:bg-gray-200"
              } px-4 py-2 rounded-lg font-semibold w-full sm:w-auto transition-colors duration-200`}
              onClick={handleSearchButtonClick}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </>
        )}
        <button
          className={`${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-white text-blue-600 hover:bg-gray-200"
          } px-4 py-2 rounded-lg font-semibold w-full sm:w-auto transition-colors duration-200`}
          onClick={handlePageClick}
        >
          技術溫度計
        </button>
        <button
          className={`${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-white text-blue-600 hover:bg-gray-200"
          } px-4 py-2 rounded-lg font-semibold w-full sm:w-auto transition-colors duration-200`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
