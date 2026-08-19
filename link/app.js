const LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/whynot_studio_tw/",
    icon: "instagram.svg",
    external: true,
  },
  {
    id: "threads",
    label: "Threads",
    url: "https://www.threads.com/@whynot_studio_tw",
    icon: "threads.svg",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/liyako",
    icon: "linkedin.svg",
    external: true,
  },
  {
    id: "line",
    label: "LINE",
    url: "https://lin.ee/qNY3Uug",
    icon: "line.svg",
    external: true,
  },
  {
    id: "mail",
    label: "電子郵件",
    url: "mailto:whynot.studio.tw@gmail.com",
    icon: "mail",
    external: false,
  },
];

const list = document.querySelector("#link-list");

function createMailIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = `
    <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="1.25"></rect>
    <path d="m4.25 6.25 7.75 6 7.75-6"></path>
  `;
  return svg;
}

function createIcon(item) {
  const icon = document.createElement("span");
  icon.className = "link-icon";
  icon.setAttribute("aria-hidden", "true");

  if (item.icon === "mail") {
    icon.appendChild(createMailIcon());
    return icon;
  }

  icon.classList.add("link-icon--brand");
  icon.style.setProperty("--icon-url", `url(\"./icons/${item.icon}\")`);
  return icon;
}

LINKS.forEach((item) => {
  const anchor = document.createElement("a");
  anchor.className = `link-button link-button--${item.id}`;
  anchor.href = item.url;
  anchor.setAttribute(
    "aria-label",
    item.id === "mail" ? "使用電子郵件聯絡有何不可設計" : `前往 ${item.label}`
  );

  if (item.external) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }

  const label = document.createElement("span");
  label.className = "link-label";
  label.textContent = item.label;

  const arrow = document.createElement("span");
  arrow.className = "link-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = item.external ? "↗" : "→";

  anchor.append(createIcon(item), label, arrow);
  list.appendChild(anchor);
});
