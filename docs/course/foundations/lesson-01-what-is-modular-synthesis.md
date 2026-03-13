# Lesson 01: What Is Modular Synthesis

## Theory

Modular synthesis is a way of building an instrument from separate functional blocks.

Instead of opening one fixed synthesizer with a prewired signal path, you connect the parts yourself:

- sound source
- timbre shaping
- amplitude control
- modulation
- timing

In `VCV Rack`, that means the instrument is not a single plugin. The instrument is the patch.

## Why It Matters Here

`Modular Genesis` is not centered on presets. It is centered on systems.

That matters because later lessons will depend on building behavior from smaller units:

- sequencing
- probability
- feedback
- audiovisual mapping

## Patch Idea

At the beginning, think in the smallest possible chain:

```text
VCO -> VCF -> VCA -> AUDIO
```

## Practice

Open `VCV Rack` and identify these module roles:

1. a sound source
2. a filter
3. a level control stage
4. an output

Write down what each part changes in the sound.
