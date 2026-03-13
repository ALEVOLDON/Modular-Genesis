# Generative Patch Design

This document consolidates the notes focused on self-generating systems inside `VCV Rack`.

## Main Pattern

Across the source notes, the same architecture appears in multiple forms:

```text
Clock
  -> Random / Probability
  -> Sequencer
  -> Quantizer
  -> Synth Voice
  -> Effects
  -> Output
```

This is the basic grammar of the project.

## Core Building Blocks

### Clock

The clock creates temporal order:

- tempo
- subdivisions
- trigger points

Without it, the patch has modulation but no rhythmic spine.

### Random and Probability

The notes consistently treat randomness as controlled variation rather than chaos.

These modules are meant to generate:

- note choices
- rhythmic gaps
- parameter movement
- mutation over time

### Sequencer

The sequencer is not only for fixed melody. In this project it acts as a structure container for:

- repeated motion
- memory
- phrase behavior
- constrained variation

### Quantizer

This is one of the most important modules in the whole note set.

Its role:

- translate free voltage into musical pitch sets
- keep generative behavior inside a scale
- prevent random voltage from becoming unusable pitch noise

### Slow Modulation

The notes strongly emphasize long-form change:

- 30-second cycles
- multi-minute filter motion
- evolving density and texture

This is how the system stops sounding like a short loop.

### Feedback

A more advanced layer appears repeatedly:

- patch output influences future behavior
- envelope or energy can modulate probability
- the system reacts to itself

That is the transition from random patching to living system design.

## Typical Musical Goals

The note set keeps returning to a few output styles:

- ambient
- IDM
- generative texture
- drone systems
- self-playing experimental music

## Practical Minimal Patch

A very small version of the project logic looks like this:

```text
Clock
  -> Turing-style melody source
  -> Quantizer
  -> Voice
  -> Granular or spatial effect
  -> Audio
```

Even this small patch can already behave like a full miniature system if timing, scale, and long modulation are chosen carefully.
