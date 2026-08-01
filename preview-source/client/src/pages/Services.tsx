/**
 * 編輯校樣藍圖：服務頁按內容整理到交付的工作邏輯鋪陳，避免將服務包裝成制式商品卡。
 */

import { ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "wouter";
import SectionMarker from "@/components/SectionMarker";
import SiteShell from "@/components/SiteShell";
import { serviceGroups, workMethod } from "@/data/siteContent";

// 暫用視覺素材；待正式攝影或美術素材提供後替換。
const systemUrl = `${import.meta.env.BASE_URL}images/whynot-system-material-grid.svg`;

export default function Services() {
  return (
    <SiteShell>
      <section className="page-hero page-hero--services">
        <div className="page-frame page-hero__grid">
          <div>
            <p className="eyebrow">SERVICES / FROM CONTENT TO FORM</p>
            <h1>先把事情說清楚，設計才能真的幫上忙。</h1>
          </div>
          <p>
            合作的起點不必是一份完全整理好的需求。可以從一段混亂的文字、一本待編排的手冊，或一個尚未被說清楚的想法開始。
          </p>
        </div>
      </section>

      <section className="section services-page-list">
        <div className="page-frame">
          <SectionMarker
            index="01"
            english="SERVICE INDEX"
            title="可獨立合作，也可串成完整專案。"
            description="依實際需求選擇適合的切入點；內容整理、視覺建立與交付規劃可以一起討論。"
          />
          <div className="service-detail-list">
            {serviceGroups.map((service) => (
              <article className="service-detail" key={service.number}>
                <div className="service-detail__number">{service.number}</div>
                <div className="service-detail__main">
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                </div>
                <div className="service-detail__scope">
                  <span>適用於</span>
                  <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-approach">
        <div className="page-frame service-approach__grid">
          <figure>
            <img src={systemUrl} alt="整理中的空白包裝紙材、標籤形狀與藍色定位線" />
            <figcaption>WORKING MATERIAL / CONTENT, SYSTEM, DELIVERY</figcaption>
          </figure>
          <div>
            <p className="eyebrow">02 / COLLABORATION</p>
            <h2>合作前，先一起確認這些事。</h2>
            <ol className="collaboration-list">
              {workMethod.map((step) => (
                <li key={step.number}><span>{step.number}</span><div><strong>{step.title}</strong><p>{step.description}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="services-contact-strip">
        <div className="page-frame">
          <p>還不確定要從哪一項開始？</p>
          <h2>把現況說給我聽，一起找出需要被整理的地方。</h2>
          <Link href="/contact" className="button button--primary">說明合作需求 <ArrowUpRight size={17} /></Link>
          <Link href="/works" className="text-link text-link--arrow">先看案例結構 <MoveRight size={18} /></Link>
        </div>
      </section>
    </SiteShell>
  );
}

