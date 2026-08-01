/**
 * 編輯校樣藍圖：在未取得正式案例圖前，以明確的素材預留板取代任何虛構客戶成果。
 */

import type { WorkCase } from "@/data/siteContent";

type WorkPlaceholderProps = {
  work: WorkCase;
  compact?: boolean;
};

export default function WorkPlaceholder({ work, compact = false }: WorkPlaceholderProps) {
  return (
    <div
      className={`work-placeholder work-placeholder--${work.number} ${compact ? "work-placeholder--compact" : ""}`}
      role="img"
      aria-label={`${work.title}案例封面素材整理中`}
    >
      <div className="work-placeholder__corner work-placeholder__corner--tl" aria-hidden="true" />
      <div className="work-placeholder__corner work-placeholder__corner--br" aria-hidden="true" />
      <div className="work-placeholder__serial">CASE / {work.number}</div>
      <div className="work-placeholder__center">
        <span className="work-placeholder__dot" aria-hidden="true" />
        <span>CASE MATERIAL</span>
        <strong>整理中</strong>
      </div>
      <div className="work-placeholder__footer">
        <span>{work.category}</span>
        <span>4:5</span>
      </div>
    </div>
  );
}

