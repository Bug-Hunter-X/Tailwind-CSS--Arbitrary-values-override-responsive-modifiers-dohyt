# Tailwind CSS Bug: Arbitrary Values Override Responsive Modifiers

This repository demonstrates an uncommon bug in Tailwind CSS where explicitly setting a style (e.g., `margin`) overrides responsive modifiers (@apply) when the screen size is smaller than the responsive modifier's breakpoint.

## Bug Description
The bug occurs when using arbitrary values for CSS properties that are also controlled by Tailwind's responsive modifiers.  The explicit value overrides the responsive modifier's value for smaller screens.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` to see the example code.
3. Observe how the `margin` is overridden.

## Solution
The solution is to ensure that all your styles are either directly managed by Tailwind CSS using its utility classes or through a consistent system that respects the Tailwind CSS cascade.