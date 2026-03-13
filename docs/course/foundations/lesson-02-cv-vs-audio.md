# Lesson 02: CV Vs Audio

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

In software modular systems, the same visual cable language often carries both ideas, so you must learn to think by function, not by appearance alone.

## Practical Rule

Ask two questions whenever you patch something:

1. Is this signal meant to be heard?
2. Or is it meant to control another parameter?

That one distinction makes later generative patching much easier to understand.

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

For each one, note whether it acts as audio or control.
