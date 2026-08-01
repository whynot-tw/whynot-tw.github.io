/**
 * 編輯校樣藍圖：以索引碼與細線建立長頁內容的閱讀定位，不作裝飾性堆疊。
 */

type SectionMarkerProps = {
  index: string;
  english: string;
  title: string;
  description?: string;
  align?: "left" | "right";
};

export default function SectionMarker({
  index,
  english,
  title,
  description,
  align = "left",
}: SectionMarkerProps) {
  return (
    <div className={`section-marker ${align === "right" ? "section-marker--right" : ""}`}>
      <div className="section-marker__eyebrow">
        <span>{index}</span>
        <span className="section-marker__line" aria-hidden="true" />
        <span>{english}</span>
      </div>
      <div className="section-marker__copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}

