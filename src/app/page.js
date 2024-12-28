"use client";

import { useState } from "react";
import HomePage from "./pages/homepage";
import ResultPage from "./pages/results_page";
export default function Home() {
  const [homePage, setHomePage] = useState(true);
  const [results, setResults] = useState([]);
  const [lookerStudio, setLookerStudio] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div>
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
        />
      )}
    </div>
  );
}
