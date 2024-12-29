"use client";
import { useState } from "react";
import NavBar from "../components/navbar";
import { fetchSummary } from "@/apis/fetch_api_functions";

export default function ResultPage({
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
  // const results = [];
  const handleCardOnClick = (href) => {
    window.open(href, "_blank");
  };

  const [tagLooker, setTagLooker] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-80 z-50 flex flex-col items-center justify-center">
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
      {/* navbar */}
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
      {/* main content */}
      {lookerStudio && (
        <div className="text-black flex justify-center mt-10">
          {tagLooker === false ? (
            <>
              <button
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 mx-2"
                onClick={() => setTagLooker(false)}
              >
                Normal Looker
              </button>
              <button
                className="bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 mx-2"
                onClick={() => setTagLooker(true)}
              >
                Tag Looker
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 mx-2"
                onClick={() => setTagLooker(false)}
              >
                Normal Looker
              </button>
              <button
                className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 mx-2"
                onClick={() => setTagLooker(true)}
              >
                Tag Looker
              </button>
            </>
          )}
        </div>
      )}
      <div className="result_content mt-10 flex justify-center">
        <div className="bg-slate-500 w-3/5 p-6 rounded-lg mb-10">
          {lookerStudio === false &&
            tagLooker === false &&
            results[0].interested_tags && (
              <div>
                {/* Interested Tags */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Interested Tags
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {results[0].interested_tags &&
                      results[0].interested_tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded hover:cursor-pointer"
                          onClick={() => fetchSummary(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <h2 className="text-xl font-bold text-white">Articles</h2>
                  {results[0].article_titles["csdn"] &&
                    results[0].article_titles["csdn"].map((article, index) => (
                      <a
                        key={index}
                        href={article[1]}
                        className="bg-white shadow-lg rounded-lg p-4 flex justify-between"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {article[0]}
                        </h3>
                        <p className="text-sm text-gray-600">
                          👍: {article[2]}
                        </p>
                      </a>
                    ))}
                  {results[0].article_titles["github"] &&
                    results[0].article_titles["github"].map(
                      (article, index) => (
                        <a
                          key={index}
                          href={article[1]}
                          className="bg-white shadow-lg rounded-lg p-4 flex justify-between"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {article[0]}
                          </h3>
                          <p className="text-sm text-gray-600">
                            👍: {article[2]}
                          </p>
                        </a>
                      )
                    )}
                  {results[0].article_titles["medium"] &&
                    results[0].article_titles["medium"].map(
                      (article, index) => (
                        <a
                          key={index}
                          href={article[1]}
                          className="bg-white shadow-lg rounded-lg p-4 flex  justify-between"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {article[0]}
                          </h3>
                          <p className="text-sm text-gray-600">
                            👍: {article[2]}
                          </p>
                        </a>
                      )
                    )}
                </div>
                {/* Summarized Content */}
                <div className="mb-6 mt-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Summarized Content
                  </h2>
                  <p className="text-white whitespace-pre-line">
                    {results[0].summarized_content}
                  </p>
                </div>

                {/* Articles */}
              </div>
            )}
          {lookerStudio === false &&
            tagLooker === false &&
            results[0].articles && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Articles</h2>
                <div className="grid grid-cols-1 gap-6">
                  {results[0].articles.map((article, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          Source: {article.source}
                        </p>
                        <p className="text-sm text-gray-600">
                          👍: {article.likes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Summarized Content */}
                <div className="mb-6 mt-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Summarized Content
                  </h2>
                  <p className="text-white whitespace-pre-line">
                    {results[0].summarized_content}
                  </p>
                </div>
              </div>
            )}

          {lookerStudio && tagLooker === false && (
            <div className="iframe-container flex items-center justify-center">
              <iframe
                width="1200"
                height="800"
                src="https://lookerstudio.google.com/embed/reporting/52c37a61-a7fe-4d8d-9d14-883054ce2290/page/k0eaE"
                style={{ border: 0 }}
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          )}
          {lookerStudio && tagLooker === true && (
            <div>
              <iframe
                width="1100"
                height="800"
                src="https://lookerstudio.google.com/embed/reporting/e506aa88-ce92-4f59-b02e-5b5deafe3acc/page/KNgaE"
                style={{ border: 0 }}
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
