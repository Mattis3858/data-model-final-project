"use client";

import { useState } from "react";
import HomePage from "./pages/homepage";
import ResultPage from "./pages/results_page";
import { ThemeProvider } from "@/themes/ThemeContext";
import { useTheme } from "@/themes/ThemeContext";

export default function Home() {
  const [homePage, setHomePage] = useState(true);
  const [results, setResults] = useState([]);
  const [lookerStudio, setLookerStudio] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        } transition-colors duration-200`}
      >
        {homePage === true ? (
          <HomePage
            isHomePage={homePage}
            setHomePage={setHomePage}
            results={results}
            setResults={setResults}
            lookerStudio={lookerStudio}
            setLookerStudio={setLookerStudio}
            query={query}
            setQuery={setQuery}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ) : (
          <ResultPage
            isHomePage={homePage}
            setHomePage={setHomePage}
            results={results}
            setResults={setResults}
            lookerStudio={lookerStudio}
            setLookerStudio={setLookerStudio}
            query={query}
            setQuery={setQuery}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}
      </div>
    </div>
  );
}
