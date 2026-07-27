# Website v4 Alpha QA Report

Status: Draft QA
Branch: `website-v4-rebuild`
PR: #16

## 1. Scope verified

- Home
- Works
- About
- Services
- Contact
- FAQ
- Case Study Template
- 55 廚房案例頁
- 炭吉案例頁
- 可可慢慢說案例頁
- Shared Header / Footer / mobile navigation
- Official brand assets and favicon

## 2. Code-level checks completed

- [x] All core pages use `assets/css/v4.css`
- [x] All core pages use `assets/js/v4.js`
- [x] Official horizontal logo is used in the shared Header
- [x] Favicon and Apple Touch Icon paths are present
- [x] Main navigation paths are normalized by page depth
- [x] Footer links include FAQ, Email, Instagram, and LINE
- [x] Existing case content and images are preserved
- [x] Incomplete cases remain placeholders rather than fabricated content
- [x] PR remains Draft and `main` is unchanged

## 3. Known limitations before visual approval

- [ ] No branch preview workflow is configured in this repository
- [ ] Desktop rendering has not yet been visually reviewed in a browser
- [ ] Mobile rendering has not yet been visually reviewed on the target phone
- [ ] External links need final click-through testing after deployment
- [ ] Open Graph image is not yet configured

## 4. Alpha acceptance gate

Do not merge PR #16 until all items below are complete:

- [ ] Rendered preview available
- [ ] Home / Works / About / Services / Contact / FAQ visually checked
- [ ] 55 廚房 / 炭吉 / 可可慢慢說 visually checked
- [ ] Mobile menu opens and closes correctly
- [ ] No broken image or 404 path
- [ ] User approves architecture and page flow

## 5. Deferred to Beta

- Fine spacing and typography adjustments
- Social icon refinement
- Animation and hover refinement
- CMS integration
- Google Form integration
- Full case inventory and additional case publishing
