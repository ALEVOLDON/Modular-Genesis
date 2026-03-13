---
title: "Lesson 01: Random And Sample & Hold"
summary: "Turn free randomness into controlled stepped behavior."
track: "generative"
order: 1
---

## Theory

Randomness becomes musically useful when it is sampled at meaningful times.

`Sample & Hold` works like this:

- a random source is available continuously
- a clock decides when to capture a value
- the held value remains stable until the next capture

## Core Patch

```text
Random -> Sample & Hold -> Quantizer -> Voice pitch
Clock  -> Sample & Hold trigger
```

## Why It Matters

This creates:

- new notes at controlled times
- stable values between events
- easy interaction with scales

## Practice

Try:

1. slow clock for sparse note changes
2. fast clock for active patterns
3. different scales in the quantizer
