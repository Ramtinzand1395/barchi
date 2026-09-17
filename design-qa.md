# Design QA

**Source visual truth**

- Landing reference: `C:\Users\Ramtin\Downloads\file_000000004e3881f49767b62b55e7b3c3.png` (737 × 2134).
- Brand reference: `C:\Users\Ramtin\Downloads\1000077409.png` (1536 × 1024).
- Target state: Persian RTL landing page branded as «بارچی», using the supplied logo system, official palette, Motion interactions, and React Icons.

**Implementation evidence**

- URL: `http://localhost:3000/`
- Desktop browser review: default in-app browser viewport; header, hero, full RTL hierarchy, logo, and palette visually inspected.
- Responsive browser review: requested 390 × 844 viewport (375 CSS px effective content width).
- Responsive metrics: `scrollWidth === clientWidth === 375`; no horizontal overflow.
- Browser document title: `بارچی | تأمین ساده‌تر، کسب‌وکار قوی‌تر`.
- App icon resolves from `/icon.png`; the old starter favicon was removed.
- Brand logo images loaded successfully and the mobile navigation changed `aria-expanded` from `false` to `true` when opened.

**Brand and typography checks**

- All visible references to the former name were replaced with «بارچی».
- Header, footer, metadata, app icon, emails, image alternative text, FAQ copy, and CTA copy use the new identity.
- Core tokens match the supplied board: primary `#005B46`, secondary `#008A64`, accent `#6CC04A`, white `#FFFFFF`, and dark `#17211E`.
- Peyda is declared globally with only weights `400`, `500`, `600`, and `700`.
- Headings use `600/700`, menus and buttons use `500/600`, body copy uses `400`, and prices/dashboard data use `500`.
- No `800` or `900` font weights remain in application CSS.

**Interaction and accessibility checks**

- Mobile navigation opens and closes with an announced expanded state.
- Supplier cards update `aria-selected` and visibly change selection.
- FAQ controls update `aria-expanded` and animate their content.
- Reduced-motion preference is respected.
- Meaningful images include alternative text; interface iconography uses `react-icons`.

**Verification**

- [x] TypeScript (`npx tsc --noEmit`).
- [x] ESLint (`npm run lint`).
- [x] Production build (`npm run build`).
- [x] Git whitespace check (`git diff --check`).
- [x] Desktop visual review.
- [x] Mobile visual and interaction review.
- [x] No horizontal overflow at the mobile breakpoint.

**Remaining blocker**

- [P1] The licensed Peyda font files are not present in the workspace or installed on this machine. Browser verification reports `document.fonts.check('16px "Peyda"', 'بارچی') === false`, so the declared family currently falls back to Tahoma/Arial. Exact Peyda rendering requires the four licensed WOFF2 files for weights 400, 500, 600, and 700.

final result: blocked
