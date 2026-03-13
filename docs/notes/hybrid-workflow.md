# Hybrid Workflow

This document consolidates the raw notes about combining `Ableton Live` and `VCV Rack`.

## Core Model

The recurring pattern across the source notes is a hybrid setup where:

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

The notes repeatedly distinguish two different mental models.

### Standalone `VCV Rack`

In this model:

- `VCV Rack` runs as its own application
- audio interface selection happens in Rack
- `Ableton Live` can still send MIDI or receive audio
- virtual audio drivers may be needed

This is the more likely scenario described in the early notes because they refer to an active `AUDIO` module in Rack.

### Plugin `VCV Rack`

In this model:

- Rack is hosted inside the DAW
- the DAW owns the audio device
- Rack behaves more like an instrument or effect
- the internal `AUDIO` output module is no longer the key output point

## Audio Routing Roles

The notes make a useful distinction between:

- a final stereo output module
- multichannel or bridge-style routing modules

That distinction matters because a generative system often benefits from splitting voices:

- kick on one channel
- bass on another
- textures and drones separately
- effects returns isolated for mixing

## Practical Hybrid Uses

The notes suggest several practical roles for the DAW side:

- arrangement
- recording long jams
- compression and reverb
- drum programming
- MIDI controller integration

They also suggest clear roles for the Rack side:

- random systems
- sequencing logic
- tonal mutation
- granular and ambient processing

## Why This Hybrid Model Matters

The project does not treat modular as a novelty plugin. It treats modular as a system engine.

That leads to a more useful division:

- `VCV Rack` as instrument and behavior engine
- `Ableton Live` as studio layer

This is the foundation for the rest of the repository: lessons, patches, route diagrams, and performance concepts all build on this split.
