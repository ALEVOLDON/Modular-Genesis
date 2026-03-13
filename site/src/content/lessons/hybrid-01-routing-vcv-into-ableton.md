---
title: "Lesson 01: Routing VCV Rack Into Ableton"
summary: "Understand the practical signal path for using Rack as a modular engine and Ableton as the studio layer."
track: "hybrid"
order: 1
---

## Theory

The hybrid model of this project treats the tools differently:

- `VCV Rack` generates and transforms sound
- `Ableton Live` records, arranges, and mixes

To make that work, audio has to move cleanly between them.

## Main Scenarios

### Standalone Rack

- Rack owns the audio engine
- virtual routing may be required
- Ableton can receive or send signals depending on workflow

### Hosted Rack

- Ableton owns the audio engine
- Rack behaves like a plugin

## Patch Idea

```text
VCV Rack -> virtual audio route -> Ableton track
```

## Practice

Draw your exact routing plan before patching:

1. what generates the sound
2. what receives the sound
3. what records it
