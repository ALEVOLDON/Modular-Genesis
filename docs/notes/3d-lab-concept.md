# 3D Lab Concept

This document consolidates the note describing a future 3D educational environment for `Modular Genesis`.

## Main Idea

Instead of a flat website only, the project may eventually include a spatial learning environment:

- a virtual studio or lab
- modeled in `Blender`
- exported as `GLTF` or `GLB`
- rendered on the web with `Three.js`

## Purpose

The 3D lab is not just decoration. It would act as a navigable knowledge space.

Possible zones:

- entrance and overview
- main desk with modular system
- poster wall with architecture diagrams
- patch table for system blueprints
- visual lab corner for reactive graphics
- shelf or library area for core module concepts

## Interaction Opportunities

The source notes suggest:

- clicking an object opens a lesson
- clicking a module plays an example sound
- clicking a poster opens a system diagram
- guided tour mode for course progression

## Technical Pipeline

The proposed stack is straightforward:

```text
Blender
  -> GLTF / GLB export
  -> Three.js scene
  -> website interactions
```

## Constraints

The notes also imply a realistic approach:

- low-poly assets
- baked lighting
- moderate texture sizes
- browser-friendly performance

That means the 3D lab should be treated as a later milestone after the 2D documentation site is stable.
