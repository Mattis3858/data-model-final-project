import React, { useState } from "react";
import InputBar from "../components/input_bar";
import NavBar from "../components/navbar";
import {
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
  const [placeholder, setPlaceholder] = useState(
    "Type your search query here..."
  );
  // Loading state

  const handleSearchButtonClick = async () => {
    if (query) {
      setIsLoading(true);
      try {
        const data = await fetchSummary(query);
        console.log(data);

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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex flex-col items-center justify-center">
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
          <p className="text-blue-600 font-semibold mt-4">Loading...</p>
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
      <header className="text-center mb-10 pt-10 sm:pt-0 md:pt-24 lg:pt-32 2xl:pt-52">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          TechTrends Retriever
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Find the TECH information you need quickly and easily!
        </p>
      </header>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl px-4">
        <div className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            className="flex-grow w-full p-4 text-gray-800 focus:outline-none"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="w-full sm:w-auto px-6 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-500 focus:outline-none"
            onClick={handleSearchButtonClick}
            disabled={isLoading} // Disable button during loading
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl px-4">
        <button
          className="p-4 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500"
          onClick={() => {
            handleSQLButtonClick(fetch_shortcut_question1());
          }}
        >
          今天最受歡迎的文章前五篇文章分別為何？
        </button>
        <button
          className="p-4 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500"
          onClick={() => {
            handleSQLButtonClick(fetch_shortcut_question2());
          }}
        >
          今天內關於「AI」的文章中，點讚數最高的三篇文章標題是什麼？
        </button>
        <button
          className="p-4 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500"
          onClick={() => {
            handleSQLButtonClick(fetch_shortcut_question3());
          }}
        >
          對所有來源今日的文章關於 LLM RAG 的內容進行介紹
        </button>
        <button
          className="p-4 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500"
          onClick={() => {
            handleSQLButtonClick(fetch_shortcut_question4());
          }}
        >
          目前資料中來自「medium」的五篇最熱門文章是什麼？
        </button>
      </div>
      {/* {isLoading && (
        <div role="status" className="pt-5">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
          <span className="sr-only">Loading...</span>
        </div>
      )} */}
    </div>
  );
}
