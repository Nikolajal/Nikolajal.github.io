---
title: "sort — a sorting-algorithm visualiser"
excerpt: "A small, dependency-free web app for watching classic sorting algorithms run, step by step. Built for fun and for teaching.<br/><a href='https://nikolajal.github.io/sort/'>Live demo</a> &nbsp;·&nbsp; <a href='https://github.com/Nikolajal/sort'>source</a>"
collection: portfolio
order: 6
---

A standalone web page where you can watch classic sorting algorithms do their thing. I built it partly as a teaching aid — when you're tutoring someone who's just met their first algorithm, "look, here's bubble sort actually being slow" is worth a thousand whiteboard explanations.

## What it does

Pick a starting distribution (random, reversed, nearly-sorted, …), choose an algorithm, and watch it run in real time — comparisons, swaps, and how the access pattern differs between something like insertion sort and a divide-and-conquer like merge sort. There's a step-by-step mode and an audio cue on every comparison, so you can *hear* the algorithm too.

## Built with

Pure HTML + CSS + JavaScript — no framework, no build step, no dependencies; the whole thing is a single `index.html`. Each algorithm is written as a **generator** that `yield`s at every step, which cleanly separates the sorting logic from the animation and lets the same code drive both auto-play and manual stepping.

- [Try it live](https://nikolajal.github.io/sort/)
- [Repository on GitHub](https://github.com/Nikolajal/sort)
