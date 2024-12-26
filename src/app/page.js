"use client";

import { useState } from "react";
import HomePage from "./pages/homepage";
import ResultPage from "./pages/results_page";
export default function Home() {
  const [homePage, setHomePage] = useState(0);

  return (
    <div>
      {homePage === 0 ? (
        <HomePage isHomePage={homePage} setHomePage={setHomePage} />
      ) : (
        <ResultPage isHomePage={homePage} setHomePage={setHomePage} />
      )}
    </div>
  );
}
