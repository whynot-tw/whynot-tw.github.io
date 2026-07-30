# UX Decision Log

## 2026-07-30 — Decision 021

### Refined work-card spacing

Decision:
Use 20px image-to-title spacing on mobile, 30px on desktop, 12px title-to-category spacing, and 52px card-to-card spacing.

Reason:
The earlier 36px / 40px values created too much separation in the rendered layout. The revised values preserve a gallery rhythm while keeping each card visually connected.

Implications:
- Homepage, Works, published cards and placeholders use the same spacing tokens.
- Card-to-card spacing remains clearly larger than internal card spacing.
- Spacing decisions require rendered mobile and desktop review, not code inspection alone.

## 2026-07-30 — Decision 020

### Generous image-to-title spacing

Decision:
Use deliberate image-to-title spacing for all work cards rather than browser-default margins or page-specific values.

Reason:
The portfolio is a gallery, not a dense product catalogue. White space, reading rhythm and breathing room are part of the brand language.

Implications:
- Homepage, Works, published cards and placeholders share the same internal rhythm.
- Placeholder cards must not use a separate compact layout.
- Numeric values may be refined after rendered visual QA while preserving the principle.

## 2026-07-30 — Decision 019

### Case-page navigation follows the new site architecture

Decision:
Case pages link to independent About, Services, Works and Contact pages. Works is the active section.

Reason:
The old homepage anchors no longer represent the current site architecture.
