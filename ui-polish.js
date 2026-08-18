/*
 * WHYNOT STUDIO｜已確認的 UI polish
 * 以獨立的小型靜態補丁調整既有 DOM，保持編譯 JS／CSS bundle 完整且不替換。
 */
(() => {
  const heroIllustrations = {
    works: { caption: "ARCHIVE / SELECTED CONTENTS" },
    services: { caption: "SYSTEM / CONTENT TO FORM" },
    contact: { caption: "CONTEXT / BEFORE CONTACT" },
  };

  const updateExperienceCopy = () => {
    const stamp = document.querySelector('.about-summary__stamp > span');
    if (stamp?.textContent?.trim() === '20+') stamp.textContent = '15+';

    document.querySelectorAll('p').forEach((item) => {
      if (item.textContent?.includes('擁有超過二十年的')) {
        item.textContent = item.textContent.replace('擁有超過二十年的', '擁有超過十五年的');
      }
    });
  };

  const createEditorialHero = (kind) => {
    const hero = document.querySelector(`.page-hero--${kind}`);
    const grid = hero?.querySelector('.page-hero__grid');
    if (!grid || grid.dataset.editorialHero === kind) return;

    const children = Array.from(grid.children);
    const copy = children.find((child) => child.tagName === 'DIV');
    const description = children.find((child) => child.tagName === 'P');
    if (!copy || !description) return;

    description.classList.add('page-hero__description');
    copy.append(description);

    const figure = document.createElement('figure');
    figure.className = `page-hero__illustration page-hero__illustration--${kind}`;
    figure.setAttribute('aria-label', heroIllustrations[kind].caption);
    figure.innerHTML = `
      <div class="page-hero__illustration-art" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <figcaption>${heroIllustrations[kind].caption}</figcaption>
    `;
    grid.append(figure);
    grid.dataset.editorialHero = kind;
  };

  const normalizeContact = () => {
    const contactPage = document.querySelector('.contact-page');
    if (contactPage) contactPage.classList.add('contact-page--editorial-stack');
  };

  const simplifyEditorialEyebrows = () => {
    const removeCompletely = new Set([
      '有何不可設計｜WHYNOT STUDIO',
      'ABOUT / WHYNOT STUDIO',
      'ARCHIVE / 01–04',
      'ARCHIVE / 01-04',
      'SERVICES / FROM CONTENT TO FORM',
      'CONTACT / START WITH CONTEXT',
      'ARCHIVE / NOT FOUND',
      '04 / ABOUT',
      "LET'S MAKE IT CLEAR",
      'GALLERY',
    ]);

    const reduceToIndex = new Map([
      ['02 / CAPABILITIES', '02 —'],
      ['03 / TOOLKIT', '03 —'],
      ['02 / COLLABORATION', '02 —'],
      ['01 / BEFORE WE TALK', '01 —'],
      ['02 / PROJECT NOTE', '02 —'],
    ]);

    document.querySelectorAll('p.eyebrow').forEach((eyebrow) => {
      const label = eyebrow.textContent?.trim() ?? '';
      if (removeCompletely.has(label)) {
        eyebrow.remove();
      } else if (reduceToIndex.has(label)) {
        eyebrow.textContent = reduceToIndex.get(label);
        eyebrow.classList.add('eyebrow--index-only');
      }
    });

    document.querySelectorAll('.section-marker__eyebrow').forEach((marker) => {
      const spans = Array.from(marker.querySelectorAll(':scope > span'));
      if (spans.length > 2) spans[2].remove();
      marker.classList.add('section-marker__eyebrow--index-only');
    });
  };

  const applyPreviewAdjustments = () => {
    updateExperienceCopy();
    Object.keys(heroIllustrations).forEach(createEditorialHero);
    normalizeContact();
    simplifyEditorialEyebrows();
  };

  applyPreviewAdjustments();
  new MutationObserver(applyPreviewAdjustments).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
