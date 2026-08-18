const list = document.querySelector("#link-list");
const socialLinks = document.querySelector("#social-links");
const template = document.querySelector("#link-card-template");
const errorMessage = document.querySelector("#load-error");

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
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="9" width="3" height="10"></rect>
      <circle class="dot" cx="5.5" cy="5.5" r="1.6"></circle>
      <path d="M10.5 19V9h3v1.6c.8-1.2 2-1.9 3.5-1.9 2.5 0 3.5 1.6 3.5 4.4V19h-3v-5.3c0-1.5-.5-2.3-1.8-2.3-1.4 0-2.2 1-2.2 2.8V19Z"></path>
    </svg>`,
  youtube: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.1 7.2c-.2-1-1-1.8-2-2C16.6 4.8 14.5 4.7 12 4.7s-4.6.1-6.1.5c-1 .2-1.8 1-2 2-.3 1.3-.4 2.9-.4 4.8s.1 3.5.4 4.8c.2 1 1 1.8 2 2 1.5.4 3.6.5 6.1.5s4.6-.1 6.1-.5c1-.2 1.8-1 2-2 .3-1.3.4-2.9.4-4.8s-.1-3.5-.4-4.8Z"></path>
      <path d="m10 9 5 3-5 3Z"></path>
    </svg>`
};

function isPublicWithUrl(item) {
  return (
    item.status === "public" &&
    typeof item.url === "string" &&
    item.url.trim().length > 0
  );
}

function applyLinkBehavior(anchor, item) {
  anchor.href = item.url;

  if (item.openInNewTab) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
}

function renderSocial(item) {
  const icon = ICONS[item.icon];
  if (!icon) return;

  const anchor = document.createElement("a");
  anchor.className = "social-link";
  anchor.setAttribute("aria-label", item.title);
  anchor.innerHTML = icon;
  applyLinkBehavior(anchor, item);
  socialLinks.appendChild(anchor);
}

function renderCard(item) {
  const node = template.content.cloneNode(true);
  const card = node.querySelector(".link-card");
  const category = node.querySelector(".card-category");
  const title = node.querySelector(".card-title");
  const description = node.querySelector(".card-description");
  const arrow = node.querySelector(".card-arrow");

  applyLinkBehavior(card, item);
  category.textContent = item.category || "入口";
  title.textContent = item.title;
  description.textContent = item.description || "";
  arrow.textContent = item.openInNewTab ? "↗" : "→";

  list.appendChild(node);
}

async function loadLinks() {
  try {
    const response = await fetch("./data/links.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const items = await response.json();
    if (!Array.isArray(items)) {
      throw new Error("Invalid links data");
    }

    const publicItems = items
      .filter(isPublicWithUrl)
      .sort((a, b) => Number(a.order) - Number(b.order));

    const publicSocials = publicItems.filter((item) => item.type === "social");
    const publicEntries = publicItems.filter((item) => item.type === "entry");

    publicSocials.forEach(renderSocial);
    publicEntries.forEach(renderCard);

    socialLinks.hidden = publicSocials.length === 0;

    if (publicEntries.length === 0) {
      throw new Error("No public entry links available");
    }
  } catch (error) {
    console.error("Failed to load links:", error);
    errorMessage.hidden = false;
  }
}

loadLinks();
