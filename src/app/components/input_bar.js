"use client";

import React, { useState, useEffect } from "react";

export default function InputBar() {
  return (
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
  );
}
