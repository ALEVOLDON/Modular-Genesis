<div align="center">

# 🎛️ Modular Genesis

**Documentation-first project about modular synthesis, generative music, hybrid workflows, and audiovisual systems.**

[![Deploy Status](https://github.com/ALEVOLDON/Modular-Genesis/actions/workflows/deploy-pages.yml/badge.svg)](https://alevoldon.github.io/Modular-Genesis/)
[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://alevoldon.github.io/Modular-Genesis/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a9a4b8ad-af2e-40ad-be06-1e0c40eabad1/deploy-status)](https://modular-genesis.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[**🇬🇧 English Site**](https://alevoldon.github.io/Modular-Genesis/) | [**🇷🇺 Русский Сайт**](https://alevoldon.github.io/Modular-Genesis/ru/)

</div>

---

## 📖 What is Modular Genesis?

`Modular Genesis` is an open-source educational platform and patch library. It is designed to teach and document how to build complex, living musical systems using **VCV Rack**, **Ableton Live**, and various **visual engines**.

Instead of just providing downloadable patches, this project is built **documentation-first**: every patch is accompanied by theory, routing diagrams, and a dedicated lesson.

### 🎯 Key Focus Areas:
- 🎛️ **Modular Synthesis** (VCV Rack)
- 🎚️ **Hybrid Workflows** (VCV Rack + Ableton Live)
- 🎲 **Generative Patch Design** (Probability, logic, autonomous systems)
- 📡 **Audiovisual Systems** (Audio-reactive visuals, mapping, 3D Labs)

---

## 🗺️ Project Structure & Reference Guide

This repository is organized to act as both a **course platform** and a **source code repository**. Click on any link below to explore the codebase:

### 1️⃣ The Website (`/site`)
The core of the project is a statically generated site built with [Astro](https://astro.build/).
- 📂 [**`site/src/content/lessons/`**](./site/src/content/lessons/) — English lesson markdown files.
- 📂 [**`site/src/content/ru-lessons/`**](./site/src/content/ru-lessons/) — Russian lesson markdown files.
- 📂 [**`site/src/content/notes/`**](./site/src/content/notes/) — Architectural & conceptual notes.
- 📂 [**`site/src/content/patches/`**](./site/src/content/patches/) — Metadata for the patch library.

### 2️⃣ Patches & Assets (`/patches`, `/ableton`, `/visuals`)
The actual working files that the lessons teach you to build:
- 🎛️ [**`patches/`**](./patches) — `.vcv` files organized by learning track.
- 🎚️ [**`ableton/`**](./ableton) — Live sets, routing templates, and effect racks.
- 👁️ [**`visuals/`**](./visuals) — Blender models, Three.js experiments, and TouchDesigner networks.

### 3️⃣ System Documentation (`/docs`)
Deep-dive architectural documentation for contributors and advanced users:
- 🏗️ [**`PROJECT_STRUCTURE.md`**](./PROJECT_STRUCTURE.md) — Full repository layout and philosophy.
- 📸 [**`ARTIFACT_WORKFLOW.md`**](./docs/ARTIFACT_WORKFLOW.md) — Guide on how to add new patches, audio demos, and screenshots.
- 🗺️ [**`docs/diagrams/`**](./docs/diagrams) — Source files for system routing diagrams.

---

## 🛤️ Learning Tracks

The curriculum is divided into five logical layers. Each layer builds upon the previous one, shifting the system from individual modules to a complete performance organism.

| Track | Description | Key Concepts |
|---|---|---|
| **1. Foundations** | The basic vocabulary of voltage. | CV vs Audio, Oscillators, Envelopes, LFOs, VCA, Subtractive Synthesis. |
| **2. Sequencing** | Ordered motion and time. | Clocks, Triggers, Gates, Sequencers, Quantizers. |
| **3. Generative** | Autonomous, living systems. | Probability, Sample & Hold, Mutation, Slow Modulation, Feedback. |
| **4. Hybrid** | Connecting modular to the DAW. | VCV Rack + Ableton routing, Multichannel Recording, MIDI Control. |
| **5. Audiovisual** | Real-time visual response. | Audio-reactive visuals, OSC/MIDI mapping, Scene design. |

---

## 🛠️ Local Development

Want to run the site locally or contribute?

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

### Setup
```bash
# Clone the repository
git clone https://github.com/ALEVOLDON/Modular-Genesis.git
cd Modular-Genesis/site

# Install dependencies
npm install

# Start the development server
npm run dev
```
The site will be available at `http://localhost:4321`.

### Building for Production
```bash
npm run build
```
This generates the static files into `site/dist/`.

---

## 🚀 Deployment

The site is configured for continuous deployment on two platforms:
- **Netlify**: Deploys automatically via `netlify.toml`. Available at [modular-genesis.netlify.app](https://modular-genesis.netlify.app).
- **GitHub Pages**: Deploys automatically via GitHub Actions (`.github/workflows/deploy-pages.yml`). Available at [alevoldon.github.io/Modular-Genesis](https://alevoldon.github.io/Modular-Genesis/).

---

## 🤝 Current Status & Missing Pieces

`Modular Genesis` is currently at **v0.1**. It is a strong foundation, but there is work to be done before a full 1.0 release:

- [ ] Replace placeholder `.vcv` files with production-ready generative patches.
- [ ] Add screenshots, audio demos, and visual captures for every patch.
- [ ] Complete lesson content for advanced tracks (Hybrid & Audiovisual).
- [ ] Develop the WebGL `3D Lab Concept` (see notes).

---

## 📄 License

This repository is released under the **MIT License**. You are free to use, modify, and distribute the code, patches, and documentation. See the `LICENSE` file for details.
