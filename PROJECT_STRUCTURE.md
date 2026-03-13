# Project Structure

This file defines the intended repository structure for `Modular Genesis`.

## Top Level

```text
docs/
patches/
ableton/
visuals/
site/
assets/
```

## `docs/`

Project documentation, editorial content, and migration target for raw notes.

```text
docs/
  notes/
    PROJECT_SUMMARY.md
  course/
    foundations/
    sequencing/
    generative/
    hybrid/
    audiovisual/
  diagrams/
  references/
```

## `patches/`

`VCV Rack` patch library and patch documentation.

```text
patches/
  foundations/
  sequencing/
  generative/
  performances/
```

Naming suggestion:

```text
patches/generative/generative-ambient-v01.vcv
patches/sequencing/clock-quantizer-demo-v01.vcv
```

## `ableton/`

DAW-related assets.

```text
ableton/
  templates/
  racks/
  routing/
```

## `visuals/`

Visual and audiovisual components.

```text
visuals/
  blender/
  threejs/
  shaders/
  touchdesigner/
```

## `site/`

Future public-facing website.

Suggested structure for an `Astro`-based site:

```text
site/
  src/
    components/
    layouts/
    pages/
  content/
    lessons/
    patches/
    roadmap/
  public/
    images/
    audio/
    models/
```

## `assets/`

Shared media that does not yet belong to the final site structure.

```text
assets/
  images/
  audio/
  video/
  models/
```

## Recommended Build Order

1. Fill out `docs/course/` with lesson drafts.
2. Add first `VCV Rack` patch files to `patches/`.
3. Add diagrams to `docs/diagrams/`.
4. Initialize `site/` with a static framework.
5. Move stable media into `site/public/` as the web layer appears.
