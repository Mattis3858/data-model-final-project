"use client";
import InputBar from "./input_bar";
export default function NavBar({ homePage, setHomePage }) {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10 flex items-center justify-center h-16">
      <div className="container flex items-center justify-center gap-56">
        {/* {console.log(homePage)} */}
        {homePage === 0 ? null : <InputBar />}
        <button
          className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200"
          onClick={() => {
            setHomePage(1);
          }}
        >
          知識溫度計
        </button>
      </div>
    </nav>
  );
}
