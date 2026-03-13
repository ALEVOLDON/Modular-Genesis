# Lesson 02: Sequencer And Quantizer

## Theory

A sequencer gives the patch ordered voltage changes over time.

A quantizer translates those voltages into discrete musical pitch values.

Together they form one of the most important musical chains in the whole project:

```text
Clock -> Sequencer -> Quantizer -> Voice pitch
```

## Why Quantization Is Essential

The raw notes emphasize quantizers because they turn modular voltage into musically usable material.

Without a quantizer:

- melodies may drift into arbitrary pitch
- random voltage becomes harder to control

With a quantizer:

- scale choices become clear
- mutation stays musical
- generative systems become more reliable

## Practice

Build a simple pitch chain and test:

1. one repeating 8-step melody
2. one melody in a minor scale
3. one version with a single step changed to hear structural impact
