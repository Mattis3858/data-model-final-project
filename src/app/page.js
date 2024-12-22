"use client";

import React, { useState, useEffect } from "react";
import InputBar from "./components/input_bar";

export default function Home() {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      {/* Input Section */}
      <InputBar />
      {/* Buttons Section */}
      <div className="grid grid-cols-2 gap-4 mt-6 w-1/3">
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
