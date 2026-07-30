# Website Components

Status: Approved  
Updated: 2026-07-30

## Work Card

One formal component must cover:

- Homepage featured works
- Works listing
- Published project cards
- Build-in-progress placeholders

### Shared structure

```text
WorkCard
├─ Media
├─ Title
└─ Category / summary
```

### Variants

`published`
- Whole card is clickable.
- Link points directly to the published case page.
- Includes hover, focus and pointer feedback.

`unpublished`
- Not clickable until a real case-page URL exists.
- Must not link to the Works index, homepage top, `#`, or any temporary destination.
- Uses the same media dimensions, internal spacing and typography as `published`.

`placeholder`
- Not clickable.
- Uses the same media dimensions, internal spacing and typography as `published`.
- Only the media content and availability state differ.

### Forbidden

- Page-specific image-to-title margins.
- Different placeholder card padding.
- Wrapping only the image or only the title in the link.
- Using markup defaults such as `figure` margins as layout spacing.
- Adding a link before the corresponding destination page exists.
- Using the Works index as a substitute destination for an unpublished case.

## Header and Footer

Case pages and main pages must use equivalent information architecture and actual page URLs. Case pages may retain their visual implementation temporarily, but links, active state and return paths must remain consistent.

## Link QA

Before release, verify:

- Every clickable work card resolves to its own published case page.
- Unpublished and placeholder cards contain no anchor element.
- Header, footer, breadcrumbs and return-to-Works links resolve from each directory depth.
- Internal links do not use obsolete homepage anchors.
- External links use `target="_blank"` with `rel="noopener"` when opening a new tab.
