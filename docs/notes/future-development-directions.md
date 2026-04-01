# Future Development Directions

This note captures a few reasonable next-step directions for `Modular Genesis` after the current round of icon and content-structure work.

## 1. UX Polish

Small interface improvements that strengthen the feel of the site without changing its structure:

- clean up lesson navigation on detail pages
- add clearer active-state logic in the header
- improve metadata presentation on lesson, note, and patch pages
- make related content blocks feel more like deliberate navigation
- refine timeline, status, and metric components where they still read a bit dry

This is the safest and fastest path for improving perceived quality.

## 2. Russian Content Polish

The Russian layer now has the correct structure, but it can still be improved editorially:

- reduce mixed RU/EN UI phrasing
- align terminology across roadmap, course, resources, and patches
- rewrite summaries and supporting copy to feel more intentional in Russian
- make Russian patch pages feel less like mirrored placeholders

This would noticeably raise the quality of the bilingual experience.

## 3. Content and Data Consistency

The next technical-content step is to reduce duplication and make future growth easier:

- move repeated UI labels into shared dictionaries
- unify repeated CTA wording across page templates
- keep collection schemas and content folders strictly aligned
- reduce manual duplication between English and Russian page logic where possible

This is useful if the repository will keep growing as a long-term public system.

## Suggested Order

Recommended sequence:

1. UX polish
2. Russian content polish
3. content/data consistency cleanup

The first step improves the site quickly, while the later steps improve editorial quality and maintainability.
