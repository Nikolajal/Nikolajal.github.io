---
title: "mist-hep — ROOT-backed analysis helpers on top of mist"
excerpt: "Sibling C++ library to mist, layering ROOT/RooFit on mist's primitives for physics analysis.<br/><a href='https://github.com/Nikolajal/mist-hep'>github.com/Nikolajal/mist-hep</a>"
collection: portfolio
order: 5
---

A clean-room sibling to [mist](https://github.com/Nikolajal/mist): where mist provides dependency-free C++ infrastructure built on the standard library, **mist-hep** layers ROOT and RooFit on top of those primitives to give reusable building blocks for physics analysis.

## Why a sibling, not a wrapper
mist deliberately stays free of heavy dependencies; mist-hep is where the ROOT/RooFit-specific helpers live, so the core utilities remain usable on their own and the analysis layer stays cleanly separated.

## Built with
C++ (C++17/20), ROOT, RooFit, CMake — full Doxygen docs at <https://nikolajal.github.io/mist-hep/>. MIT-licensed.

- [Repository on GitHub](https://github.com/Nikolajal/mist-hep)
