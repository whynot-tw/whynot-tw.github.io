const list = document.querySelector("#link-list");
const template = document.querySelector("#link-card-template");
const errorMessage = document.querySelector("#load-error");

function renderCard(item) {
  const node = template.content.cloneNode(true);
  const card = node.querySelector(".link-card");
  const category = node.querySelector(".card-category");
  const title = node.querySelector(".card-title");
  const description = node.querySelector(".card-description");
  const arrow = node.querySelector(".card-arrow");

  card.href = item.url;
  category.textContent = item.category || "入口";
  title.textContent = item.title;
  description.textContent = item.description || "";

  if (item.openInNewTab) {
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    arrow.textContent = "↗";
  } else {
    arrow.textContent = "→";
  }

  list.appendChild(node);
}

async function loadLinks() {
  try {
    const response = await fetch("./data/links.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const items = await response.json();
    const publicItems = items
      .filter(
        (item) =>
          item.status === "public" &&
          typeof item.url === "string" &&
          item.url.trim().length > 0
      )
      .sort((a, b) => Number(a.order) - Number(b.order));

    publicItems.forEach(renderCard);

    if (publicItems.length === 0) {
      throw new Error("No public links available");
    }
  } catch (error) {
    console.error("Failed to load links:", error);
    errorMessage.hidden = false;
  }
}

loadLinks();
