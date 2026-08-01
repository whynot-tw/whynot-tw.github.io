/**
 * 編輯校樣藍圖：聯絡頁先協助合作方整理需求；寄送管道尚未提供時，清楚標示表單為預留介面而非假裝可送出。
 */

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import SiteShell from "@/components/SiteShell";

export default function Contact() {
  const [showNotice, setShowNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  return (
    <SiteShell>
      <section className="page-hero page-hero--contact">
        <div className="page-frame page-hero__grid">
          <div>
            <p className="eyebrow">CONTACT / START WITH CONTEXT</p>
            <h1>有一件事情需要被說清楚嗎？</h1>
          </div>
          <p>
            不需要先準備一份完整簡報。可以先說說正在處理的內容、預計使用的地方，以及目前卡住的部分；再一起判斷從何處開始整理。
          </p>
        </div>
      </section>

      <section className="section contact-page">
        <div className="page-frame contact-page__grid">
          <aside className="contact-aside">
            <p className="eyebrow">01 / BEFORE WE TALK</p>
            <h2>如果方便，先準備這些資訊。</h2>
            <ol>
              <li><span>01</span><p>目前想完成的內容或專案類型。</p></li>
              <li><span>02</span><p>預計使用的場景、尺寸或發布平台。</p></li>
              <li><span>03</span><p>現有資料、需要協助整理的地方與預計時程。</p></li>
            </ol>
            <div className="contact-aside__notice">
              <span>CONTACT CHANNEL</span>
              <p>Email 與社群連結將於正式資料提供後補入。</p>
            </div>
          </aside>

          <div className="contact-form-wrap">
            <div className="contact-form-wrap__header">
              <p className="eyebrow">02 / PROJECT NOTE</p>
              <h2>留下需求摘要</h2>
              <p>此表單目前為網站骨架預留，尚未連接寄送管道；送出不會傳送個人資訊。</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__record" aria-hidden="true">
                <span>FORM / 01</span>
                <span>STATUS / DRAFT</span>
                <span>ROUTE / NOT CONNECTED</span>
              </div>
              <label>
                <span className="field-label"><i>01</i>姓名或單位</span>
                <input name="name" type="text" autoComplete="name" placeholder="如何稱呼您？" />
              </label>
              <label>
                <span className="field-label"><i>02</i>聯絡方式</span>
                <input name="contact" type="text" autoComplete="email" placeholder="Email 或其他聯絡方式" />
              </label>
              <label>
                <span className="field-label"><i>03</i>合作類型</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>請選擇一項</option>
                  <option value="layout">平面與排版設計</option>
                  <option value="packaging">包裝與品牌視覺</option>
                  <option value="social">社群視覺設計</option>
                  <option value="web">網站內容整理</option>
                  <option value="information">資訊與專案整理</option>
                  <option value="other">其他／尚未確定</option>
                </select>
              </label>
              <label className="contact-form__full">
                <span className="field-label"><i>04</i>目前的需求或想法</span>
                <textarea name="message" rows={6} placeholder="可以從您目前的內容、使用情境，或最想解決的問題開始說。" />
              </label>
              <div className="contact-form__footer">
                <p>正式 Email 與社群連結補入後，這裡將連接可用的聯絡方式。</p>
                <button type="submit" className="button button--primary">確認表單狀態 <ArrowUpRight size={17} /></button>
              </div>
              {showNotice ? <p className="form-notice" role="status">表單介面已確認；目前尚未連接寄送管道，因此內容不會送出或保存。</p> : null}
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
