---
title: "SiPM Characterisation for ePIC"
excerpt: "ROOT/C++ macros, Python DAQ and a Geant4 simulation for characterising the dRICH SiPMs — IV, DCR, gain, timing, PDE, irradiation.<br/><a href='https://github.com/Nikolajal/sipm-characterisation'>github.com/Nikolajal/sipm-characterisation</a>"
collection: portfolio
order: 2
---

The single home for the **SiPM characterisation** behind the ePIC dRICH — the lab work most of my research is built on. It consolidates, organised by *measurement type*, what used to be scattered across a handful of one-off repositories.

## What's inside

- **Electrical / dark characterisation** — IV curves, dark-count rate (DCR), gain, breakdown voltage (`Vbd`), threshold scans, and their temperature / annealing dependence.
- **Complementary measurements** — laser-based timing and photon-detection efficiency (PDE), ALCOR µ-readout fine-tune calibration and noise, slew-rate / TDC studies.
- **Acquisition** — Keithley source-meter DAQ scripts, kept next to the analysis they feed.
- **Irradiation modelling** — a Geant4 NIEL simulation for the radiation-damage studies.

Each top-level directory is one measurement or stage: they share sensors and conventions but otherwise run independently, so the whole characterisation chain lives in one versioned tree.

## Built with

ROOT / C++ for the analysis, Python for the DAQ, Geant4 for the irradiation modelling. Full documentation is published at <https://nikolajal.github.io/sipm-characterisation/>.

- [Repository on GitHub](https://github.com/Nikolajal/sipm-characterisation)
- [Documentation](https://nikolajal.github.io/sipm-characterisation/)
