---
title: "Lesson 03: First Subtractive Patch"
summary: "Build a complete first subtractive voice and understand how oscillator, filter, envelope, and VCA work together."
track: "foundations"
order: 3
---

## What You Will Learn

By the end of this lesson, you should understand:

- how to build a complete first subtractive patch from scratch
- why the `oscillator -> filter -> VCA -> output` model is so durable
- where the envelope fits into the patch and what it controls
- how timbre and loudness interact but remain separate functions
- how to turn one simple voice into multiple musical variations

## Core Idea

Subtractive synthesis begins with a signal that already contains harmonic content and then shapes that signal by removing, emphasizing, or controlling parts of it over time.

In modular terms, the classic beginner voice looks like this:

```text
Oscillator -> Filter -> VCA -> Output
Envelope -> VCA level
```

This is one of the most important patch models in the whole project.

It teaches the difference between:

- source
- tone shaping
- amplitude control
- final output
- time-based control through an envelope

Once this patch becomes clear, many later systems stop feeling abstract.

## Why This Patch Matters

Even when later patches become more complex, the logic of this voice usually still exists somewhere inside them.

A generative patch may contain multiple layers, modulation paths, probability tools, and routing tricks, but somewhere in the system there is still usually:

- something producing sound
- something shaping tone
- something controlling presence or loudness
- something determining when the sound appears

That is why this lesson matters so much. It is not just a beginner exercise. It is a durable mental model.

## The Main Signal Path

The base subtractive chain is:

```text
Oscillator -> Filter -> VCA -> Output
```

Each block answers a different question.

### Oscillator

The oscillator creates the raw material.

For this lesson, choose a waveform with enough harmonic content to make filtering obvious:

- saw wave
- pulse wave
- square wave

A pure sine wave can work, but it teaches less about subtractive shaping because there is less harmonic material to remove.

### Filter

The filter shapes the tone.

A low-pass filter is the clearest starting point because it lets you hear how brightness changes as you move the cutoff downward.

The filter answers:

- how bright or dark should this voice feel?

### VCA

The `VCA` controls level.

It does not only set volume in a static way. In a musical patch, it is usually the point where an envelope gives shape to the sound over time.

The `VCA` answers:

- when does the sound appear and how does it fade?

### Output

The final stage sends the signal out of the patch so it can actually be heard.

Without this stage, the patch may be logically correct but still silent.

## Where The Envelope Belongs

The envelope is the control layer that turns the subtractive voice into something playable.

A minimal playable version looks like this:

```text
Oscillator -> Filter -> VCA -> Output
Envelope -> VCA level
Gate/Trigger -> Envelope
```

Here the envelope is not audio. It is a control shape.

It tells the `VCA` how the sound should evolve after a note or trigger happens.

This is the moment where the previous lesson becomes practical:

- oscillator path is audio
- envelope path is control

## Basic Patch Steps

Build the patch in this order:

1. Add an oscillator and choose a harmonically rich waveform.
2. Send the oscillator into a filter audio input.
3. Send the filter output into the `VCA` audio input.
4. Send the `VCA` output to the final audio output module.
5. Add an envelope generator.
6. Send the envelope output to the `VCA` level or CV input.
7. Add a gate or trigger source so the envelope actually fires.

If the patch produces a sustained drone with no articulation, check whether the `VCA` is being controlled correctly.

If the patch is silent, check the signal path in order and verify every stage.

## What To Listen For

When the patch is working, listen for these separate dimensions:

### Source Character

How does the waveform sound before the filter touches it?

### Brightness

How much does the filter change the apparent energy and color of the sound?

### Shape In Time

Does the envelope make the sound sharp, soft, plucky, or sustained?

### Final Presence

Does the `VCA` make the sound feel controlled and intentional rather than simply "on" all the time?

This kind of listening is important. You are training yourself to hear the job of each stage.

## Add One More Layer: Envelope To Filter

Once the basic patch works, try this extension:

```text
Oscillator -> Filter -> VCA -> Output
Envelope -> VCA level
Envelope -> Filter cutoff
```

Now one envelope shapes both:

- loudness
- timbre

This makes the sound feel more alive because the brightness changes together with the amplitude contour.

That is one of the classic reasons subtractive synthesis feels expressive even with a small number of modules.

## Common Beginner Mistakes

### Mistake 1: Skipping the VCA logic

Beginners often patch oscillator to filter to output and wonder why the result feels unfinished.

Without the `VCA` being controlled, the sound often has no clear articulation.

### Mistake 2: Using a waveform with too little harmonic content

If you choose a very plain source, the filter may seem like it is doing almost nothing.

### Mistake 3: Moving everything at once

If you change waveform, cutoff, resonance, and envelope settings all together, it becomes hard to understand cause and effect.

### Mistake 4: Treating the filter as the whole patch

The filter is important, but subtractive synthesis is really about the interaction between source, shaping, and amplitude control.

## Practice

Build the patch and then create three variations:

1. Bass
2. Pad
3. Drone

For each version, write down:

- which waveform you used
- how open or closed the filter is
- whether the envelope is short or long
- what makes that version feel different from the others

## Extra Exercise

After making the three versions, keep the same patch structure and change only one variable at a time:

- waveform
- filter cutoff
- resonance
- attack
- release

This teaches an important discipline: change one dimension, then listen.

That is how you learn what each part of the voice is actually responsible for.

## Next Connection

The next lesson should expand this voice with envelopes and `LFO`s as separate modulation tools.

That is where the subtractive patch stops being only functional and starts becoming expressive.
