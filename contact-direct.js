(() => {
  const EMAIL = "whynot.studio.tw@gmail.com";
  const LINE_URL = "https://lin.ee/qNY3Uug";
  const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent("合作諮詢｜有何不可設計")}`;

  function createDirectContactPanel() {
    const panel = document.createElement("section");
    panel.className = "direct-contact";
    panel.setAttribute("aria-labelledby", "direct-contact-title");

    panel.innerHTML = `
      <header class="direct-contact__header">
        <p class="eyebrow">02 / CONTACT CHANNELS</p>
        <h2 id="direct-contact-title">選一個方便的方式開始。</h2>
        <p>完整專案內容建議使用 Email；想先簡單詢問，也可以從 LINE 官方帳號開始。</p>
      </header>

      <div class="direct-contact__record" aria-hidden="true">
        <span>CONTACT / DIRECT</span>
        <span>EMAIL / AVAILABLE</span>
        <span>LINE / AVAILABLE</span>
      </div>

      <div class="direct-contact__grid">
        <article class="direct-contact__channel">
          <div>
            <span class="direct-contact__index">01 / EMAIL</span>
            <h3>寄送合作需求</h3>
            <p>適合說明專案類型、使用情境、現有資料與預計時程。</p>
          </div>
          <a class="button button--primary direct-contact__action" href="${MAILTO_URL}">
            開啟 Email <span aria-hidden="true">↗</span>
          </a>
          <a class="direct-contact__value" href="${MAILTO_URL}">${EMAIL}</a>
        </article>

        <article class="direct-contact__channel direct-contact__channel--line">
          <div>
            <span class="direct-contact__index">02 / LINE</span>
            <h3>LINE 官方帳號</h3>
            <p>適合先簡單詢問合作方向，再視需要補充完整資料。</p>
          </div>
          <a class="button button--primary direct-contact__action" href="${LINE_URL}" target="_blank" rel="noopener noreferrer">
            加入 LINE <span aria-hidden="true">↗</span>
          </a>
          <span class="direct-contact__value">有何不可設計｜官方 LINE</span>
        </article>
      </div>

      <p class="direct-contact__note">
        本頁不收集或儲存表單資料。點擊後會直接開啟您的 Email 應用程式或 LINE。
      </p>
    `;

    return panel;
  }

  function applyDirectContact() {
    if (window.location.pathname !== "/contact") return;

    const wrap = document.querySelector(".contact-form-wrap");
    if (wrap && wrap.dataset.directContact !== "true") {
      wrap.dataset.directContact = "true";
      wrap.appendChild(createDirectContactPanel());
    }

    const notice = document.querySelector(".contact-aside__notice");
    if (notice && notice.dataset.directContact !== "true") {
      notice.dataset.directContact = "true";
      notice.innerHTML = `
        <span>CONTACT CHANNEL</span>
        <p>Email：${EMAIL}<br>LINE：官方帳號直接聯絡</p>
      `;
    }
  }

  let scheduled = false;
  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      applyDirectContact();
    });
  }

  const observer = new MutationObserver(scheduleApply);

  function start() {
    observer.observe(document.body, { childList: true, subtree: true });
    scheduleApply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }

  window.addEventListener("popstate", scheduleApply);
  window.addEventListener("pushState", scheduleApply);
  window.addEventListener("replaceState", scheduleApply);
})();
