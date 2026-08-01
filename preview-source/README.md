# 有何不可設計｜WHYNOT STUDIO Portfolio

## 專案用途

這個網站同時作為：

- **求職作品集**：讓公司快速理解平面、包裝、排版、社群與資訊整理的專業能力
- **接案作品集**：讓中小品牌、店家與組織了解可合作項目，降低來回說明成本

不是履歷頁、不是科技公司網站、不是 AI 工具展示站。

## 使用技術

- **框架**：React 19 + TypeScript
- **建置工具**：Vite 7
- **路由**：wouter（輕量 client-side routing）
- **樣式**：Tailwind CSS 4（CSS-first 設定，無需 `tailwind.config.js` / `postcss.config.js`）
- **套件管理**：pnpm
- **部署形式**：純前端靜態網站，不含任何後端伺服器

> 這個專案原本由 Manus 建立，內建了 Express 後端、大量未使用的 shadcn/ui 元件、Google Maps 整合、OAuth 樣板等平台預設樣板。這些都已經被移除，目前是精簡過的純前端專案。

## 主要資料夾結構

```
├── client/
│   ├── index.html              # 入口 HTML（含 GitHub Pages SPA 還原 script）
│   ├── public/
│   │   ├── 404.html            # GitHub Pages SPA 路由 fallback
│   │   └── images/             # 靜態圖片（含暫用佔位圖，見下方清單）
│   └── src/
│       ├── main.tsx            # React 掛載入口
│       ├── App.tsx             # 路由設定（wouter）
│       ├── index.css           # 全站樣式與設計變數（校樣藍、紙白等）
│       ├── data/
│       │   └── siteContent.ts  # 全站文案與案例資料，內容修改主要在這裡
│       ├── pages/               # Home / Works / WorkDetail / Services / About / Contact / NotFound
│       ├── components/          # SiteShell（導覽+頁尾外殼）、WorkPlaceholder、SectionMarker、ErrorBoundary
│       │   └── ui/               # 只保留實際用到的 button.tsx、card.tsx
│       ├── contexts/ThemeContext.tsx
│       └── lib/utils.ts
├── vite.config.ts               # base path、alias、build 輸出設定
├── tsconfig.json / tsconfig.node.json
├── components.json              # shadcn CLI 設定（未來要加元件時用 `npx shadcn add`）
├── ideas.md                     # 視覺與設計方向規格（「編輯校樣藍圖」主題）
├── QA_NOTES.md                  # 既有 QA 紀錄
└── package.json
```

## 安裝方式

```bash
pnpm install
```

> 沒有 `pnpm-lock.yaml`：先前版本裡的鎖定檔綁定了一個已經移除的 patch 設定，為避免安裝失敗直接刪除，`pnpm install` 會自動重新產生一份乾淨的鎖定檔。

## 本機啟動方式

```bash
pnpm dev
```

預設在 `http://localhost:3000` 啟動（`--host` 模式，區網內其他裝置也能連）。

## 型別檢查方式

```bash
pnpm check
```

實際執行 `tsc --noEmit`，只檢查 `client/src/**/*`。

## 正式建置方式

```bash
pnpm build
```

輸出到專案根目錄的 `dist/`，是純靜態檔案（HTML + CSS + JS + 圖片），不含任何 Node.js 後端程式。

## 本機預覽建置結果

```bash
pnpm preview
```

會啟動一個本機伺服器，用來檢查 `pnpm build` 產出的 `dist/` 內容跟正式環境行為是否一致。

## GitHub User Pages 部署方式

**正式儲存庫**：`whynot-tw/whynot-tw.github.io`
**正式網址**：https://whynot-tw.github.io/

這是 **User Pages**（帳號主頁），網址是網域根目錄，不是子路徑。因此：

- `vite.config.ts` 的 `base` 是 `"/"`
- `client/public/404.html` 的 `pathSegmentsToKeep` 是 `0`

部署步驟：

1. `pnpm install && pnpm build`
2. 把 `dist/` 資料夾內的所有內容，放進 `whynot-tw/whynot-tw.github.io` 這個 repo 的根目錄並 commit / push
   （可以手動複製，也可以設定 GitHub Actions 自動化，這個專案目前沒有內建 CI 設定檔）
