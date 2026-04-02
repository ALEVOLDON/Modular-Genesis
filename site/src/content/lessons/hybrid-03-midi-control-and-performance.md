---
title: "Lesson 03: MIDI Control And Performance"
summary: "Connect keyboards and controllers to the modular system for live interaction, macro control, and expressive performances."
track: "hybrid"
order: 3
---

## What You Will Learn

By the end of this lesson, you should understand:

- how to transmit not only notes but modulation signals (CC, Velocity, Aftertouch)
- why you need "macro-controllers" in a modular patch
- how to prepare a patch for a live performance
- how to balance generative processes and manual control
- how to avoid chaos when routing multiple MIDI signals

## Main Idea

The hybrid approach means not only audio routing, but also *control* routing.

A self-running (generative) system is beautiful, but it becomes much more musical when a performer can intervene at the right moment:
- open the filter of a rising sequence
- change the density of events
- transpose the entire harmony
- trigger a structural transition or breakdown

MIDI in a modular environment is the bridge between your hands and the mathematical (generative) processes of the patch.

## Why It Matters

Many beginners build a patch that sounds great only in one specific "here and now" state. As soon as they try to change something on the fly, the music falls apart.

Thoughtful MIDI control allows you to:
1. Create *safe zones* for improvisation.
2. Perform changes synchronously and expressively.
3. Have tactile control (turning physical knobs and pressing keys) instead of using a mouse.

## The Main Principle

Do not map everything.

If you have a MIDI controller with 16 knobs, you don't need to assign each one to the first parameter you see.

Choose those parameters that have the greatest compositional or timbral importance. The best mapping controls not a single parameter, but a *change of state* of the entire system.

## Types of MIDI Control in a Modular Environment

### 1. Notes & Gates
This is the basic control of a monophonic or polyphonic voice, like on a regular synthesizer:
- `V/Oct` (Volts per octave): controls the oscillator's pitch.
- `Gate`: opens envelopes and triggers the VCA.

### 2. Continuous Modulation (CC - Continuous Controllers)
Assigning faders or knobs of a hardware controller to the `CV` input of a module.
This allows you to smoothly change parameters: filter cutoff, envelope decay length, delay feedback level.

### 3. Expressiveness (Velocity & Aftertouch)
Pressing force (Velocity) and pressure on a held key (Aftertouch) can be used as deep modulation sources:
- Velocity is often assigned to note brightness (Filter Cutoff).
- Aftertouch is great for adding vibrato (LFO Amount) or introducing noise/overdrive.

### 4. Transport (Clock & Transport)
Using the Play/Stop buttons of a sequencer or DAW to trigger macro-events in the patch and maintain tempo synchronization. We will discuss the concept of hybrid synchronization in detail in the Sequencer section.

## Macro Architecture

Instead of having one knob control one parameter, use the concept of "macros" - where one movement changes multiple processes at once.

Example of a useful "Build-Up" macro:
- Increases Decay on hi-hats (makes them busier)
- Opens Filter Cutoff on the bass (adds aggression)
- Increases Dry/Wet on the reverb
- Speeds up the LFO controlling panning

All these changes happen from *one* physical turn of your MIDI controller knob!

## Simple Routing Model

In VCV Rack or when using hardware modules like "MIDI to CV", the basic mapping scheme looks like this:

```text
MIDI Keyboard -> [MIDI to CV module] 
   -> V/Oct -> Oscillator Pitch
   -> Gate  -> Envelope Trigger
   -> Mod (CC 1) -> Filter Cutoff
```

## Typical Beginner Mistakes

### Mistake 1: Mapping without attenuators
If you tie a MIDI knob directly to the oscillator's Pitch, a random movement will radically detune the entire system. Always use attenuators (Attenuverters) between the MIDI-CV module and the receiver parameter to limit the depth of modulation.

### Mistake 2: Forgetting about Scale & Offset
MIDI outputs values from 0 to 127, which is usually converted to a format from 0 to 10V (or 0..5V). If a parameter needs a signal that goes deep into negative territory (e.g., from -5V to +5V), you'll need to add an Offset before feeding it into the module.

### Mistake 3: Conflict between manual control and automation
Sometimes a patcher "maps" a physical knob to a regulator inside a module that *already* has an LFO cable connected to it. A conflict arises: values "jump" between what the LFO dictates and what the MIDI controller sends. Try to separate manual and automatic control by summing them through a CV Mixer.

## Practice

1. Connect any MIDI controller (hardware or virtual from your DAW) to your current patch via a "MIDI to CV" module.
2. Assign the modulation wheel (Mod Wheel / CC 1) to simultaneously control two parameters (e.g. Filter Cutoff on the bass and Delay Feedback on a structural pad).
3. Use an attenuator so that the modulation wheel changes these parameters by only 20%, adding color rather than destroying the sound.
4. Play with the patch and notice how a single controller movement radically refreshes the static sound.

## Bonus Exercise

Try using `Velocity` (key pressing force) for routing to the Decay Time of the envelope of your percussive element (kick or snare). The harder you press, the longer the "tail". Compare this feeling with a regular fixed Decay. How much "more alive" has the groove become?

## Next Connection

Once we understand how to control sound using external events and macros, the next logical step is audiovisual integration. The same control signals that open a filter can expand the geometry of graphics.
