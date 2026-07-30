# Website architecture migration plan

Status: In progress
Branch: `agent/main-visual-v4-architecture`

## Direction

- Preserve the accepted visual language from `main`.
- Reuse the information architecture and shared-shell concepts from PR #16.
- Do not continue PR #16 as the implementation branch.
- Do not merge or modify `main` during construction.

## Confirmed CSS contamination baseline

### Main homepage

Loads all three stylesheets:

1. `assets/css/style.css`
2. `assets/css/homepage-mvp.css`
3. `assets/css/monochrome.css`

`style.css` and `homepage-mvp.css` redefine the same homepage selectors, including:

- `.portfolio-preview__heading`
- `.portfolio-preview__list`
- `.portfolio-preview__image`
- `.portfolio-preview__body`
- `.contact-panel__layout`
- `.contact-qr`

`monochrome.css` adds additional global and cross-page overrides, including generic selectors such as `.card`, `.hero-copy`, `.work-card`, `.contact-panel`, `.hero`, `.card-grid`, and `.case-section__grid`.

### Main Works page

Loads:

1. `assets/css/style.css`
2. `assets/css/portfolio.css`
3. `assets/css/monochrome.css`

This repeats the same cascade pattern on a different page family.

## Isolation rules

1. New architecture pages must load one stylesheet entry only.
2. Do not load `style.css`, `homepage-mvp.css`, `portfolio.css`, `monochrome.css`, or `v4.css` beside the new stylesheet.
3. Recreate accepted visual decisions explicitly; do not import whole legacy files.
4. Use component-specific names and avoid broad classes such as `.card`, `.title`, `.grid`, and `.container`.
5. Do not use `!important` as a migration strategy.
6. Keep old pages operational until each page is migrated and validated.
7. Validate at 360, 390, 430, 768, and 1200 px.

## Implementation order

1. CSS inventory and architecture map
2. Isolated stylesheet and shared shell
3. Home
4. Works
5. About, Services, Contact, FAQ
6. Case-study shell and controlled case migration
7. Link, metadata, responsive, and regression QA
8. Draft pull request

## Stop conditions

Pause only for:

- conflicting brand or positioning decisions
- replacement or removal of official brand assets
- publication of unapproved work or private information
- URL or case-slug changes
- credentials, secrets, or irreversible operations
