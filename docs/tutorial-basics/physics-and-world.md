---
sidebar_position: 3
---

# Physics & World

## Coordinates & Directions
### Coordinate System

Code Tanks uses a right-handed Y-up coordinate system for the game world.

It is easiest to explain in terms of 2D:

The X axis goes from left to right (+X points right).
The Y axis goes from bottom to top (+Y points up).
The origin (X=0.0; Y=0.0) is at the center of the screen.

### Rotational System

Code Tanks uses a counter-clockwise direction convention in radians:
- North = 0 & 2𝜋
- East = 3𝜋/2
- South = 𝜋
- West = 𝜋/2

## Time and distance
### Time measurement
Code Tanks time is measured in "ticks". Each tank gets one turn to apply any commands they wish.

### Distance measurement
Code Tanks uses floating point numbers to make partial movements. For example, the tank can move at 100 meters / 60 ticks, which is ~1.667 meters per tick.

## Damage
### Bullets
10

## Collisions
### Walls
10
### Tanks
10