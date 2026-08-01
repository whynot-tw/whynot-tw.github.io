/**
 * 編輯校樣藍圖：首頁以不對稱編輯欄位、校樣索引與明確內容路徑，呈現「把複雜內容整理清楚」的品牌核心。
 */

import { ArrowDown, ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "wouter";
import SectionMarker from "@/components/SectionMarker";
import SiteShell from "@/components/SiteShell";
import WorkPlaceholder from "@/components/WorkPlaceholder";
import { serviceGroups, workMethod, works } from "@/data/siteContent";

// 暫用視覺素材；待正式攝影或美術素材提供後替換。
const heroUrl = `${import.meta.env.BASE_URL}images/whynot-hero-proof-desk.svg`;
const processUrl = `${import.meta.env.BASE_URL}images/whynot-index-line-still-life.svg`;

export default function Home() {
  return (
    <SiteShell>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <div className="hero__meta" aria-label="網站定位">
            <span>INFORMATION × VISUAL × EXECUTION</span>
            <span>TAIWAN / DESIGN PRACTICE</span>
          </div>

          <div className="hero__grid">
            <div className="hero__content">
              <p className="eyebrow">有何不可設計｜WHYNOT STUDIO</p>
              <h1 id="hero-title">
                把複雜的內容，
                <br />
                整理成清楚、好用、
                <br />
                能被理解的設計。
              </h1>
              <p className="hero__lead">
                平面設計、包裝設計、書籍排版、社群視覺與網站內容規劃。從資料整理到視覺執行，協助品牌把想法真正落地。
              </p>
              <div className="hero__actions">
                <Link href="/works" className="button button--primary">
                  查看精選作品 <ArrowUpRight size={17} strokeWidth={1.8} />
                </Link>
                <Link href="/contact" className="text-link text-link--arrow">
                  聯絡合作 <MoveRight size={18} strokeWidth={1.8} />
                </Link>
              </div>
            </div>

            <figure className="hero__visual">
              <img
                src={heroUrl}
                alt="以紙張、定位線和校樣素材構成的編輯工作檯視覺"
              />
              <figcaption>
                <span>01 / CONTENT TO FORM</span>
                <span>資料 → 結構 → 視覺</span>
              </figcaption>
            </figure>
          </div>

          <div className="hero__scroll-hint" aria-hidden="true">
            <span>SCROLL TO SELECTED WORKS</span>
            <ArrowDown size={17} strokeWidth={1.6} />
          </div>
        </div>
      </section>

      <section className="section section--works" aria-labelledby="featured-works-title">
        <div className="page-frame">
          <SectionMarker
            index="01"
            english="SELECTED WORKS"
            title="先看作品如何回應問題。"
            description="第一版先保留四個優先案例的完整閱讀入口。正式圖片、年份與負責範圍會依可公開資料逐一補入。"
          />

          <div className="work-grid">
            {works.map((work) => (
              <Link href={`/works/${work.id}`} className="work-card" key={work.id}>
                <WorkPlaceholder work={work} />
                <div className="work-card__meta">
                  <span>{work.number} / {work.category}</span>
                  <span className="work-card__status">{work.status}</span>
                </div>
                <div className="work-card__title-row">
                  <div>
                    <h3>{work.title}</h3>
                    <p>{work.subtitle}</p>
                  </div>
                  <span className="work-card__arrow" aria-hidden="true"><ArrowUpRight size={20} strokeWidth={1.6} /></span>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-end-link">
            <Link href="/works" className="text-link text-link--arrow">
              查看全部案例 <MoveRight size={18} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--services" aria-labelledby="services-title">
        <div className="page-frame">
          <SectionMarker
            index="02"
            english="SERVICES"
            title="設計不只是一張好看的畫面。"
            description="依需求從內容、結構到交付方式一起思考，讓完成後的設計能在真實情境中被使用。"
            align="right"
          />

          <div className="services-list" id="services-title">
            {serviceGroups.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-row__number">{service.number}</span>
                <div className="service-row__body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <ul className="service-row__items" aria-label={`${service.title}適用項目`}>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="section-end-link">
            <Link href="/services" className="text-link text-link--arrow">
              了解服務範圍 <MoveRight size={18} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--method" aria-labelledby="method-title">
        <div className="page-frame method-layout">
          <div className="method-layout__intro">
            <SectionMarker
              index="03"
              english="WORKING METHOD"
              title="先求有，再求好。"
              description="先把問題整理清楚，再做出真正能使用的設計。"
            />
            <p className="method-layout__note">
              不論專案大小，都從理解現況開始。讓每一次視覺選擇都有清楚的依據，也讓交付後的內容更容易維護。
            </p>
          </div>
          <div className="method-layout__body">
            <figure className="method-image">
              <img src={processUrl} alt="紙張、透明描圖紙與藍色索引線構成的資料整理工作視覺" />
              <figcaption>METHOD NOTE / 從現況到可使用的系統</figcaption>
            </figure>
            <ol className="method-steps" id="method-title">
              {workMethod.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--about" aria-labelledby="about-summary-title">
        <div className="page-frame about-summary">
          <div className="about-summary__stamp" aria-hidden="true">
            <span>20+</span>
            <small>YEARS OF<br />DESIGN PRACTICE</small>
          </div>
          <div className="about-summary__copy">
            <p className="eyebrow">04 / ABOUT</p>
            <h2 id="about-summary-title">不只是完成畫面，也整理問題的脈絡。</h2>
            <p>
              擁有超過二十年的平面與包裝設計經驗，並具資訊管理與軟體設計背景。擅長從大量、零散或結構不清楚的資料中，整理出可理解的內容架構，再轉化為清楚、可使用的視覺成果。
            </p>
            <Link href="/about" className="text-link text-link--arrow">
              認識工作方式 <MoveRight size={18} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="contact-cta-title">
        <div className="page-frame contact-cta__grid">
          <div className="contact-cta__marker" aria-hidden="true">05</div>
          <div>
            <p className="eyebrow">LET'S MAKE IT CLEAR</p>
            <h2 id="contact-cta-title">有一段內容、一本手冊，或一個還說不清楚的想法嗎？</h2>
          </div>
          <div className="contact-cta__action">
            <p>先說說正在處理的內容與使用情境，一起找出合適的整理方式。</p>
            <Link href="/contact" className="button button--primary">
              前往聯絡頁 <ArrowUpRight size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
