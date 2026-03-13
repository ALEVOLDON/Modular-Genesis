---
title: "Hybrid Workflow"
summary: "How Ableton Live and VCV Rack divide roles across sequencing, synthesis, routing, and recording."
order: 1
---

## Core Model

The recurring pattern across the project is a hybrid setup where:

- `Ableton Live` provides sequencing, arrangement, drums, recording, and effects
- `VCV Rack` provides synthesis, modulation, probability, and generative behavior

Typical flow:

```text
Ableton Live
  -> MIDI / clock / arrangement
VCV Rack
  -> modular patch / synthesis / generative control
Audio Routing
  -> recording / mixing / performance output
```

## Standalone vs Plugin Thinking

The project uses two different mental models.

### Standalone `VCV Rack`

- Rack runs as its own application
- audio interface selection happens in Rack
- Ableton can still send MIDI or receive audio
- virtual audio drivers may be needed

### Plugin `VCV Rack`

- Rack is hosted inside the DAW
- the DAW owns the audio device
- Rack behaves like an instrument or effect

## Why This Matters

The project does not treat modular as a novelty plugin. It treats modular as a behavior engine.

That leads to a useful split:

- `VCV Rack` as instrument and system logic
- `Ableton Live` as studio and arrangement layer
