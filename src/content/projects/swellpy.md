---
title: SwellPy
github: https://github.com/nproctor/swellpy
tags: ['python', 'anaconda', 'matplotlib', 'numpy', 'cython']
---

Liquid suspensions of particles that are sheared back and forth repetitively will organize and “adapt” to
that shearing so long as its amplitude is below some critical value. This organization creates a memory
in the system that can later be “read out” by observing how many particles are perturbed by a given
shear. By partially training the system on multiple shears, multiple memories can coexist. However, by
introducing progressively larger memories, the system “forgets” memories at smaller amplitudes. The
connection between the system’s ability to learn multiple memories and its behavior near the critical
amplitude is unclear. We present a model that allows us to efficiently study this behavior. In place of shear, particles swell to a given amplitude, and overlapping particles are
repelled. This process repeats while the system is monitored. The critical amplitude for these systems
corresponds to the densest packing of disks.

|No Memory|Partial Memory|Full Memory|
|------------|-------------|--------------|
|<img width="200" height="200" src="/untrained.png"/>|<img width="200" height="200" src="/partiallyTrained.png"/>|<img width="200" height="200" src="/fullyTrained.png"/>|

