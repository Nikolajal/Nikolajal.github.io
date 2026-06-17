---
title: "Cherenkov fast Monte Carlo"
excerpt: "A ROOT-backed C++20 fast Monte Carlo for Cherenkov light — particles through radiators, Frank–Tamm photon yield, propagation to detection. Built on mist + mist-hep.<br/><a href='https://github.com/Nikolajal/Cherenkov_quick_mc'>github.com/Nikolajal/Cherenkov_quick_mc</a>"
collection: portfolio
order: 3
---

A small **Cherenkov fast Monte Carlo**: it shoots charged particles through optical radiators (e.g. aerogel), emits Cherenkov photons via a simplified Frank–Tamm yield, and tracks them through absorption, scattering and reflection until they are detected or lost.

## Why it exists

A light, fast way to reason about dRICH-style optics — radiators, photon yields, ring formation — without spinning up a full Geant4 stack. Handy for quick what-if studies.

## Built with

A ROOT-backed **C++20** static library built directly on my own two libraries: [mist](/portfolio/mist/) (logger, utilities) and [mist-hep](/portfolio/mist-hep/) (ROOT helpers, process-wide RNG). All textual output goes through `mist::logger`; all randomness is drawn from `mist::hep::rng()`. Cleanly namespaced (`cherenkov_mc::…`), with compiled examples and a `ctest` suite.

- [Repository on GitHub](https://github.com/Nikolajal/Cherenkov_quick_mc)
