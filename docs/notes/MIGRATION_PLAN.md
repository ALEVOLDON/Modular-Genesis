# Note Migration Plan

The repository still contains raw numbered note files at the root.

## Goal

Move their contents into stable, named documentation so the root of the repository stops being the project archive.

## Suggested Migration

- `1.txt` to `4.txt` -> `docs/notes/hybrid-workflow.md`
- `5.txt` and `6.txt` -> `docs/notes/generative-patch-design.md`
- `7.txt` to `9.txt` -> `docs/notes/course-and-repository-vision.md`
- `10.txt` and `11.txt` -> `docs/notes/site-and-visual-map.md`
- `12.txt` -> `docs/notes/3d-lab-concept.md`

## After Migration

1. Keep the original files temporarily for traceability.
2. Add links between note docs and lesson docs.
3. Remove numbered files only after the content is fully normalized.
