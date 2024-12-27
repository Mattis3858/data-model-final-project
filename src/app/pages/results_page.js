"use client";
import { useState } from "react";
import NavBar from "../components/navbar";

export default function ResultPage({
  isHomePage,
  setHomePage,
  results,
  setResults,
  lookerStudio,
  setLookerStudio,
}) {
  // const results = [];
  const handleCardOnClick = (href) => {
    window.open(href, "_blank");
  };

  const [tagLooker, setTagLooker] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* navbar */}
      <NavBar
        homePage={isHomePage}
        setHomePage={setHomePage}
        lookerStudio={lookerStudio}
        setLookerStudio={setLookerStudio}
      />
      {/* main content */}
      {lookerStudio && (
        <div className="text-black">
          <button>normal looker studio</button>
          <button>tag looker</button>
        </div>
      )}
      <div className="result_content mt-10 flex justify-center">
        <div className="bg-slate-500 w-3/5 p-6 rounded-lg mb-10">
          {lookerStudio === false && tagLooker === false && (
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
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {results[0].article_titles["csdn"] &&
                  results[0].article_titles["csdn"].map((article, index) => (
                    <a
                      key={index}
                      href={article[1]}
                      className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {article[0]}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Likes: {article[2]}
                      </p>
                    </a>
                  ))}
                {results[0].article_titles["github"] &&
                  results[0].article_titles["github"].map((article, index) => (
                    <a
                      key={index}
                      href={article[1]}
                      className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {article[0]}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Likes: {article[2]}
                      </p>
                    </a>
                  ))}
                {results[0].article_titles["medium"] &&
                  results[0].article_titles["medium"].map((article, index) => (
                    <a
                      key={index}
                      href={article[1]}
                      className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {article[0]}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Likes: {article[2]}
                      </p>
                    </a>
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

              {/* Articles */}
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
        </div>
      </div>
    </div>
  );
}
