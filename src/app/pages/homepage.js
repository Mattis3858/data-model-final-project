import React, { useState, useEffect } from "react";
import Select from "react-select";
import InputBar from "../components/input_bar";
import NavBar from "../components/navbar";
import makeAnimated from "react-select/animated";
import { useTheme } from "@/themes/ThemeContext";
import {
  fetch_get_today_tags,
  fetch_selected_tags_summary,
  fetch_shortcut_question1,
  fetch_shortcut_question2,
  fetch_shortcut_question3,
  fetch_shortcut_question4,
  fetchSummary,
} from "@/apis/fetch_api_functions";

export default function HomePage({
  isHomePage,
  setHomePage,
  results,
  setResults,
  lookerStudio,
  setLookerStudio,
  query,
  setQuery,
  isLoading,
  setIsLoading,
}) {
  const { darkMode } = useTheme();
  const [placeholder, setPlaceholder] = useState(
    "Type your search query here..."
  );
  const [searchMode, setSearchMode] = useState(0); // 0 for text input, 1 for dropdown
  const [multiSelectOptions, setMultiSelectOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSources, setSelectedSources] = useState([
    "github",
    "medium",
    "csdn",
  ]);
  // Loading state
  const get_today_tags = async () => {
    const data = await fetch_get_today_tags();
    // console.log(data);
    const formattedOptions = data["tag"].map((tag) => ({
      value: tag,
      label: tag,
    }));

    // 更新 multiSelectOptions 狀態
    setMultiSelectOptions(formattedOptions);
  };
  const handleSearchButtonClick = async () => {
    if (query) {
      setIsLoading(true);
      try {
        console.log(query);
        console.log(selectedSources);
        const data = await fetchSummary(query, selectedSources);
        // console.log(data);

        //! for real api results
        setResults([data] || []);

        //! for fake api result
        // setResults(data || []);
        setQuery("");
      } catch (error) {
        console.error("Error fetching results:", error);
        setResults([]); // Clear results on error
      } finally {
        setIsLoading(false); // Hide loading spinner
      }
      setHomePage(false);
      setLookerStudio(false);
      setPlaceholder("Type your search query here...");
    } else {
      setPlaceholder("Please type some shit!");
    }
  };

  const handleSQLButtonClick = async (api_call_function) => {
    setIsLoading(true);
    try {
      const data = await api_call_function;
      // console.log(data);
      setResults([data] || []);
    } catch (error) {
      console.error("Error fetching results:", error);
      setResults([]);
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
    setHomePage(false);
    setLookerStudio(false);
    setPlaceholder("Type your search query here...");
  };
  const handleSelectChange = (selected) => {
    setSelectedOptions(selected || []); // Handle both selection and deselection
  };
  const handleMultiSelectSearch = async () => {
    if (selectedOptions.length > 0) {
      setIsLoading(true);
      try {
        console.log(selectedOptions);
        const tags = selectedOptions.map((item) => item.value);
        console.log(selectedSources);
        const data = await fetch_selected_tags_summary(tags, selectedSources);
        console.log(data);
        setResults([data] || []);
      } catch (error) {
        console.error("Error fetching results:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
      setHomePage(false);
      setLookerStudio(false);
    } else {
      alert("Please select at least one query!");
    }
  };

  const handleButtonClick = (source) => {
    setSelectedSources((prev) => {
      if (prev.includes(source)) {
        return prev.filter((item) => item !== source);
      } else {
        return [...prev, source];
      }
    });
  };
  const customStyles = {
    container: (provided) => ({
      ...provided,
      flex: 1,
    }),
    control: (base) => ({
      ...base,
      minWidth: "200px",
      background: darkMode ? "#374151" : "white",
      borderColor: darkMode ? "#4B5563" : "#E5E7EB",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
      background: darkMode ? "#374151" : "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? darkMode
          ? "#4B5563"
          : "#2563EB"
        : darkMode
        ? "#374151"
        : "white",
      color: darkMode ? "white" : "black",
      "&:hover": {
        backgroundColor: darkMode ? "#4B5563" : "#E5E7EB",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: darkMode ? "white" : "black",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: darkMode ? "#4B5563" : "#E5E7EB",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: darkMode ? "white" : "black",
    }),
  };
  useEffect(() => {
    get_today_tags();
    console.log(selectedSources);
  }, [selectedSources]);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } flex flex-col items-center transition-colors duration-200`}
    >
      {isLoading && (
        <div className="fixed inset-0 bg-slate-500 bg-opacity-80 z-50 flex flex-col items-center justify-center">
          <svg
            aria-hidden="true"
            className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <p className="text-white font-semibold mt-4 text-lg">Loading...</p>
        </div>
      )}

      <NavBar
        homePage={isHomePage}
        setHomePage={setHomePage}
        lookerStudio={lookerStudio}
        setLookerStudio={setLookerStudio}
        results={results}
        setResults={setResults}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <header className="text-center mb-2 pt-10 sm:pt-10 md:pt-20 lg:pt-24 2xl:pt-44">
        <h1
          className={`text-3xl sm:text-4xl font-bold ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Knowledge Waves
        </h1>
        <p
          className={`${
            darkMode ? "text-gray-300" : "text-gray-600"
          } text-sm sm:text-base`}
        >
          Find the TECH information you need quickly and easily!
        </p>
      </header>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl px-4 mt-5">
        <div className="flex justify-center mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
            onClick={() =>
              setSearchMode((prevMode) => (prevMode === 0 ? 1 : 0))
            }
          >
            Switch to {searchMode === 0 ? "Dropdown" : "Text Input"} Mode
          </button>
        </div>
        {searchMode === 0 ? (
          <div
            className={`flex flex-col sm:flex-row items-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg rounded-lg overflow-hidden transition-colors duration-200`}
          >
            <input
              type="text"
              className={`flex-grow w-full p-4 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              } focus:outline-none transition-colors duration-200`}
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className={`w-full sm:w-auto px-6 py-4 ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-600 hover:bg-blue-500"
              } text-white font-semibold focus:outline-none transition-colors duration-200`}
              onClick={handleSearchButtonClick}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        ) : (
          <div
            className={`flex flex-col sm:flex-row items-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg rounded-lg relative transition-colors duration-200`}
          >
            <Select
              isMulti
              closeMenuOnSelect={false}
              options={multiSelectOptions}
              value={selectedOptions}
              onChange={handleSelectChange}
              className="flex-grow w-full p-2 text-gray-800"
              placeholder="Select your queries..."
              styles={customStyles}
            />
            <button
              className={`w-full sm:w-auto px-6 py-4 ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-600 hover:bg-blue-500"
              } text-white font-semibold focus:outline-none rounded-r-lg transition-colors duration-200`}
              onClick={handleMultiSelectSearch}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center mt-4 space-x-4">
        {["csdn", "github", "medium"].map((source) => (
          <button
            key={source}
            className={`px-4 py-2 rounded-lg font-semibold focus:outline-none hover:scale-105 transition-all duration-200 ${
              selectedSources.includes(source)
                ? darkMode
                  ? "bg-gray-700 text-white scale-105"
                  : "bg-gray-700 text-white scale-105"
                : darkMode
                ? "bg-gray-400 text-white hover:bg-gray-600"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
            onClick={() => handleButtonClick(source)}
          >
            {source.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl px-4">
        {[
          {
            text: "今天最受歡迎的文章前五篇文章分別為何？",
            action: () => handleSQLButtonClick(fetch_shortcut_question1()),
          },
          {
            text: "今天內關於「AI」的文章中，點讚數最高的三篇文章標題是什麼？",
            action: () => handleSQLButtonClick(fetch_shortcut_question2()),
          },
          {
            text: "對所有來源今日的文章關於 LLM RAG 的內容進行介紹",
            action: () => handleSQLButtonClick(fetch_shortcut_question3()),
          },
          {
            text: "目前資料中來自「medium」的五篇最熱門文章是什麼？",
            action: () => handleSQLButtonClick(fetch_shortcut_question4()),
          },
        ].map((button, index) => (
          <button
            key={index}
            className={`p-4 ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-400 text-white hover:bg-gray-500"
            } rounded-lg shadow-lg transition-colors duration-200`}
            onClick={button.action}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
}
