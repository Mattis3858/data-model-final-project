"use client";

import React, { useState, useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function InputBar() {
  return (
    <div className="">
      <input
        type="text"
        className="flex-grow bg-white text-black p-2 rounded-l-lg focus:outline-none"
        placeholder="輸入內容..."
      />
      <button className="bg-white text-black px-6 p-2 rounded-r-lg hover:bg-gray-200 border-l-2">
        Send
      </button>
    </div>
  );
}
