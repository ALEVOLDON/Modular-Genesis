---
title: "Lesson 02: Sequencer And Quantizer"
summary: "Use ordered voltage and scale constraints to create stable melodic motion."
track: "sequencing"
order: 2
---

## Theory

A sequencer gives the patch ordered voltage changes over time.

A quantizer translates those voltages into discrete musical pitch values.

```text
Clock -> Sequencer -> Quantizer -> Voice pitch
```

## Why Quantization Is Essential

Without a quantizer:

- melodies may drift into arbitrary pitch
- random voltage becomes harder to control

With a quantizer:

- scale choices become clear
- mutation stays musical

## Practice

Build a simple pitch chain and test:

1. one repeating 8-step melody
2. one melody in a minor scale
3. one version with a single step changed
