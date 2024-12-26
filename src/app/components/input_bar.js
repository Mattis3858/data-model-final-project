"use client";

import React, { useState, useEffect } from "react";

export default function InputBar() {
  return (
    <div className="">
      <input
        type="text"
        className="flex-grow bg-white text-black p-2 rounded-l-lg focus:outline-none"
        placeholder="輸入內容..."
      />
      <button className="bg-gray-600 text-white px-6 p-2 rounded-r-lg hover:bg-gray-700">
        SEND
      </button>
    </div>
  );
}
