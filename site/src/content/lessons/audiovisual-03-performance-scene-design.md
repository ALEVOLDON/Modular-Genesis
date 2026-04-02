---
title: "Lesson 03: Performance Scene Design"
summary: "Turn disparate layers: modular generative sound, DAW routing, and the visual engine — into a single coherent, optimized live scene."
track: "audiovisual"
order: 3
---

## What You Will Learn

By the end of this lesson, you should understand:

- what "scene infrastructure" and interface dramaturgy are
- why architectural clarity is more important than technical gimmicks
- how to distribute computer power between Audio and Visual tasks
- how to create "safe controllers" on stage
- what an overload-free Live setup looks like (CPU/GPU)

## Theory

Performance design is the culmination and the final layer where all the knowledge gained during the modules comes together:

- **Generative** — self-running processes, randomness, and probability
- **Foundations** — basic synthesis (filters, envelopes, LFOs)
- **Hybrid** — multi-channel audio routing to a DAW and MIDI synchronization
- **Audiovisual** — visual response and data transmission (OSC / MIDI)

When all this works harmoniously and is ready to be performed in real-time, we call it a "Live Scene".

## Structure of an Optimized Scene

A working (stable) scene is rarely a "mess" of plugins. It has a clear division of roles:

1. **A Single Synchronization Source (Master Clock):**
Usually, a DAW (Ableton) or a hardware sequencer sets the tempo (BPM) and sends Play/Stop commands to all other nodes (visuals and the virtual modular).

2. **An Evolving Generative Engine (VCV Rack):**
A patch that generates the core of the track autonomously but allows you to manipulate its timbre.

3. **Mixing and Effects Layer (Post-Effects in DAW):**
Return audio channels to the DAW, distributing them into subgroups (Kick, Bass, Textures) to balance volumes and apply compressors, delays, and reverbs.

4. **A Calibrated Visual Layer:**
Receives OSC/CV signals from the sound core and reacts only where necessary, without overloading the graphics card.

5. **Performance Controls (Performance Desk):**
A physical MIDI controller on the desk with a few "Macro knobs" to control the most prominent parameters of the system.

## Why It Matters

Without a structured scene design, a patch might be interesting on paper, but **unfit for a live performance**.

In the dark of a club, under pressure, you won't be able to open modules on the screen and connect virtual cables with a mouse. You must control the music like a ship's captain: via a few grouped knobs (faders) that produce a powerful musical/creative result. This is called a "safe performance interface".

## Power Distribution and CPU Stability

An audiovisual performance is an incredible stress test for a laptop: generative calculations hit the CPU (processor), while graphics load the GPU (video card). An on-stage crash means an interrupted show.

**Rules for Playing Live:**
- Keep only 4-5 key generative voices live. Other background atmospheres are better rendered (Freeze/Flatten/Bounce) into an audio file.
- No Wi-Fi or background apps.
- Optimize graphics: complex particle systems are better limited by the number of emitters in favor of smoothness (60 FPS is more important for stability than photorealism).

## Typical Beginner Mistakes

### Mistake 1: Trying to control everything
"Let me map *the entire* patch onto this 64-button panel." On stage, due to stress, you will forget 90% of your mapping. Use a maximum of 4-8 physical control elements, but make sure each of them (the macros) produces a tectonic shift in the sound or visuals.

### Mistake 2: No way back
You crank up the Delay Feedback and Distortion to the max (an epic drop!). But how do you return everything to a clean, pulsing rhythm? Beginners often forget where the knobs were originally set. In Ableton or MIDI scripts, always configure a return to a "zero/quiet scene". Bind an instant disable for aggressive effects to an "undo button".

## Practice

Your final assignment for this part of the course:
Sketch the architecture of your future live audiovisual scene on a virtual whiteboard (or paper). Write down 4 blocks:

1. **Synchronization layer:** Indicate which application dictates the tempo.
2. **Sound engine:** What voices are sounding from the modular (dry)?
3. **Virtual and physical controllers:** Which 4 knobs are responsible for changing the mood (e.g., Density, Reverb Send, Filter Cut, Pitch Glide).
4. **Visuals and Transport:** What is the name of the graphics software, and what protocol do you use to transmit data from the sound to it?

## Bonus Exercise

**Generative Stress Test:**
Imagine the worst — your MIDI controller suddenly disconnects via USB. Will your patch "survive" and continue to play autonomously using generative algorithms for another 2-3 minutes while you restart the connection? If the music collates into a single screeching note without the controller, the patch is too dependent on human hands. A good generative system always breathes on its own.

## Finale

Congratulations! You have mastered the core concepts of building modern audiovisual environments: from cables and oscillators to preparing a full-fledged multimedia live scene. Now it's time to experiment!
