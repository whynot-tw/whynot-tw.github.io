/**
 * 編輯校樣藍圖：作品列表以可篩選的檔案索引呈現，明確揭示素材整理狀態，不將預留內容包裝為完成成果。
 */

import { useMemo, useState } from "react";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "wouter";
import SectionMarker from "@/components/SectionMarker";
import SiteShell from "@/components/SiteShell";
import WorkPlaceholder from "@/components/WorkPlaceholder";
import { works, type WorkCategory } from "@/data/siteContent";

type WorkFilter = "全部" | WorkCategory;

const filters: WorkFilter[] = ["全部", "平面與排版", "包裝與品牌", "社群視覺", "網站與內容整理"];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("全部");
  const filteredWorks = useMemo(
    () => works.filter((work) => activeFilter === "全部" || work.category === activeFilter),
    [activeFilter],
  );

  return (
    <SiteShell>
      <section className="page-hero page-hero--works">
        <div className="page-frame page-hero__grid">
          <div>
            <p className="eyebrow">ARCHIVE / 01–04</p>
            <h1>作品不是只展示結果，也保留整理問題的過程。</h1>
          </div>
          <p>
            這裡收錄平面與排版、包裝與品牌、社群視覺，以及網站與內容整理的案例。現階段依公開範圍保留案例結構與已確認重點，素材將持續補充。
          </p>
        </div>
      </section>

      <section className="section works-archive">
        <div className="page-frame">
          <SectionMarker
            index="01"
            english="WORK INDEX"
            title="依專案類型瀏覽。"
            description="每個案例頁皆預留 Problem、Analysis、Process、Result 與 Lessons 的固定閱讀結構。"
          />

          <div className="filter-row" aria-label="案例分類篩選">
            {filters.map((filter) => (
              <button
                type="button"
                className={`filter-chip ${activeFilter === filter ? "filter-chip--active" : ""}`}
                onClick={() => setActiveFilter(filter)}
                key={filter}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <p className="archive-note">
            <span aria-hidden="true" />
            目前為第一版網站骨架；正式作品圖、年份、負責範圍與可公開內容將於確認後補入。
          </p>

          <div className="work-grid work-grid--archive">
            {filteredWorks.map((work) => (
              <Link href={`/works/${work.id}`} className="work-card" key={work.id}>
                <WorkPlaceholder work={work} />
                <div className="work-card__meta">
                  <span>{work.number} / {work.category}</span>
                  <span className="work-card__status">{work.status}</span>
                </div>
                <div className="work-card__title-row">
                  <div>
                    <h2>{work.title}</h2>
                    <p>{work.subtitle}</p>
                  </div>
                  <span className="work-card__arrow" aria-hidden="true"><ArrowUpRight size={20} strokeWidth={1.6} /></span>
                </div>
              </Link>
            ))}
          </div>

          <div className="archive-bottom">
            <p>正在找一種特定類型的合作方式嗎？</p>
            <Link href="/services" className="text-link text-link--arrow">
              查看服務內容 <MoveRight size={18} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

