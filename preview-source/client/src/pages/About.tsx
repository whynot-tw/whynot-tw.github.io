/**
 * 編輯校樣藍圖：關於頁以專業脈絡、能力與工具清單建立信任，不將個人資訊渲染成履歷式模板。
 */

import { Link } from "wouter";
import { ArrowUpRight, MoveRight } from "lucide-react";
import SectionMarker from "@/components/SectionMarker";
import SiteShell from "@/components/SiteShell";
import { skills, tools } from "@/data/siteContent";

// 暫用視覺素材；待正式攝影或美術素材提供後替換。
const studyUrl = `${import.meta.env.BASE_URL}images/whynot-process-paper-studies.svg`;

export default function About() {
  return (
    <SiteShell>
      <section className="page-hero page-hero--about">
        <div className="page-frame about-hero">
          <div className="about-hero__copy">
            <p className="eyebrow">ABOUT / WHYNOT STUDIO</p>
            <h1>設計的開始，通常不是畫圖，而是把事情弄懂。</h1>
            <p>
              擁有超過二十年的平面與包裝設計經驗，具備資訊管理與軟體設計背景。擅長從大量、零散或結構不清楚的資料中，整理出可理解的內容架構，再轉化為清楚、可使用的視覺成果。
            </p>
          </div>
          <figure className="about-hero__image">
            <img src={studyUrl} alt="空白紙樣、透明描圖紙與藍色索引標籤的設計工作視覺" />
            <figcaption>CONTENT FIRST / DESIGN FOLLOWS</figcaption>
          </figure>
        </div>
      </section>

      <section className="section about-principles">
        <div className="page-frame">
          <SectionMarker
            index="01"
            english="WORKING PRINCIPLES"
            title="把混亂的資訊，變成可被理解的設計。"
            description="工作不只是在螢幕上完成，更需要在閱讀、印刷、發布與日常維護時保持清楚。"
          />
          <div className="principles-grid">
            <article><span>01</span><h3>重視內容結構</h3><p>先辨認真正的重點與閱讀順序，再決定視覺如何出現。</p></article>
            <article><span>02</span><h3>重視使用情境</h3><p>每個版面都要回應它會在哪裡被看見、被閱讀或被更新。</p></article>
            <article><span>03</span><h3>處理大量資料</h3><p>讓長篇文字、零散素材與多版本檔案有可追溯的整理方法。</p></article>
            <article><span>04</span><h3>建立可延續系統</h3><p>在單次設計之外，保留客戶或團隊能接著使用的規則與素材。</p></article>
          </div>
        </div>
      </section>

      <section className="section about-capabilities">
        <div className="page-frame about-capabilities__grid">
          <div>
            <p className="eyebrow">02 / CAPABILITIES</p>
            <h2>專業能力</h2>
            <p>工作範圍涵蓋平面設計、包裝設計、書籍與手冊排版、社群內容、網站內容規劃，以及手作與銀髮教學。</p>
          </div>
          <ul className="tag-list">
            {skills.map((skill, index) => <li key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</li>)}
          </ul>
        </div>
      </section>

      <section className="section about-tools">
        <div className="page-frame about-tools__grid">
          <div><p className="eyebrow">03 / TOOLKIT</p><h2>熟悉的工具，只是把想法落地的方式。</h2></div>
          <div className="tool-list">
            {tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="page-frame about-cta__grid">
          <p>把問題整理清楚，設計才有地方落下。</p>
          <div><Link href="/works" className="text-link text-link--arrow">查看作品 <MoveRight size={18} /></Link><Link href="/contact" className="button button--primary">開始討論 <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
    </SiteShell>
  );
}

