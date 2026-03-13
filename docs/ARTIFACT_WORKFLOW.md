# Artifact Workflow

This document defines the first real artifact pass for `Modular Genesis`.

## First Priority

Ship one real artifact set from one patch, end to end:

1. one working `.vcv` file
2. one screenshot
3. one short demo audio export
4. one updated patch entry with media links

Do not try to complete every patch collection at once.

## Recommended First Patch

Start with:

- `patches/foundations/basic-voice-v01.vcv`

Why:

- easiest to validate
- directly connected to beginner lessons
- good foundation for screenshots and short audio demos

## File Targets

Use these paths:

- patch file: `patches/foundations/basic-voice-v01.vcv`
- screenshot: `assets/images/patches/basic-voice-v01.png`
- demo audio: `assets/audio/patches/basic-voice-v01-demo.mp3`

## Patch Entry Update

When media exists, update the corresponding file in `site/src/content/patches/`.

Example fields:

```md
---
title: "Basic Voice v01"
summary: "Starter subtractive voice for the foundations track."
track: "foundations"
filename: "basic-voice-v01.vcv"
status: "ready"
order: 1
version: "v1"
image: "/assets/images/patches/basic-voice-v01.png"
audio: "/assets/audio/patches/basic-voice-v01-demo.mp3"
duration: "00:32"
---
```

## Screenshot Guidelines

- use one clean patch view
- keep the rack readable
- avoid tiny text and overly zoomed-out captures
- prefer PNG

## Demo Audio Guidelines

- keep it short: 20 to 60 seconds
- normalize enough for easy listening
- avoid long intros
- export MP3 for site preview

## Suggested Order After First Artifact

1. `basic-voice-v01`
2. `clock-quantizer-demo-v01`
3. `generative-ambient-v01`

This creates one artifact in each of the most important early directions:
foundations, sequencing, and generative.
