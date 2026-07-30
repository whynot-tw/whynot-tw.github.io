# Website Design System

Status: Approved  
Updated: 2026-07-30

## Construction order

Specification → DESIGN.md → TOKENS.md → COMPONENTS.md → Pages → VISUAL-QA.md → Release

All spacing, typography, colors and interactive states must be token-driven and shared. Do not create page-specific variants when a shared component can be used.

## Visual Rhythm

The portfolio is presented as a gallery, not as a dense product catalogue.

- White space is part of the brand language.
- Reading rhythm and breathing room take priority over information density.
- Consistency matters more than compactness.
- Homepage, Works, placeholders and published project cards must use the same spacing system.
- Image-to-title spacing uses an edited gallery rhythm: 20px on mobile and 30px on desktop.
- Card-to-card spacing is 52px, remaining clearly larger than internal card spacing.
- Do not reduce spacing only to make the page look denser; changes must be visually reviewed.

## Card principles

All work cards must share one formal component implementation.

- Published work cards and placeholders use the same media ratio, content spacing, typography and card rhythm.
- A placeholder differs only in media content and availability state.
- Published cards may be clickable; placeholders remain non-clickable.
- Hover, focus and pointer behavior must be consistent across all published cards.
- Homepage and Works may compose the same component at different grid widths, but must not redefine its internal spacing.

## Navigation decisions

- Main site sections are independent pages: About, Services, Works and Contact.
- Case pages must not link to obsolete homepage anchors.
- Case-page navigation marks Works as the current section.
- Logo returns to the homepage.
