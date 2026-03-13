export const tracks = [
  {
    key: "foundations",
    title: "Foundations",
    description: "Start with signal flow, modulation basics, and first sound design patches.",
    roadmapTopics: [
      "CV vs audio",
      "oscillator, filter, VCA",
      "envelopes and LFOs",
      "first subtractive patches"
    ]
  },
  {
    key: "sequencing",
    title: "Sequencing",
    description: "Move from static sound into clocked motion, rhythm, and tonal control.",
    roadmapTopics: [
      "clock, trigger, gate",
      "sequencers and quantizers",
      "melodic and rhythmic motion",
      "probability as structure"
    ]
  },
  {
    key: "generative",
    title: "Generative",
    description: "Build systems that change over time using probability, mutation, and feedback.",
    roadmapTopics: [
      "sample and hold",
      "Turing-style mutation",
      "feedback and slow modulation",
      "self-playing ambient systems"
    ]
  },
  {
    key: "hybrid",
    title: "Hybrid",
    description: "Connect VCV Rack to Ableton Live for routing, recording, and arrangement.",
    roadmapTopics: [
      "VCV Rack + Ableton",
      "virtual audio routing",
      "multichannel recording",
      "MIDI controller workflows"
    ]
  },
  {
    key: "audiovisual",
    title: "Audiovisual",
    description: "Map sound behavior into visuals and performance-oriented output systems.",
    roadmapTopics: [
      "OSC and MIDI visual control",
      "audio-reactive graphics",
      "Blender / Three.js / TouchDesigner",
      "live performance architecture"
    ]
  }
] as const;

export const trackLabelMap = Object.fromEntries(
  tracks.map((track) => [track.key, track.title])
) as Record<(typeof tracks)[number]["key"], string>;
