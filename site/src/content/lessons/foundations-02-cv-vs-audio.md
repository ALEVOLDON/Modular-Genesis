---
title: "Lesson 02: CV Vs Audio"
summary: "Learn the core distinction between heard signals and control signals."
track: "foundations"
order: 2
---

## Theory

One of the most important modular concepts is the difference between:

- audio signals
- control voltage signals

Audio is what you hear.  
CV is what changes behavior.

Examples of CV:

- pitch
- filter cutoff movement
- volume envelopes
- LFO motion

## Practical Rule

Ask two questions whenever you patch something:

1. Is this signal meant to be heard?
2. Or is it meant to control another parameter?

## Patch Idea

```text
LFO -> Filter cutoff
Oscillator -> Filter input
```

The oscillator is audio.  
The LFO is control.

## Practice

Build a simple patch and test three signals:

1. oscillator to output
2. LFO to filter cutoff
3. envelope to VCA level
