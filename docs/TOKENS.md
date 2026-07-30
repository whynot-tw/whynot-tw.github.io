# Website Design Tokens

Status: Approved  
Updated: 2026-07-30

## Spacing scale

Use a 4px base scale, with selected optical values when a component requires a better visual rhythm.

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
card.media-to-title.mobile  = 20px
card.media-to-title.desktop = 30px
card.title-to-category       = 12px
card.card-to-card            = 52px
```

The revised values keep the gallery rhythm while reducing excessive separation between media and title. Card-to-card spacing remains clearly larger than the card's internal spacing.

## Implementation rule

CSS custom properties are the single source of truth. Homepage, Works and placeholder cards must reference the same variables rather than duplicating numeric values.