3. 上線後務必實際測試：
   - 直接輸入網址開啟 `/works`、`/services`、`/about`、`/contact`、案例詳細頁（例如 `/works/editorial-layout-practice`）
   - 在這些內頁上**重新整理瀏覽器**，確認不會出現空白或 404，而是能正確回到對應頁面
   - 這個行為由 `404.html` + `index.html` 裡的還原 script 共同處理（[原理參考](https://github.com/rafgraph/spa-github-pages)）

> ⚠️ 如果未來改成一般 Project Pages（網址會是 `whynot-tw.github.io/repo名稱/`），要同步修改 `vite.config.ts` 的 `base` 跟 `404.html` 的 `pathSegmentsToKeep`，兩個地方都有寫註解說明怎麼改。

## 內容資料修改位置

全站文案、導覽、服務項目、工作方式、技能與工具、**所有案例資料**都集中在：

```
client/src/data/siteContent.ts
```

## 圖片替換位置

```
client/public/images/
```

程式碼裡一律用 `${import.meta.env.BASE_URL}images/檔名` 的方式引用（而不是寫死 `/images/...`），這樣不管部署在網域根目錄還是子路徑都不會壞掉。

### 目前的暫用圖片清單（尚未是正式素材）

| 檔案 | 用途 | 使用位置 |
|---|---|---|
| `whynot-symbol-mark.svg` | 品牌符號（依 `ideas.md` 描述的角標手勢符號畫的暫用版） | 全站導覽列、favicon |
| `whynot-hero-proof-desk.svg` | 首頁主視覺 | Home |
| `whynot-index-line-still-life.svg` | 首頁流程區塊 | Home |
| `whynot-system-material-grid.svg` | 服務頁素材網格 | Services |
| `whynot-process-paper-studies.svg` | 關於頁紙本研究圖 | About |

這 5 張都是符合「校樣藍 #1457D9 + 紙白 #F7F6F2」品牌語言畫的**向量圖佔位**，標了 PENDING 字樣，**不是正式作品或攝影素材**，換掉時直接覆蓋同檔名，或改路徑後同步改對應頁面裡的變數即可。

## 案例新增方式

在 `client/src/data/siteContent.ts` 的 `works` 陣列裡新增一筆物件，格式參照現有案例（`id`、`number`、`title`、`subtitle`、`category`、`projectType`、`year`、`scope`、`status`、`description`、`focus`）。

- 資料尚未確認的欄位請填 `"待確認"`——`WorkDetail.tsx` 的案例頁會自動把值等於 `"待確認"` 的欄位隱藏，不會顯示未完成字樣給訪客看
- `category` 只能是四個既定分類之一（平面與排版 / 包裝與品牌 / 社群視覺 / 網站與內容整理），這會影響 `/works` 頁面的篩選器
- `id` 必須全站唯一（用於路由 `/works/:id` 與上一個／下一個案例導覽）

## 尚待補充的素材

- 4 個案例（長篇書籍編輯排版、55 廚房、布有趣、炭吉刈包）的正式圖片、確切年份、負責範圍、專案背景文字，目前都還是「待確認」或通用描述，不含任何虛構的客戶資訊或成效數據
- 「布有趣」案例的活動照片：可使用學員背影或工作畫面，**不可使用正面臉部特寫**
- 「長篇書籍編輯排版」這一案目前刻意不揭露真實書名或委託單位（涉及客戶爭議，見下方注意事項），改以抽象化的排版方法示範呈現；補圖時請用不含真實內容的示意版面，不要使用實際出版品的掃描或照片
- 5 張暫用視覺素材（見上表）
- 聯絡頁的 Email 與社群連結（`Contact.tsx` 目前明確標示表單尚未連接寄送管道）

## 版本規則

- 主要案例與文案內容以 `client/src/data/siteContent.ts` 為單一事實來源，不在其他頁面檔案裡寫死重複的文案
- 圖片統一放在 `client/public/images/`，用 `BASE_URL` 前綴引用
- 目前沒有另外的 staging/production 分支規則；`whynot-tw.github.io` repo 即是正式環境

## 注意事項

- **「長篇書籍編輯排版」案例（`id: editorial-layout-practice`）目前刻意抽象化，不使用真實書名、委託單位或內容畫面**，原因是實際委託方對該案例的部分素材提出侵權疑慮。在爭議釐清前，請不要把這個案例的真實出版品畫面、書名或委託單位名稱加回網站，圖片區也請只用不含真實內容的示意版面
- 這個專案**不含後端伺服器**，`pnpm build` 產出的 `dist/` 是完全靜態的檔案，可以直接部署到任何靜態主機（GitHub Pages、Netlify、Vercel 等），目前設定是針對 GitHub User Pages 根目錄部署
- 不要在 `client/src/pages/*.tsx` 裡用寫死的 `"/images/..."` 或 `"/xxx"` 字串引用圖片或內部連結；圖片要用 `import.meta.env.BASE_URL` 前綴，內部連結請用 `wouter` 的 `<Link>` 元件（會自動套用 `App.tsx` 裡設定的 base path）
- `client/src/components/ui/` 目前只保留 `button.tsx`、`card.tsx` 兩個真正被使用的 shadcn/ui 元件；如果之後要加其他 shadcn 元件，用 `npx shadcn add <元件名稱>`（設定檔是 `components.json`），不要手動把舊版 Manus 專案裡一整批未使用的元件複製回來
