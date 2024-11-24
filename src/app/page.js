"use client";
import React, { useState, useEffect } from "react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
);

const CardContent = ({ children }) => <div className="p-6">{children}</div>;

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(Date.now());
  // 追蹤下次自動重整的時間
  const [nextRefresh, setNextRefresh] = useState(300);

  // 手動重整函數
  const handleRefresh = () => {
    setRefreshKey(Date.now());
    setNextRefresh(300);
  };

  // 自動重整計時器
  useEffect(() => {
    const timer = setInterval(() => {
      setNextRefresh((prev) => {
        if (prev <= 1) {
          handleRefresh();
          return 300;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 重整按鈕組件
  const RefreshButton = () => (
    <button
      onClick={handleRefresh}
      className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      重新整理 ({nextRefresh}s)
    </button>
  );
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* 頁面標題 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">數據分析儀表板</h1>
          <p className="mt-2 text-gray-600">即時業務數據追蹤與分析</p>
        </div>

        {/* Looker 報表卡片 */}
        <Card>
          <CardHeader>
            <CardTitle>業務報表</CardTitle>
            <RefreshButton />
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[450px]">
              <iframe
                key={refreshKey}
                src="https://lookerstudio.google.com/embed/reporting/e3de3be6-49dd-481e-af0f-23078020b3e7/page/p_746n93bxmd"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>報表說明</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                此報表顯示即時的業務數據分析，包含關鍵績效指標和趨勢分析。
                數據每日更新，供管理層決策參考。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>使用說明</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 text-gray-600 space-y-2">
                <li>可以點擊報表中的各個元素進行互動</li>
                <li>可以使用右上角的全螢幕按鈕查看詳細資料</li>
                <li>報表每300秒自動重新整理一次</li>
                <li>可以點擊重新整理按鈕立即更新報表</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
