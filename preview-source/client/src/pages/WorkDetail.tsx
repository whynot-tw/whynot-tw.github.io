/**
 * 編輯校樣藍圖：所有案例使用同一套設計拆解格式；未公開資料以明示的預留欄位呈現，避免虛構結果與數據。
 */

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import SiteShell from "@/components/SiteShell";
import WorkPlaceholder from "@/components/WorkPlaceholder";
import { getWorkById, works } from "@/data/siteContent";

const breakdownSections = [
  {
    label: "PROBLEM",
    title: "問題",
    body: "此案例的完整背景與問題敘述，將於可公開範圍確認後補入。第一版先保留清楚的閱讀位置，讓後續資料能依同一套結構整理。",
  },
  {
    label: "ANALYSIS",
    title: "分析",
    body: "使用對象、既有資料、使用情境與專案限制，將在素材盤點後逐一整理為可追溯的設計依據。",
  },
  {
    label: "PROCESS",
    title: "過程",
    body: "依實際專案內容補入資料整理、系統建立、設計執行與確認節點，呈現設計如何從需求走到可使用的成果。",
  },
  {
    label: "RESULT",
    title: "成果",
    body: "最終交付內容、實際使用畫面與公開成果會在授權範圍確認後置入；目前不以推測或示意內容替代。",
  },
  {
    label: "LESSONS",
    title: "經驗",
    body: "此區將整理專案中形成的方法、判斷與可延續的工作原則，作為下一次合作可參考的脈絡。",
  },
];

export default function WorkDetail() {
  const [, params] = useRoute("/works/:id");
  const work = getWorkById(params?.id ?? "");

  if (!work) {
    return (
      <SiteShell>
        <section className="empty-page">
          <div className="page-frame">
            <p className="eyebrow">ARCHIVE / NOT FOUND</p>
            <h1>這個案例索引暫時不存在。</h1>
            <Link href="/works" className="button button--primary">回到全部作品 <ArrowUpRight size={17} /></Link>
          </div>
        </section>
      </SiteShell>
    );
  }

  const index = works.findIndex((item) => item.id === work.id);
  const previous = works[(index - 1 + works.length) % works.length];
  const next = works[(index + 1) % works.length];

  // 案例資料尚未確認的欄位（例如「待確認」）不對外顯示，
  // 避免公開頁面出現內部整理狀態的字樣；只呈現已經確認的資訊。
  const metaFields = [
    { label: "專案類型", value: work.projectType },
    { label: "年份", value: work.year },
    { label: "負責範圍", value: work.scope },
    { label: "案例狀態", value: work.status },
  ].filter((field) => field.value && field.value !== "待確認");

  return (
    <SiteShell>
      <section className="case-hero" aria-labelledby="case-title">
        <div className="page-frame">
          <Link href="/works" className="back-link"><ArrowLeft size={16} /> 回到全部作品</Link>
          <div className="case-hero__grid">
            <div className="case-hero__copy">
              <p className="eyebrow">CASE / {work.number} / {work.category}</p>
              <h1 id="case-title">{work.title}<span>{work.subtitle}</span></h1>
              <p>{work.description}</p>
            </div>
            <WorkPlaceholder work={work} />
          </div>

          {metaFields.length > 0 ? (
            <dl className="case-meta">
              {metaFields.map((field) => (
                <div key={field.label}><dt>{field.label}</dt><dd>{field.value}</dd></div>
              ))}
            </dl>
          ) : null}
        </div>
      </section>

      <section className="case-disclosure">
        <div className="page-frame"><span>NOTICE</span><p>此案例的正式圖像與細節仍在整理公開範圍；現階段僅展示已確認的專案方向，不以虛構素材替代。</p></div>
      </section>

      <section className="section case-breakdown">
        <div className="page-frame">
          {breakdownSections.map((section, sectionIndex) => (
            <article className="breakdown-row" key={section.label}>
              <div className="breakdown-row__label"><span>0{sectionIndex + 1}</span>{section.label}</div>
              <div className="breakdown-row__content">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section case-gallery" aria-labelledby="gallery-title">
        <div className="page-frame">
          <div className="case-gallery__heading">
            <div><p className="eyebrow">GALLERY</p><h2 id="gallery-title">圖片紀錄</h2></div>
            <p>主視覺、排版細節、前後比較、實際使用畫面與印刷或網站成果，將於素材確認後置入。</p>
          </div>
          <div className="case-gallery__grid">
            {["主視覺", "排版細節", "使用畫面", "延伸素材"].map((slot, slotIndex) => (
              <div className={`gallery-slot gallery-slot--${slotIndex + 1}`} key={slot}>
                <span>{String(slotIndex + 1).padStart(2, "0")}</span>
                <p>{slot}</p>
                <small>IMAGE MATERIAL PENDING</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="case-navigation" aria-label="案例導覽">
        <div className="page-frame case-navigation__grid">
          <Link href={`/works/${previous.id}`} className="case-navigation__item">
            <ArrowLeft size={20} /><span><small>PREVIOUS / {previous.number}</small>{previous.title}</span>
          </Link>
          <Link href="/works" className="case-navigation__all">全部作品</Link>
          <Link href={`/works/${next.id}`} className="case-navigation__item case-navigation__item--next">
            <span><small>NEXT / {next.number}</small>{next.title}</span><ArrowRight size={20} />
          </Link>
        </div>
      </nav>
    </SiteShell>
  );
}

