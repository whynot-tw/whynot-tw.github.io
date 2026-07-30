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
- Includes hover, focus and pointer feedback.

`placeholder`
- Not clickable.
- Uses the same media dimensions, internal spacing and typography as `published`.
- Only the media content and availability state differ.

### Forbidden

- Page-specific image-to-title margins.
- Different placeholder card padding.
- Wrapping only the image or only the title in the link.
- Using markup defaults such as `figure` margins as layout spacing.

## Header and Footer

Case pages and main pages must use equivalent information architecture and actual page URLs. Case pages may retain their visual implementation temporarily, but links, active state and return paths must remain consistent.
