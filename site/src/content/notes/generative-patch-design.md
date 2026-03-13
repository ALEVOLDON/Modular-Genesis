---
title: "Generative Patch Design"
summary: "Clock, random, quantization, mutation, slow modulation, and feedback as the grammar of generative systems."
order: 2
---

## Main Pattern

The same architecture appears again and again:

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

The clock provides temporal order and pulse structure.

### Random and Probability

These are used for controlled variation:

- note choices
- rhythmic gaps
- parameter movement
- mutation over time

### Quantizer

The quantizer is one of the most important tools in the whole system because it turns voltage into usable pitch logic.

### Slow Modulation

Long-form motion is what prevents the patch from feeling like a short loop.

### Feedback

Feedback makes the patch respond to itself, which is where it starts to behave like a living system.
