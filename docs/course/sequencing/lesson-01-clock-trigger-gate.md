# Lesson 01: Clock, Trigger, Gate

## Theory

Before melodies and generative behavior, a modular system needs time structure.

Three key concepts:

- clock
- trigger
- gate

### Clock

The clock provides repeated timing pulses.

### Trigger

A trigger is a short pulse, often used to start an event.

### Gate

A gate stays high for a duration, which makes it useful for sustaining envelopes or notes.

## Why This Matters

Generative systems are not random collections of modules. They are time-based systems.

Without clocked events, mutation and sequencing have no stable frame.

## Patch Idea

```text
Clock -> Sequencer step advance
Trigger -> Envelope trigger
Gate -> Sustained note behavior
```

## Practice

Patch one voice and compare:

1. short trigger behavior
2. longer gate behavior
3. faster and slower clock divisions
