---
title: "Lesson 01: Clock, Trigger, Gate"
summary: "Learn the timing logic behind modular sequencing by understanding clock pulses, triggers, and gates as different control events."
track: "sequencing"
order: 1
---

## What You Will Learn

By the end of this lesson, you should understand:

- what a clock does in a modular system
- how a trigger differs from a gate
- why these signals are not interchangeable even if they can look similar in a patch
- how timing signals control envelopes, sequencers, and note behavior
- how to patch a simple test that makes the difference audible

## Core Idea

Before melody, rhythm, variation, or generative structure, a modular system needs timing.

It needs a way to answer questions like:

- when does the next step happen?
- when should an envelope fire?
- how long should a note remain active?

Three of the most important timing signals are:

- clock
- trigger
- gate

These are not sound sources. They are control events that organize behavior in time.

## Why This Matters

If you do not understand these signals, sequencing can feel mysterious very quickly.

You may patch a sequencer and see lights moving, but not know:

- why a note retriggers
- why a sound stays open
- why a pattern advances correctly but the articulation feels wrong

Once `clock`, `trigger`, and `gate` become clear, modular sequencing stops feeling like magic and starts feeling like signal logic.

## Clock: Repeated Time Pulse

A clock provides regular timing pulses.

Its job is not to describe pitch or timbre. Its job is to create a repeating time reference that other modules can follow.

Typical uses include:

- advancing a sequencer
- driving clock dividers or multipliers
- synchronizing modulation
- keeping rhythmic structures aligned

A clock answers this question:

- when does the next unit of time begin?

## Trigger: Short Event Signal

A trigger is a very short pulse used to start an event.

It is often used for:

- firing an envelope
- striking a drum voice
- resetting or advancing a module
- causing a one-time response

A trigger is about the start of something, not its duration.

A trigger answers:

- should something happen right now?

## Gate: Duration-Based Signal

A gate stays high for a length of time.

That makes it useful when duration matters.

Typical uses include:

- holding a note open
- sustaining an envelope
- keeping a `VCA` or logic state active
- defining how long an event remains present

A gate answers:

- how long should this event stay active?

## Trigger Vs Gate

This is the distinction that matters most:

### Trigger

- very short
- starts an event
- useful for retriggering

### Gate

- has a duration
- keeps something active
- useful for sustained behavior

In practice, a trigger can begin a note, but a gate often determines how long the note is held.

## A Simple Mental Model

You can think of the three signals like this:

- clock = repeating pulse of time
- trigger = a momentary command
- gate = a held condition

This is not a full technical definition, but it is a very useful working model.

## Basic Patch Example

A simple patch might look like this:

```text
Clock -> Sequencer step advance
Trigger -> Envelope trigger
Gate -> Sustained note behavior
Pitch CV -> Oscillator pitch
Envelope -> VCA level
```

Here the roles are separated:

- the clock moves the sequence forward
- the trigger starts a contour
- the gate determines whether the note is held

This is why timing feels musical instead of random.

## How To Hear The Difference

If you use a short trigger to fire an envelope, you often hear:

- a brief articulation
- a sharp attack
- a note that does not remain held unless the envelope itself is long

If you use a gate with visible duration, you often hear:

- a note that can remain open
- a sustained shape
- a stronger connection between performance timing and note length

This is one of the first big sequencing lessons: timing is not only about when something starts, but also about how long it lives.

## Where These Signals Commonly Go

### Clock Destinations

- sequencer clock input
- clock divider
- trigger generator
- synchronized modulation source

### Trigger Destinations

- envelope trigger input
- drum module trigger input
- reset input

### Gate Destinations

- envelope gate input
- sustained `VCA` logic
- note hold behavior

Recognizing these destinations makes patch reading much easier.

## Common Beginner Mistakes

### Mistake 1: Treating trigger and gate as the same thing

They are related, but they do different jobs. If you confuse them, the articulation of the patch can feel wrong even when the rhythm looks correct.

### Mistake 2: Thinking the clock is "the rhythm itself"

The clock is only a reference pulse. Rhythm appears when that pulse is divided, skipped, transformed, or interpreted by other modules.

### Mistake 3: Blaming the oscillator for articulation problems

Very often the issue is not pitch or tone. It is the timing behavior of the control signals.

### Mistake 4: Not tracing signal roles separately

A strong habit is to ask:

- what advances time?
- what starts the event?
- what holds the event?

That question makes sequencing systems much easier to understand.

## Practice

Patch one voice and compare two behaviors:

1. Short trigger behavior
2. Longer gate behavior

Use the same oscillator, filter, and `VCA` if possible.

Then listen for:

- how quickly the note fires
- whether the note feels struck or held
- whether the articulation changes even when the pitch stays the same

## Extra Exercise

Take one clock source and build three small tests:

- clock directly advancing a sequencer
- trigger firing an envelope
- gate holding the same envelope longer

Then write one sentence for each:

- what starts the event?
- what keeps it going?
- what would change if the pulse became shorter or longer?

## Next Connection

Once `clock`, `trigger`, and `gate` are clear, the next step is sequencing actual pitch material.

That is where sequencers and quantizers start turning timing structure into musical note patterns.
