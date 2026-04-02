---
title: "Lesson 04: Envelopes And LFO"
summary: "Understand the difference between one-shot shaping and repeating modulation, and use both to make a patch feel alive."
track: "foundations"
order: 4
---

## What You Will Learn

By the end of this lesson, you should understand:

- what an envelope does in a modular patch
- what an `LFO` does and how it differs from an envelope
- why both are time-based control sources but not interchangeable
- how to use envelopes for articulation and `LFO`s for motion
- how to combine both in one subtractive voice without losing clarity

## Core Idea

A patch becomes musical when parameters change over time.

Static tone can be useful, but once a sound has shape, contour, and movement, the patch begins to feel intentional rather than merely connected.

Two of the most important time-based control sources in modular synthesis are:

- envelopes
- `LFO`s

Both create change over time, but they do it in very different ways.

## Why This Matters

The previous lesson gave you a playable subtractive voice.

This lesson explains how that voice becomes expressive.

If you only understand oscillators, filters, and `VCA`s, you can make sound. If you understand envelopes and `LFO`s, you can make behavior.

That difference matters because later topics such as sequencing, generative motion, and performance control all depend on time-based modulation.

## Envelope: Event-Based Shape

An envelope responds to an event such as a gate or trigger and creates a contour over time.

It is usually used when you want a parameter to follow the shape of a note or gesture.

Typical uses include:

- controlling `VCA` level
- shaping filter cutoff during a note
- controlling effects depth at the start of an event

An envelope is not usually repeating on its own. It is typically tied to something happening.

## ADSR As A Practical Model

One of the most common envelope formats is `ADSR`:

- `Attack`: how quickly the signal rises
- `Decay`: how quickly it falls after the initial peak
- `Sustain`: the held level while the gate remains active
- `Release`: how quickly it fades after the gate ends

You do not need to memorize this as theory only. You should hear it as behavior.

For example:

- fast attack + short release can feel percussive
- slow attack + long release can feel soft or ambient
- high sustain can feel held and stable
- low sustain can make the sound drop away after the initial gesture

## LFO: Repeating Motion

An `LFO`, or low-frequency oscillator, creates repeating cyclic movement over time.

Unlike an envelope, it does not usually describe one event. It creates ongoing modulation.

Typical uses include:

- filter sweeps
- vibrato
- tremolo
- panning motion
- slow movement in texture or atmosphere

An `LFO` answers a different question from an envelope:

- not "how does this event evolve?"
- but "what keeps moving in the system?"

## Envelope Vs LFO

This is the distinction that matters most:

### Envelope

- usually tied to a note, gate, or trigger
- often one-shot behavior
- useful for articulation and response

### LFO

- usually free-running or clocked cyclic behavior
- repeating motion
- useful for animation and ongoing modulation

If you confuse the two, your patches may still work, but they will be harder to control deliberately.

## A Simple Combined Patch

A practical beginner example looks like this:

```text
Oscillator -> Filter -> VCA -> Output
Envelope -> VCA level
LFO -> Filter cutoff
Gate/Trigger -> Envelope
```

Here the roles are clear:

- the oscillator path is audio
- the envelope shapes loudness per event
- the `LFO` adds continuous motion to tone

This is a very strong beginner patch because each control source has a distinct job.

## How To Hear The Difference

If you want to train your ear, solo the effects of each control source mentally.

### Listen To The Envelope

Ask:

- does the sound hit quickly or slowly?
- does it stay open or fall away?
- does it end abruptly or fade naturally?

### Listen To The LFO

Ask:

- is something wobbling, pulsing, or breathing?
- is the movement fast or slow?
- is it subtle or obvious?

This way of listening matters because modular work improves when you can hear the role of each modulation source separately.

## Good Beginner Destinations

If you are unsure where to send these signals, start here.

### Good Envelope Destinations

- `VCA` level
- filter cutoff
- effects amount at note onset

### Good LFO Destinations

- filter cutoff
- oscillator pitch in small amounts
- `VCA` level for tremolo
- panning or spatial movement

These are not the only possibilities, but they are clear and educational.

## Common Beginner Mistakes

### Mistake 1: Using an LFO where an envelope should be used

If you want a sound to respond to a note event, an `LFO` often feels wrong because it keeps moving whether the note starts or not.

### Mistake 2: Using an envelope for continuous motion

If you want ongoing animation, a one-shot envelope may feel too static or too dependent on retriggering.

### Mistake 3: Modulating too deeply too early

Large modulation depth can hide the lesson. Start small so you can understand what the source is doing.

### Mistake 4: Changing rate and depth at the same time

If you adjust too many controls together, it becomes hard to hear what each one contributes.

## Practice

Using one subtractive voice, make two versions:

1. A short percussive sound
2. A long evolving sound

For the percussive version:

- use a fast envelope
- keep the movement focused and clear

For the evolving version:

- use a slower envelope
- add gentle `LFO` movement to the filter

Then write down:

- what the envelope is controlling
- what the `LFO` is controlling
- which change makes the sound feel more alive

## Extra Exercise

Take the same patch and test these variations one at a time:

- envelope to `VCA` only
- envelope to filter only
- `LFO` to filter only
- envelope to `VCA` plus `LFO` to filter

This exercise makes one thing very clear:

an envelope shapes events, while an `LFO` shapes motion.

## Next Connection

You now have the core foundations of a playable subtractive voice:

- source
- filter
- `VCA`
- envelope
- `LFO`

From here, the next logical expansion is sequencing and timing, where signals stop being only expressive and start becoming structured in rhythm and pitch.
