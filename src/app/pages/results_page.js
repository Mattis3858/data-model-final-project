"use client";
import NavBar from "../components/navbar";

export default function ResultPage({ isHomePage, setHomePage }) {
  return (
    <div>
      {/* navbar */}
      <NavBar homePage={isHomePage} setHomePage={setHomePage} />
      {/* main content */}
      <div className="result_content"></div>
    </div>
  );
}
