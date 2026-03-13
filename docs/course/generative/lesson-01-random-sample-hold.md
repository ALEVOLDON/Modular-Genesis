# Lesson 01: Random And Sample & Hold

## Theory

Randomness becomes musically useful when it is sampled at meaningful times.

That is why `Sample & Hold` appears so often in generative systems.

It works like this:

- a random source is available continuously
- a clock or trigger decides when to capture a value
- the held value remains stable until the next capture

This produces stepped, readable variation instead of constant uncontrolled drift.

## Core Patch

```text
Random -> Sample & Hold -> Quantizer -> Voice pitch
Clock  -> Sample & Hold trigger
```

## Why It Matters

This is one of the cleanest ways to make a patch feel generative without becoming chaotic.

It creates:

- new notes at controlled times
- stable values between events
- easy interaction with scales

## Practice

Build the patch above and try:

1. slow clock for sparse note changes
2. fast clock for active patterns
3. different scales in the quantizer
