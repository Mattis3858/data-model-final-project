"use client";

import { useState } from "react";
import HomePage from "./pages/homepage";
import ResultPage from "./pages/results_page";
export default function Home() {
  const [homePage, setHomePage] = useState(0);
  const [results, setResults] = useState([]);
  const [lookerStudio, setLookerStudio] = useState(false);

  return (
    <div>
      {homePage === 0 ? (
        <HomePage
          isHomePage={homePage}
          setHomePage={setHomePage}
          results={results}
          setResults={setResults}
          lookerStudio={lookerStudio}
          setLookerStudio={setLookerStudio}
        />
      ) : (
        <ResultPage
          isHomePage={homePage}
          setHomePage={setHomePage}
          results={results}
          setResults={setResults}
          lookerStudio={lookerStudio}
          setLookerStudio={setLookerStudio}
        />
      )}
    </div>
  );
}
