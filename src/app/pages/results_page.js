"use client";
import NavBar from "../components/navbar";

export default function ResultPage({ isHomePage, setHomePage }) {
  return (
    <div>
      <NavBar homePage={isHomePage} setHomePage={setHomePage} />
    </div>
  );
}
