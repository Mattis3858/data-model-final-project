"use client";

import { useState } from "react";
import HomePage from "./pages/homepage";

export default function Home() {
  const [homePage, setHomePage] = useState(0);

  return <HomePage isHomePage={homePage} setHomePage={setHomePage} />;
}
