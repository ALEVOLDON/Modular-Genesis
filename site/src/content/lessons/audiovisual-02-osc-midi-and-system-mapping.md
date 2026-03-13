---
title: "Lesson 02: OSC, MIDI, And System Mapping"
summary: "Define control protocols between the sound engine and the visual engine."
track: "audiovisual"
order: 2
---

## Theory

To connect sound and visuals, you need a transport layer.

In this project, the most useful options are:

- MIDI
- OSC
- direct parameter mapping inside one environment

## Why It Matters

Without a clear transport model, the audiovisual side becomes improvised and fragile.

## Practical Use

- MIDI is useful for discrete events and performance gestures
- OSC is useful for richer and more continuous data

## Practice

Write a mini mapping table with three signals:

1. source signal
2. destination parameter
3. update behavior
