---
title: "ePIC dRICH Beam Test Analysis Framework"
excerpt: "The C++ framework I built for the ePIC dRICH Cherenkov prototype — from raw SiPM data to collaboration-approved physics results.<br/><a href='https://github.com/Nikolajal/epic-drich-beam-test-analysis'>github.com/Nikolajal/epic-drich-beam-test-analysis</a>"
collection: portfolio
order: 1
---

This is the analysis framework I built and maintain for the **ePIC dRICH** beam test campaigns at the CERN PS. It's a fairly lightweight C++17 codebase, built on ROOT, that takes raw data straight out of the ALCOR front-end electronics and turns it into the numbers that get presented to the collaboration.

## How the data flows through it

Three stages, each with its own data model so you can stop anywhere and inspect what's going on:

1. **ALCOR → lightdata** — frame-based filtering, sorting hits into Cherenkov, timing, tracking, and trigger categories.
2. **lightdata → recodata** — Cherenkov ring reconstruction (DBSCAN or Hough transform), with optional track matching against the ALTAI telescope.
3. **Analysis macros** — dark count rates, photon yields, afterpulse treatment, ring spatial resolution. The reusable building blocks for whatever physics question we throw at it next.

## What it's built with

C++17, ROOT, CMake (3.16+), CLI11, toml++, MIST. Configuration lives in TOML files so the readout mapping, trigger logic, and sensor parameters can change without touching the code. clang-format is enforced through GitHub Actions. Full Doxygen docs.

## Why it matters

The dRICH is the first SiPM-based Cherenkov detector built for a collider experiment, and this framework turns its raw electronics output into the analysis results presented to the collaboration. It processed the first Cherenkov rings recorded with the prototype at the CERN PS in October 2023, and the beam-test data ever since.

## Have a look

- [Repository on GitHub](https://github.com/Nikolajal/epic-drich-beam-test-analysis)
