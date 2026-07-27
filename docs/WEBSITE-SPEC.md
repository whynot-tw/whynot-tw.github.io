# Website v4｜網站施工規格

狀態：Approved for rebuild

## 核心原則

- 先建立架構，再開始設計。
- 固定地基與可變內容分離。
- 案例數量、名稱、排序與分類不得寫死成網站結構限制。
- 未完成案例使用統一建置中元件，不顯示破圖。
- 不自行重畫 Logo、修改品牌字型、比例或品牌識別。
- 非必要英文移除；英文只保留正式品牌名稱或必要專有名詞。

## Sitemap

- Home
- Works
- About
- Services
- Contact
- FAQ
- Case Study pages

## 主導覽

關於｜服務｜作品｜聯絡

FAQ 暫時只放 Footer，不放主導覽。

## Home

順序：

1. Hero
2. 精選作品
3. 最新作品
4. 合作洽詢
5. Footer

規則：

- Hero 不放 CTA。
- Hero 不放「雅」。
- Hero 不放抽象口號。
- 首頁不放 About 區塊。
- 首頁暫不放 Services 區塊。
- 精選作品卡顯示「作品名稱＋類型」。
- 最新作品依完成度與可公開狀態更新。
- Contact 保留 LINE 官方帳號、QR Code、Email、Instagram。
- QR Code 暫不調整。

## Works

結構：

1. 精選作品
2. 全部作品

規則：

- 暫不做搜尋、篩選或分類頁籤。
- 桌機版三欄；手機版一欄。
- 案例數量可自由增減。
- 未整理完成的案例不得直接寫入正式案例頁。

## About

結構：

1. 關於有何不可設計
2. 先建立架構，再開始設計
3. 品牌識別系統
4. 經歷與專業背景

規則：

- 使用正式品牌識別圖。
- 不以 Placeholder 取代已存在的正式品牌素材。
- 內文以中文為主。

## Services

頁面主標題：服務項目

服務骨架：

1. 平面與印刷設計
2. 包裝設計
3. 書刊與手冊排版
4. 品牌視覺整理
5. 社群內容視覺
6. LINE 官方帳號規劃
7. AI 協作與顧問

規則：

- 第一版只建立骨架。
- 不加入未定案價格或方案。
- 正式服務方案完成後，再與 Google Form 同步上線。

## Contact

結構：

1. 合作前說明簡易版
2. LINE 官方帳號與 QR Code
3. Email／Instagram
4. 需求收集表單建置中

規則：

- 網站公開簡易合作原則。
- 詳細合作文件於正式聯繫後，依服務與客戶案件調整。
- Google Form 不在本次重建正式上線。

## FAQ

- 建立獨立頁。
- 暫時只從 Footer 進入。
- 正式內容另行整理。

## Case Study Template

1. 專案介紹
2. 問題與挑戰
3. 設計思考
4. 解決方案
5. 成果展示
6. 專案收穫
7. 相關服務

## Placeholder

- 淺灰背景。
- 黑色細線。
- 中文標題「建置中」。
- 中文副標。
- 不使用破圖、不使用臨時品牌圖、不使用非必要英文。

## Header／Footer

- 全站統一結構與樣式。
- 手機版選單可展開與收合。
- Footer 使用真正的圓形 SVG icon，不以 ?, ✉, ◎, ＋ 等文字字元代替。
- Footer 保留 LINE 官方帳號文字：@140rcuat。

## Responsive

主要驗收寬度：360px、390px、430px、768px、1200px。

- 不得橫向溢出。
- 長標題需自然換行。
- 卡片標題不得被圖片或 Placeholder 遮蓋。
- QR Code 不得超出容器。

## SEO／AIO／GEO

本網站不把 AIO／GEO 視為後加功能，而是與 SEO 共用同一套可理解、可索引、可引用的內容地基。

### 技術規格

- 全站每頁具唯一 `title` 與 `meta description`。
- 全站每頁設定 canonical URL。
- 核心頁與正式案例頁設定 Open Graph 基本欄位。
- 首頁加入 `Organization`／`ProfessionalService` JSON-LD。
- 案例頁依內容成熟度加入 `CreativeWork` 或適合的結構化資料。
- FAQ 正式內容完成後，才加入 `FAQPage` JSON-LD；不得為空白 FAQ 建立假資料。
- 保留 `robots.txt` 與 `sitemap.xml`。
- 重要內容必須存在於 HTML 文字，不得只放在圖片內。
- 圖片需有具體、可理解的 `alt`。
- 網址需穩定，避免無必要改動案例 slug。

### 品牌實體一致性

以下資料須全站一致：

- 品牌名稱：有何不可設計
- 官方網站：https://whynot-tw.github.io/
- Email：whynot.studio.tw@gmail.com
- Instagram：@whynot_studio_tw
- LINE 官方帳號：@140rcuat
- 正式 Logo 與品牌素材路徑
- 專業領域：平面設計、包裝設計、品牌視覺、書刊與手冊排版、LINE 官方帳號規劃、AI 協作

### 內容規格

- 服務頁要清楚回答：適合誰、解決什麼問題、交付什麼、需要準備什麼、限制與合作方式。
- 案例頁要具體回答：專案背景、問題、設計判斷、執行方法、成果與可驗證證據。
- 內容以具體事實、方法與成果為主，不堆疊空泛關鍵字。
- 同一服務與案例名稱在首頁、作品頁、服務頁與 Schema 中需一致。
- 不宣稱無法驗證的成果，不為 AIO／GEO 編造數據或客戶成效。

## 暫不實作

- Google Form
- 服務方案價格
- FAQ 正式內容
- 案例分類／搜尋
- 未盤點完成的案例頁
