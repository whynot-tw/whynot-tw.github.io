# Website v4｜QA Checklist

狀態：Must pass before merge

## 全站頁面

- [ ] Home
- [ ] Works
- [ ] About
- [ ] Services
- [ ] Contact
- [ ] FAQ
- [ ] 55 廚房案例
- [ ] 炭吉案例
- [ ] 可可慢慢說案例

## Header

- [ ] 全站使用相同 Header 結構
- [ ] 使用正式品牌 Logo
- [ ] 主導覽為：關於｜服務｜作品｜聯絡
- [ ] FAQ 不在主導覽
- [ ] 手機選單可展開
- [ ] 手機選單可收合
- [ ] 選單按鈕具有正確 aria-expanded

## Footer

- [ ] 全站使用相同 Footer 結構
- [ ] FAQ 連結正常
- [ ] Email 連結正常
- [ ] Instagram 連結正常
- [ ] LINE 連結正常
- [ ] 使用真正圓形 SVG icon
- [ ] 不使用 ?, ✉, ◎, ＋ 文字替代
- [ ] 保留 LINE 官方帳號：@140rcuat

## 品牌素材

- [ ] Header Logo 路徑正確
- [ ] Favicon 路徑正確
- [ ] Apple Touch Icon 路徑正確
- [ ] About Brand Board 路徑正確
- [ ] 沒有自行重畫 Logo
- [ ] 沒有改變品牌比例或字型
- [ ] 全站無破圖

## Home

- [ ] Hero 只保留品牌名稱與正式副標
- [ ] Hero 無 CTA
- [ ] Hero 無「雅」
- [ ] 無首頁 About 區塊
- [ ] 無首頁 Services 區塊
- [ ] 精選作品存在
- [ ] 最新作品存在
- [ ] 作品卡顯示名稱＋類型
- [ ] Contact 保留 QR Code

## Works

- [ ] 精選作品區存在
- [ ] 全部作品區存在
- [ ] 無多餘說明句
- [ ] 桌機版三欄
- [ ] 手機版一欄
- [ ] 長標題正常換行
- [ ] Placeholder 不遮蓋標題

## About

- [ ] 關於有何不可設計
- [ ] 先建立架構，再開始設計
- [ ] 品牌識別系統
- [ ] 經歷與專業背景
- [ ] 使用正式品牌識別圖
- [ ] 無非必要英文

## Services

- [ ] 主標題為「服務項目」
- [ ] 七個服務項目完整
- [ ] 無未定案價格
- [ ] 無 Google Form

## Contact

- [ ] 合作前說明簡易版
- [ ] LINE 官方帳號
- [ ] QR Code 維持不動
- [ ] Email 正確
- [ ] Instagram 正確
- [ ] Google Form 顯示建置中

## FAQ

- [ ] FAQ 頁存在
- [ ] Footer 可進入
- [ ] 主導覽沒有 FAQ
- [ ] Placeholder 全中文

## Placeholder

- [ ] 淺灰背景
- [ ] 黑色細線
- [ ] 中文「建置中」
- [ ] 中文副標
- [ ] 沒有不存在的圖片路徑

## Responsive

### 360px

- [ ] 無橫向溢出
- [ ] Header 正常
- [ ] Footer 正常
- [ ] 卡片正常
- [ ] QR Code 不超出容器

### 390px

- [ ] 無橫向溢出
- [ ] Header 正常
- [ ] Footer 正常
- [ ] 長標題正常換行

### 430px

- [ ] 無橫向溢出
- [ ] Header 正常
- [ ] Footer 正常
- [ ] 卡片間距一致

### 768px

- [ ] 版面切換正常
- [ ] 導覽正常
- [ ] 作品卡欄數正常

### 1200px

- [ ] 桌機版寬度正常
- [ ] 留白正常
- [ ] 作品卡三欄

## SEO／AIO／GEO

- [ ] 每頁有唯一且正確的 title
- [ ] 每頁有具體 meta description
- [ ] 每頁 canonical URL 正確
- [ ] 核心頁 Open Graph title／description／url／image 正確
- [ ] 首頁 Organization／ProfessionalService JSON-LD 可解析
- [ ] 品牌名稱、網址、Email、Instagram、LINE 全站一致
- [ ] sitemap.xml 收錄所有正式公開頁
- [ ] robots.txt 指向正式 sitemap.xml
- [ ] 正式案例頁網址穩定
- [ ] 重要內容可在 HTML 文字中讀取
- [ ] 圖片 alt 具體且符合實際內容
- [ ] 服務頁明確說明適合對象、問題、交付與限制
- [ ] 案例頁具備背景、問題、方法、成果與證據
- [ ] 未完成 FAQ 不加入 FAQPage 假資料
- [ ] 不堆疊關鍵字或編造無法驗證的成果

## Links／Technical

- [ ] 所有內部連結正確
- [ ] 所有外部連結使用 rel="noopener"
- [ ] CSS 無重複衝突規則
- [ ] JS 選單只初始化一次
- [ ] HTML title／description 正確
- [ ] GA 追蹤碼保留
- [ ] CSS／JS cache version 已更新

## Merge Gate

只有以上項目全部確認後，才能：

1. 將 Draft PR 標記為 Ready for review
2. 檢查 diff
3. 合併至 main
4. 驗證 GitHub Pages 正式站
