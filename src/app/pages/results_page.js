"use client";
import NavBar from "../components/navbar";

export default function ResultPage({
  isHomePage,
  setHomePage,
  results,
  setResults,
}) {
  const fake_api_results = [
    [
      {
        title: "qianlanwyd/paper-citation-ranking",
        time: "2024/12/19  11:25",
        tag: ["asd", "skjdansd"],
      },
      {
        title: "qianlanwyd/paper-citation-ranking",
        time: "2024/12/19  11:25",
        tag: ["asd", "skjdansd"],
      },
      {
        title: "qianlanwyd/paper-citation-ranking",
        time: "2024/12/19  11:25",
        tag: ["asd", "skjdansd"],
      },
      {
        title: "qianlanwyd/paper-citation-ranking",
        time: "2024/12/19  11:25",
        tag: ["asd", "skjdansd"],
      },
      {
        title: "qianlanwyd/paper-citation-ranking",
        time: "2024/12/19  11:25",
        tag: ["asd", "skjdansd"],
      },
      {
        title: "qianlanwyd/paper-citation-ranking",
        time: "2024/12/19  11:25",
        tag: ["asd", "skjdansd"],
      },
    ],
    "文章總結",
    ["reference1", "reference2", "reference3", "reference4"],
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      {/* navbar */}
      <NavBar homePage={isHomePage} setHomePage={setHomePage} />
      {/* main content */}
      <div className="result_content pt-24 flex justify-center">
        <div className="bg-slate-500 w-3/5 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-6">
            {fake_api_results[0].map((result, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {result.title}
                </h3>
                <p className="text-sm text-gray-600">Time: {result.time}</p>
                <div>
                  {result.tag.map((tag, index) => (
                    <div
                      className="mt-2 inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2"
                      key={index}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4">{fake_api_results[1]}</div>

          {fake_api_results[2].map((result, index) => (
            <div className="pt-4" key={index}>
              result
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
