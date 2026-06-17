---
title: "mist — dependency-free C++ infrastructure toolkit"
excerpt: "A lightweight, dependency-free C++20 library of utilities I keep reusing across projects — the seed that ends up inside most of my other code.<br/><a href='https://github.com/Nikolajal/mist'>github.com/Nikolajal/mist</a>"
collection: portfolio
order: 4
---

mist started as the "I keep rewriting these same utilities" problem. Every time I began a new project I'd rebuild the same handful of small tools — a random-number wrapper, a coloured logger with progress bars, a Hough transform for ring finding. So I pulled them out into one place and gave them a proper home, with zero dependencies beyond the standard library.

## What's in the box

- **`mist::rnd`** — a tidy wrapper around the C++ standard `<random>` facilities, with the distribution methods I actually use day to day.
- **`mist::logger`** — a coloured terminal logger with progress bars, level filtering, and ANSI output.
- **`mist::ring_finding::hough_transform`** — a circular Hough transform for ring detection in detector data (the workhorse behind dRICH reconstruction).

## Design choices

- **C++17**, CMake 3.14+.
- **Zero external dependencies** beyond the standard library — drop it into anything without dragging in ROOT or Boost.
- MIT licensed.

It's the library that gets `FetchContent`-pulled into [the dRICH analysis framework](/portfolio/epic-drich-beam-test-analysis/), and the foundation that [mist-hep](/portfolio/mist-hep/) layers ROOT and RooFit on top of.

- [Repository on GitHub](https://github.com/Nikolajal/mist)
