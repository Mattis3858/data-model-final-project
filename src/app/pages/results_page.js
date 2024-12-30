"use client";
import { useState, useMemo } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useTheme } from "@/themes/ThemeContext";
import NavBar from "../components/navbar";
import { fetch_selected_tags_summary } from "@/apis/fetch_api_functions";

// Components
const LoadingSpinner = () => (
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
);

const ArticleCard = ({ title, url, source, likes }) => (
  <a
    href={url}
    className="bg-white shadow-lg rounded-lg p-4 transform hover:scale-110 hover:shadow-xl transition duration-50 flex flex-col h-full"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex-grow">
      <h3 className="text-lg font-md text-gray-600 mb-2">{title}</h3>
    </div>
    <div className="mt-auto">
      <p className="text-sm text-gray-600 mb-2">{source}</p>
      <p className="text-sm text-gray-600 flex flex-row items-center">
        <FaRegThumbsUp className="mr-1" /> {likes || 0}
      </p>
    </div>
  </a>
);

const TagsList = ({ tags, onTagClick }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-white mb-4">Interested Tags</h2>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => onTagClick(tag, ["github", "medium", "csdn"])}
          className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded hover:bg-blue-200 hover:text-blue-900 hover:scale-105 transition duration-100"
        >
          {tag}
        </button>
      ))}
    </div>
  </div>
);

const LookerStudioTabs = ({ tagLooker, setTagLooker }) => (
  <div className="text-black flex justify-center mt-10">
    <button
      className={`font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 mx-2 ${
        !tagLooker
          ? "bg-blue-600 text-white scale-110"
          : "bg-gray-700 text-white hover:bg-blue-700 scale-90"
      }`}
      onClick={() => setTagLooker(false)}
    >
      Dashboard
    </button>
    <button
      className={`font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 mx-2 ${
        tagLooker
          ? "bg-green-600 text-white scale-110"
          : "bg-gray-700 text-white hover:bg-green-700 scale-90"
      }`}
      onClick={() => setTagLooker(true)}
    >
      Tags
    </button>
  </div>
);

export default function ResultPage({
  isHomePage,
  setHomePage,
  results,
  setResults,
  lookerStudio,
  setLookerStudio,
  isLoading,
  setIsLoading,
}) {
  const { darkMode } = useTheme();
  const [tagLooker, setTagLooker] = useState(false);

  const handleTagsClick = async (selected_tags, sources) => {
    setIsLoading(true);
    try {
      const data = await fetch_selected_tags_summary(selected_tags, sources);
      setResults([data] || []);
    } catch (error) {
      console.error("Error fetching results:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
    setHomePage(false);
    setLookerStudio(false);
  };

  const formattedContent = useMemo(() => {
    if (!results[0]?.summarized_content) return "";
    return results[0].summarized_content.replace(
      /<a /g,
      `<a class="custom-link inline-block bg-white px-1 text-gray-600 rounded-lg font-semibold shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200" `
    );
  }, [results]);

  const renderArticles = (articles, source) => (
    <div className="grid grid-cols-3 gap-6">
      {articles?.map((article, index) => (
        <ArticleCard
          key={index}
          title={article[0]}
          url={article[1]}
          source={source}
          likes={article[2]}
        />
      ))}
    </div>
  );

  const renderContent = () => {
    if (lookerStudio) {
      return (
        <div className="iframe-container flex items-center justify-center">
          <iframe
            width="1500"
            height="800"
            src={
              tagLooker
                ? "https://lookerstudio.google.com/embed/reporting/e506aa88-ce92-4f59-b02e-5b5deafe3acc/page/KNgaE"
                : "https://lookerstudio.google.com/embed/reporting/52c37a61-a7fe-4d8d-9d14-883054ce2290/page/k0eaE"
            }
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      );
    }

    if (!results[0]) return null;

    return (
      <>
        {results[0].interested_tags && (
          <TagsList
            tags={results[0].interested_tags}
            onTagClick={handleTagsClick}
          />
        )}
        <h2 className="text-xl font-bold text-white mb-4">Articles</h2>
        {results[0].article_titles ? (
          <>
            {renderArticles(results[0].article_titles["csdn"], "csdn")}
            {renderArticles(results[0].article_titles["github"], "github")}
            {renderArticles(results[0].article_titles["medium"], "medium")}
          </>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {results[0].articles?.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                url={article.url}
                source={article.source}
                likes={article.likes}
              />
            ))}
          </div>
        )}
        <div className="mb-6 mt-6">
          <h2 className="text-xl font-bold text-white mb-4">
            Summarized Content
          </h2>
          <div
            className="text-white whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
        </div>
      </>
    );
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-200`}
    >
      {isLoading && <LoadingSpinner />}

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

      {lookerStudio && (
        <LookerStudioTabs tagLooker={tagLooker} setTagLooker={setTagLooker} />
      )}

      <div className="result_content mt-10 flex justify-center">
        <div
          className={`bg-slate-500 ${
            lookerStudio ? "w-4/5" : "w-3/5"
          } p-6 rounded-lg mb-10`}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
