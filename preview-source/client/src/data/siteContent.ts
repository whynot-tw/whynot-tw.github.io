/**
 * 編輯校樣藍圖：集中管理網站文案與案例預留內容；所有案例資訊只採用需求簡報已確認的範圍。
 */

export type WorkCategory =
  | "平面與排版"
  | "包裝與品牌"
  | "社群視覺"
  | "網站與內容整理";

export type WorkCase = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: WorkCategory;
  projectType: string;
  year: string;
  scope: string;
  status: string;
  description: string;
  focus: string[];
};

export const works: WorkCase[] = [
  {
    id: "editorial-layout-practice",
    number: "01",
    title: "長篇書籍編輯排版",
    subtitle: "120 頁長篇版面系統",
    category: "平面與排版",
    projectType: "長篇書籍／編輯排版方法",
    year: "待確認",
    scope: "待確認",
    status: "以排版方法示範呈現",
    description:
      "示範大量文字與圖片的長篇排版方法：章節與頁碼系統、跨頁圖表配置、長文件版面一致性與印刷交付管理原則。此頁面呈現排版方法與工作流程，不揭露特定出版品的實際內容或委託單位資訊。",
    focus: ["內容結構", "版面系統", "印刷交付"],
  },
  {
    id: "55-kitchen",
    number: "02",
    title: "55 廚房",
    subtitle: "品牌視覺與網站內容整理",
    category: "網站與內容整理",
    projectType: "餐飲品牌／內容與視覺整理",
    year: "待確認",
    scope: "待確認",
    status: "案例素材整理中",
    description:
      "以品牌基礎視覺、菜單資訊整理、社群素材與網站內容更新為核心，回應店家實際使用需求。",
    focus: ["品牌基礎視覺", "菜單資訊", "網站內容"],
  },
  {
    id: "sew-fun-life",
    number: "03",
    title: "布有趣",
    subtitle: "銀髮手作教學品牌",
    category: "社群視覺",
    projectType: "教育與手作／品牌經營",
    year: "待確認",
    scope: "待確認",
    status: "案例素材整理中",
    description:
      "整理自有品牌的教學與社群內容、活動視覺與高齡友善資訊，呈現可長期經營的品牌脈絡。",
    focus: ["教學內容", "活動視覺", "高齡友善資訊"],
  },
  {
    id: "tanji-guabao",
    number: "04",
    title: "炭吉刈包",
    subtitle: "平面設計與印刷製作",
    category: "平面與排版",
    projectType: "餐飲品牌／平面設計與印刷製作",
    year: "待確認",
    scope: "待確認",
    status: "案例素材整理中",
    description:
      "聚焦品牌平面視覺與印刷交付管理，涵蓋版面設計、印前確認與實體物件的完稿製作。案例圖文正在整理中。",
    focus: ["平面設計", "印前製作", "完稿管理"],
  },
];

export const serviceGroups = [
  {
    number: "01",
    title: "平面與排版設計",
    summary: "讓長篇內容、重要訊息與印刷規格在同一套閱讀邏輯中被清楚呈現。",
    items: ["書籍與手冊", "型錄、DM、海報", "活動文宣", "簡報與資訊圖表"],
  },
  {
    number: "02",
    title: "包裝與品牌視覺",
    summary: "從商品資訊層級到印刷完稿，整理品牌在實體接觸點上的一致性。",
    items: ["商品包裝", "貼紙與標籤", "系列視覺延伸", "品牌基礎視覺整理"],
  },
  {
    number: "03",
    title: "社群視覺設計",
    summary: "為日常發布建立清楚且可維護的內容版型，讓訊息不必每次重新開始。",
    items: ["社群圖卡", "活動宣傳", "商品介紹", "Canva 可維護模板"],
  },
  {
    number: "04",
    title: "網站內容整理",
    summary: "先釐清頁面層級與內容順序，再把網站變成讓人找得到重點的工作工具。",
    items: ["作品集網站", "品牌官網", "店家網站", "內容更新與頁面規劃"],
  },
  {
    number: "05",
    title: "資訊與專案整理",
    summary: "為大量資料、檔案與設計交付建立可追溯的結構，減少反覆確認的成本。",
    items: ["資料盤點", "檔案命名與版本", "工作流程", "設計交付規格"],
  },
];

export const workMethod = [
  {
    number: "01",
    title: "先釐清",
    description: "理解使用對象、現有資料、實際情境與需要被解決的問題。",
  },
  {
    number: "02",
    title: "再整理",
    description: "建立內容層級、資料結構與可持續使用的工作規則。",
  },
  {
    number: "03",
    title: "開始設計",
    description: "把重點轉化為清楚、可讀、符合使用場景的視覺系統。",
  },
  {
    number: "04",
    title: "完成落地",
    description: "依據交付形式整理完稿、素材與後續維護所需的檔案。",
  },
];

export const skills = [
  "平面設計",
  "包裝設計",
  "書籍與手冊排版",
  "社群內容",
  "網站內容規劃",
  "手作與銀髮教學",
];

export const tools = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Canva",
  "Figma",
  "Framer",
  "WordPress",
  "Google Drive／Docs／Sheets",
  "ChatGPT 與其他 AI 工具",
];

export const navigation = [
  { href: "/works", label: "作品" },
  { href: "/services", label: "服務" },
  { href: "/about", label: "關於" },
  { href: "/contact", label: "聯絡" },
];

export function getWorkById(id: string) {
  return works.find((work) => work.id === id);
}

