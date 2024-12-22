"use client";

import React, { useState, useEffect } from "react";
import InputBar from "./components/input_bar";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <NavBar />
      <div className="w-1/2 flex items-center">
        <input
          type="text"
          className="flex-grow bg-gray-800 text-white p-4 rounded-l-lg focus:outline-none"
          placeholder="輸入內容..."
        />
        <button className="bg-gray-600 text-white px-6 py-4 rounded-r-lg hover:bg-gray-700">
          SEND
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 w-1/2">
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          幫我列出24小時內最熱門的文章
        </button>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          機器學習
        </button>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          ...
        </button>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          ...
        </button>
      </div>
    </div>
  );
}
