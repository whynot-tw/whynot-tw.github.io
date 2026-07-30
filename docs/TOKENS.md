# Website Design Tokens

Status: Approved  
Updated: 2026-07-30

## Spacing scale

Use a 4px base scale.

```text
space.0  = 0
space.1  = 4px
space.2  = 8px
space.3  = 12px
space.4  = 16px
space.5  = 20px
space.6  = 24px
space.7  = 28px
space.8  = 32px
space.9  = 36px
space.10 = 40px
space.11 = 48px
space.12 = 56px
```

## Work card rhythm

```text
card.media-to-title.mobile  = space.9   # 36px
card.media-to-title.desktop = space.10  # 40px
card.title-to-category       = space.3   # 12px
card.card-to-card.mobile     = space.12  # 56px minimum
```

The image-to-title value intentionally uses a generous gallery rhythm. Do not reduce it to create a denser list.

## Implementation rule

CSS custom properties should be the single source of truth. Homepage, Works and placeholder cards must reference the same variables rather than duplicating numeric values.
