const LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/whynot_studio_tw/",
    external: true,
  },
  {
    id: "threads",
    label: "Threads",
    url: "https://www.threads.com/@whynot_studio_tw",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/liyako",
    external: true,
  },
  {
    id: "line",
    label: "LINE",
    url: "https://lin.ee/qNY3Uug",
    external: true,
  },
  {
    id: "mail",
    label: "電子郵件",
    url: "mailto:whynot.studio.tw@gmail.com",
    external: false,
  },
];

const ICONS = {
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle class="dot" cx="17.6" cy="6.7" r="1"></circle>
    </svg>`,
  threads: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.7c-4.8 0-8 3.3-8 8.3 0 5.1 3.2 8.3 8.1 8.3 4.1 0 6.8-2.2 6.8-5.5 0-2.7-1.8-4.5-4.7-4.8-2.8-.3-4.8.9-4.8 3 0 1.7 1.4 2.8 3.2 2.8 2.6 0 4.5-1.9 4.5-4.8 0-3.8-2-6.2-5.4-6.2-2.7 0-4.6 1.4-5.5 3.7"></path>
    </svg>`,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="9" width="3" height="10"></rect>
      <circle class="dot" cx="5.5" cy="5.5" r="1.6"></circle>
      <path d="M10.5 19V9h3v1.6c.8-1.2 2-1.9 3.5-1.9 2.5 0 3.5 1.6 3.5 4.4V19h-3v-5.3c0-1.5-.5-2.3-1.8-2.3-1.4 0-2.2 1-2.2 2.8V19Z"></path>
    </svg>`,
  line: `
    <svg viewBox="0 0 24 24" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 10.9c0 4-3.6 7.2-8 7.2-.9 0-1.8-.1-2.6-.4L5.1 20l1.2-3.6C4.9 15.1 4 13.2 4 10.9 4 7 7.6 3.8 12 3.8s8 3.2 8 7.1Z"></path>
      <path d="M7.1 8.7v4.9h2.1M10.4 8.7v4.9M12 13.6V8.7l2.7 4.9V8.7M18.2 8.7h-2v4.9h2M16.2 11.1h1.6"></path>
    </svg>`,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="1"></rect>
      <path d="m4.5 6 7.5 6 7.5-6"></path>
    </svg>`,
};

const list = document.querySelector("#link-list");

LINKS.forEach((item) => {
  const anchor = document.createElement("a");
  anchor.className = "link-button";
  anchor.href = item.url;
  anchor.setAttribute(
    "aria-label",
    item.id === "mail" ? "使用電子郵件聯絡有何不可設計" : `前往 ${item.label}`
  );

  if (item.external) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }

  const icon = document.createElement("span");
  icon.className = "link-icon";
  icon.innerHTML = ICONS[item.id];

  const label = document.createElement("span");
  label.className = "link-label";
  label.textContent = item.label;

  const arrow = document.createElement("span");
  arrow.className = "link-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = item.external ? "↗" : "→";

  anchor.append(icon, label, arrow);
  list.appendChild(anchor);
});
