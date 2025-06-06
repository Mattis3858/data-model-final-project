import { base_url } from "./api_urls";

export const fetchSummary = async (
  query,
  selectedSources = ["github", "medium", "csdn"]
) => {
  // console.log(query);
  // console.log(selectedSources);
  const response = await fetch(`${base_url}text_search_summarize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      sources: selectedSources,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  // Parse the response as JSON
  const result = await response.json();
  // console.log(data); // Log the parsed data for debugging

  // response = response.json();

  // fake api results
  // const result = [
  //   {
  //     interested_tags: [
  //       "职场和发展",
  //       "数据结构与算法",
  //       "算法",
  //       "运维",
  //       "自动化测试",
  //       "数据结构",
  //       "贪心算法",
  //       "开发语言",
  //       "程序人生",
  //       "服务器",
  //     ],
  //     summarized_content:
  //       '"csdn" 什么是数据结构: 本文概述了數據結構的概念、分類、常見類型及其重要性。\n\n**數據結構**是組織、儲存和管理數據的方式，定義了數據的儲存格式和操作方式。其核心目的在於有效地處理數據，並提升程式效率。\n\n**分類**方面，數據結構可根據數據元素間關係、儲存方式和操作方式進行分類。\n\n* **按數據元素關係分類：**  線性結構（如陣列、連結串列、堆疊、佇列）元素之間存在線性順序；非線性結構（如樹、圖、集合、映射）元素之間的關係則是非線性的。\n\n* **按儲存方式分類：** 序列儲存結構（如陣列）數據在記憶體中連續存放；鏈式儲存結構（如連結串列）數據通過指標連接。\n\n* **按操作方式分類：**  靜態數據結構（如陣列）大小和結構在建立時確定；動態數據結構（如連結串列、動態陣列）大小和結構可在運行時改變。\n\n**常見數據結構**包括：\n\n* **線性結構：** 陣列（快速隨機存取）、連結串列（高效插入/刪除）、堆疊（後進先出）、佇列（先進先出）。\n\n* **非線性結構：** 樹（表示層級關係）、圖（表示複雜關係）、哈希表（快速查找、插入、刪除）。\n\n**數據結構的重要性**在於提升程式效率。不同數據結構在不同場景下有不同的優缺點。例如，陣列適合快速隨機存取，但插入/刪除效率低；連結串列適合頻繁插入/刪除，但查找效率低；哈希表適合快速查找，但對記憶體要求高。\n\n**常見操作**包括查找、插入、刪除、更新。\n\n**時間複雜度**是衡量數據結構效率的重要指標。不同數據結構在不同操作上的時間複雜度可能不同。\n\n總而言之，理解各種數據結構的特點和操作是程式設計和演算法設計的基礎，選擇合適的數據結構可以提高程式效率和可維護性。\n\n\n"csdn" C语言从入门到放弃教程: 這篇文章介紹了 C 語言的入門知識，涵蓋了從安裝到基礎語法、數據類型、輸入輸出、控制結構、陣列、字串、函數、指標、結構體、聯合體、頭文件、檔案操作，以及簡單的資料庫操作。\n\n文章首先介紹了 C 語言的特性、歷史和應用領域，接著說明了在不同作業系統（例如 Windows）上安裝 C 語言編譯器和編輯器的方法，並以 "Hello, World!" 程式範例引導讀者入門。\n\n接著，文章詳細講解了 C 語言的基礎語法，包括註解、關鍵字（涵蓋了 C89/C90、C99、C11、C17 和 C23 的關鍵字），常量（使用 `#define`、`const` 和 `enum`），變量（包括聲明、定義、初始化、作用域和存儲類型），字面量（整數、浮點數、字符、字串和布林），格式化輸出，ASCII 碼，轉義序列，`sizeof` 運算符，以及各種數據類型（基本數據類型、派生數據類型和空類型）。\n\n文章進一步探討了 C 語言的控制結構（順序結構、選擇結構、循環結構），陣列（一維、多維、動態陣列），字串（聲明、初始化、訪問、輸入輸出和處理函數），函數（定義、聲明、參數傳遞、返回值、嵌套和遞迴），指標（基本概念、訪問、運算、與陣列的關係、動態記憶體分配、函數參數傳遞、指標陣列和多級指標、指標與字串、函數指標），結構體（定義、聲明、初始化、訪問成員、結構體陣列、結構體作為函數參數、嵌套結構體、動態分配結構體、匿名結構體和 typedef），聯合體（基本概念、聲明、初始化、訪問成員、與結構體的比較、匿名聯合體和 typedef、應用場景和注意事項），頭文件（作用、創建、包含、實現與聲明分離、使用優點和注意事項），以及檔案操作（檔案指標、打開、關閉、讀取、寫入、定位、檢測和複製範例）。\n\n最後，文章簡要介紹了使用 C 語言 API 操作 MySQL、PostgreSQL 和 SQLite 資料庫的方法。\n\n總體而言，文章提供了 C 語言從入門到進階的全面介紹，並包含了大量的範例程式碼，有助於讀者理解和掌握 C 語言的各種概念和用法。\n\n\n"csdn" PDF书籍《手写调用链监控APM系统-Java版》第12章 结束: 這本書以實作方式講解如何用 Java 實現一個呼叫鏈監控系統 (APM)，涵蓋了 JavaAgent、ByteBuddy、SPI 服務、類載入器命名空間、JDK 類增強、Kafka 等核心技術。作者透過逐步編碼，闡述了系統架構和各個組件的功能，例如配置系統、插件系統、服務系統等，並以插件實例說明如何收集、處理和上報呼叫鏈資訊。\n\n書中詳細介紹了呼叫鏈監控的各種情境，包括不同類型的 Span、JDK 類庫增強以及跨進程的 TraceSegment 傳輸。雖然書中未包含 Kafka 消費者、資料清洗、資料庫儲存 (Elasticsearch, ClickHouse) 和前端展示等後續步驟，但已完整地鋪陳了系統架構和核心邏輯。\n\n本書的目標讀者包括希望了解呼叫鏈監控技術、提升 Java 程式設計能力、或想參考 Skywalking 原始碼的開發者。  作者強調本書的程式碼和原理皆為個人創作，並附上相關的 PDF 和原始碼，供讀者參考學習。  作者也歡迎讀者提供回饋和指正。\n\n\n"csdn" 贪心算法（三）: 這篇文章涵蓋了四道程式設計題，並針對每道題目提供了貪心策略和解題程式碼。\n\n**一、k 次取反後最大化的陣列和**\n\n此題旨在找到在最多執行 k 次數字取反操作後，陣列元素總和的最大值。策略是先排序陣列，然後從最小的負數開始取反，直到取反次數達到 k 或沒有負數為止。如果 k 大於負數的數量，則將剩餘的 k 次取反操作應用於最小的正數，並取反。\n\n**二、優勢洗牌**\n\n此題要求根據另一個陣列的元素大小，重新排列第一個陣列的元素，以最大化第一個陣列的元素與第二個陣列對應元素的比較優勢。策略是先排序兩個陣列，然後將第一個陣列的元素與第二個陣列中較小的元素匹配，並將第一個陣列中較大的元素與第二個陣列中較大的元素匹配。\n\n**三、最長回文串**\n\n此題旨在找到字串中最長的回文子串的長度。策略是統計字串中每個字符的出現次數，如果出現次數為偶數，則該字符可以完全用於回文串；如果出現次數為奇數，則可以選擇一個字符放在中間。最終長度為所有偶數次出現字符的總和加上一個奇數次出現字符（如果存在）。\n\n**四、增減字符串匹配**\n\n此題要求根據增減指示符（\'I\' 或 \'D\'）生成一個整數陣列，其中 \'I\' 表示遞增，\'D\' 表示遞減。策略是使用兩個指針，一個指向最小值，另一個指向最大值。遇到 \'I\' 時，選擇最小值並遞增；遇到 \'D\' 時，選擇最大值並遞減。最終結果包含所有選擇的數字。\n\n\n總體而言，文章展示了如何使用貪心策略來解決這些程式設計問題，並提供了清晰的解題思路和程式碼實現。\n\n\n"csdn" Linux零基础速成篇一(理论+实操): 這篇文章是一個 Linux 初學者教程，涵蓋了 Linux 的基礎知識，適合零基礎學習和期末考試準備。文章從 Linux 概述開始，逐步介紹了用戶管理、文件管理等核心概念和操作。\n\n**第一部分：Linux 概述**\n\n文章首先介紹了學習 Linux 的必要性，強調了其免費、開源、安全穩定等優點，並簡要說明了 Unix 與 Linux 的發展史。  接著，文章解釋了 Linux 內核版本號的含義（例如，6.10.6 中 6 是主版本，10 是次版本，6 是末版本），並說明了穩定版本和開發版本之間的區別。  最後，文章簡述了 Linux 發行版，例如 RHEL 和 Debian 系列。\n\n**第二部分：用戶管理**\n\n這部分詳細介紹了 Linux 系統中的用戶和用戶組。  文章闡述了 root、系統用戶和普通用戶的概念，並說明了它們的權限差異和作用。  重點說明了 root 用戶的特殊權限以及安全注意事項。  文章還介紹了用戶組的概念，以及基本組和附加組的區別。  最後，文章介紹了 `/etc/passwd` 和 `/etc/shadow` 文件，說明了用戶信息和密碼的存儲方式，以及安全考慮。  文章也包含了 `useradd` 和 `passwd` 命令的使用方法，用於添加和設置用戶密碼。\n\n**第三部分：文件管理**\n\n這部分介紹了 Linux 文件系統中的不同文件類型（例如，普通文件、目錄、鏈接文件、設備文件等）。  文章詳細介紹了 `ls`、`mkdir`、`rmdir`、`cat`、`more`、`less`、`head`、`tail` 等常用文件管理命令，並說明了它們的選項和使用方法，以及如何查看文件內容和目錄結構。  文章還介紹了 `find` 命令，用於查找文件和目錄。  最後，文章介紹了 `cp`、`mv`、`rm` 命令，用於文件複製、移動和刪除，並說明了它們的選項和注意事項。  文章也包含了 `touch` 命令，用於修改文件時間戳。\n\n**第四部分：文件權限和打包**\n\n文章簡要介紹了 `chmod` 命令，用於更改文件和目錄的權限，並說明了字符和數字方式的設定方法。  文章也介紹了 `tar` 命令，用於文件打包，並說明了其選項和使用方法。\n\n**總結：**\n\n文章結構清晰，內容涵蓋了 Linux 系統的基礎知識，並提供了實例和命令操作，方便讀者理解和實踐。  然而，文章部分內容（例如 `chmod` 命令的詳細說明）略顯簡略，建議在實際操作中進一步學習和掌握。  文章的重點在於提供一個入門指南，讓讀者對 Linux 系統有初步的了解。\n\n\n"csdn" 15：00面试，15：08就出来了，问的问题有点变态。。。: 這份文件涵蓋了軟體測試職位的面試常見問題，內容廣泛且詳細，涵蓋了測試理論、Linux、MySQL、Web測試、API測試、App測試、管理工具、Python、Selenium、性能測試、網路、資料結構與演算法、邏輯題、人力資源等多個面向。\n\n**重點總結：**\n\n文件列出了軟體測試職位常見的面試題型，並以技術棧分類，包含了測試理論基礎、程式設計能力、資料庫操作、網路知識、測試工具應用等。  題目涵蓋了基礎知識、實務應用、以及解決問題的能力。  例如，從測試理論的步驟、方法到測試工具的使用，以及各種程式語言和資料庫的應用，都包含了相當廣泛的範圍。  此外，也包含了關於網路、資料結構與演算法、邏輯思維等更深層次的考驗。\n\n**面試重點：**\n\n* **廣泛的技術知識：**  面試題目涵蓋了軟體測試的各個面向，從基礎理論到實務應用，需要應徵者具備廣泛的技術知識。\n* **實務經驗：**  許多問題都與實際測試情境相關，例如如何制定測試方案、如何處理錯誤、如何優化測試流程等，考驗應徵者的實務經驗。\n* **問題解決能力：**  面試題目中包含許多需要應徵者思考和解決問題的題目，例如如何設計測試用例、如何分析問題等。\n* **溝通能力：**  人力資源相關問題也考驗應徵者的溝通能力和自我表達能力。\n\n**建議：**\n\n這份文件提供了相當完整的軟體測試面試題庫，但建議應徵者不要死記硬背，而是要理解背後的原理和應用。  針對不同的技術棧，深入學習相關知識，並練習實際操作，才能在面試中表現出色。  此外，針對自己的弱項，加強練習，才能在面試中更有信心。  最後，準備一些關於個人經驗和職業發展方向的回答，才能展現出自己的專業素養和求職意願。\n',
  //     article_titles: {
  //       csdn: [
  //         [
  //           "什么是数据结构",
  //           "https://blog.csdn.net/qq_35010942/article/details/144744795",
  //           3,
  //           "ch",
  //         ],
  //         [
  //           "C语言从入门到放弃教程",
  //           "https://blog.csdn.net/rulaixiong/article/details/144667845",
  //           46,
  //           "ch",
  //         ],
  //         [
  //           "PDF书籍《手写调用链监控APM系统-Java版》第12章 结束",
  //           "https://blog.csdn.net/LuoZheng4698729/article/details/144735849",
  //           5,
  //           "ch",
  //         ],
  //         [
  //           "贪心算法（三）",
  //           "https://blog.csdn.net/zdlynj/article/details/142642448",
  //           6,
  //           "ch",
  //         ],
  //         [
  //           "Linux零基础速成篇一(理论+实操)",
  //           "https://blog.csdn.net/m0_74190241/article/details/144670342",
  //           34,
  //           "ch",
  //         ],
  //         [
  //           "15：00面试，15：08就出来了，问的问题有点变态。。。",
  //           "https://blog.csdn.net/2401_86343726/article/details/144751326",
  //           12,
  //           "ch",
  //         ],
  //       ],
  //       git: [],
  //       medium: [],
  //     },
  //   },
  // ];
  // const response = result;
  return result; // Return the parsed data to the caller
};

export const fetch_shortcut_question1 = async () => {
  const response = await fetch(`${base_url}shortcut/question1`);
  const result = await response.json();
  // console.log(result);
  return result;
};
export const fetch_shortcut_question2 = async () => {
  const response = await fetch(`${base_url}shortcut/question2`);
  const result = await response.json();
  return result;
};
export const fetch_shortcut_question3 = async () => {
  const response = await fetch(`${base_url}shortcut/question3`);
  const result = await response.json();
  return result;
};
export const fetch_shortcut_question4 = async () => {
  const response = await fetch(`${base_url}shortcut/question4`);
  const result = await response.json();
  return result;
};

export const fetch_get_today_tags = async () => {
  const response = await fetch(`${base_url}get_today_tags`);
  const result = await response.json();
  return result;
};

export const fetch_selected_tags_summary = async (
  selected_tags,
  selectedSources = ["github", "medium", "csdn"]
) => {
  // console.log(selected_tags);
  // console.log(selectedSources);
  let response;
  if (typeof selected_tags === "string") {
    response = await fetch(`${base_url}selected_tags_summarize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        selected_tags: [selected_tags],
        sources: selectedSources,
      }),
    });
  } else {
    response = await fetch(`${base_url}selected_tags_summarize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        selected_tags: selected_tags,
        sources: selectedSources,
      }),
    });
  }

  const result = await response.json();
  return result;
};
