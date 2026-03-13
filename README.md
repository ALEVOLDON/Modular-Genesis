# Modular Genesis

`Modular Genesis` is an open documentation-first project about modular synthesis, generative music, hybrid `VCV Rack + Ableton Live` workflows, and audiovisual systems.

This repository is already usable as a first public version: it contains a working site, early lessons, reference notes, roadmap pages, patch metadata, and repository structure for future real patch files and media.

## Current Version

This should be treated as an early public draft:

- website scaffold is working
- learning tracks are defined
- lesson content has started
- reference notes are published on-site
- patch library structure exists, but the `.vcv` files are still placeholders

In other words: this is a strong `v0.1`, not a finished course or finished instrument library.

## What The Project Covers

- modular synthesis in `VCV Rack`
- hybrid workflows with `Ableton Live`
- generative patch design
- routing, recording, and performance structure
- audiovisual mapping and future visual systems

## Core Workflow

```text
MIDI Controller / Ableton Live
            ->
         VCV Rack
            ->
      Generative Patch
            ->
        Audio Engine
            ->
   Visual Engine / Website
            ->
 Audiovisual Performance
```

Practical split:

- `Ableton Live` handles sequencing, arrangement, recording, and mix-stage work
- `VCV Rack` handles synthesis, modulation, random systems, and generative behavior
- visual tools such as `Blender`, `Three.js`, or `TouchDesigner` are the future output layer

## What Already Exists

### Website

The `Astro` site in `site/` already includes:

- landing page
- roadmap page
- course page
- lesson detail pages
- patch library page
- patch detail pages
- resources page
- note detail pages

### Learning Structure

Current tracks:

1. Foundations
2. Sequencing
3. Generative
4. Hybrid
5. Audiovisual

### Documentation

The repository already contains:

- project summary
- migrated note documents
- course track docs
- diagrams
- patch placeholders

## Run Locally

From `site/`:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:4321/
```

Production build:

```bash
npm run build
```

## Deploy

The repository is configured for GitHub Pages deployment through GitHub Actions.

Expected project site URL:

```text
https://alevoldon.github.io/Modular-Genesis/
```

Deployment source:

- branch: `main`
- workflow: `.github/workflows/deploy-pages.yml`
- build output: `site/dist`

## Repository Layout

```text
docs/
  notes/
  course/
  diagrams/

patches/
  foundations/
  sequencing/
  generative/
  performances/

ableton/
  templates/
  racks/
  routing/

visuals/
  blender/
  threejs/
  shaders/
  touchdesigner/

site/
  src/
  public/
```

See `PROJECT_STRUCTURE.md` for the fuller breakdown.

## Roadmap

### Level 1. Foundations

- CV vs audio
- oscillator, filter, VCA, envelope, LFO
- first subtractive patches

### Level 2. Sequencing

- clocks, triggers, gates
- sequencers
- quantizers
- melodic and rhythmic motion

### Level 3. Generative

- probability
- sample and hold
- mutation
- slow modulation
- feedback

### Level 4. Hybrid

- `VCV Rack` + `Ableton Live`
- routing and recording
- multichannel structure
- MIDI control

### Level 5. Audiovisual

- audio-reactive visuals
- OSC and MIDI mapping
- performance scene design
- future 3D / visual lab work

## Current Gaps

The main missing pieces before a stronger public release are:

- real `.vcv` patch files instead of placeholders
- screenshots, demo audio, and visual captures
- fuller lesson coverage across all tracks
- deployment to a public URL

## License

This repository is released under the MIT License. See `LICENSE`.
