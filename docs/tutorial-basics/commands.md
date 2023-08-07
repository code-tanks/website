---
sidebar_position: 4
---

# Commands

| Command | Value | Action | Limitations |
| --- | --- |  --- | --- |
| NONE | 0 | Nothing. This can be used to skip actions for a single tick |
| MOVE_FORWARD | 1 << 0 | Applies forward velocity | 100 meters / 60 ticks
| MOVE_BACKWARD | 1 << 1 | Applies backward velocity | -100 meters / 60 ticks
| ROTATE_TANK_CLOCKWISE | 1 << 2 | Applies clockwise angular velocity to the tank | PI * 0.3 / 60 ticks
| ROTATE_TANK_COUNTER_CLOCKWISE | 1 << 3 | Applies counter-clockwise angular velocity to the tank | -PI * 0.3 / 60 ticks
| FIRE | 1 << 4 | Fires the gun | Gun must cool down for 60 ticks before another FIRE command. Bullet is fired from the gun and moves at 200 meters / 60 ticks |
| ROTATE_GUN_CLOCKWISE | 1 << 5 |  Applies clockwise angular velocity to the gun | PI * 0.3 / 60 ticks
| ROTATE_GUN_COUNTER_CLOCKWISE | 1 << 6 |  Applies counter-clockwise angular velocity to the gun | -PI * 0.3 / 60 ticks
| ROTATE_RADAR_CLOCKWISE | 1 << 7 |  Applies clockwise angular velocity to the tank | PI * 0.3 / 60 ticks
| ROTATE_RADAR_COUNTER_CLOCKWISE | 1 << 8 |  Applies counter-clockwise angular velocity to the gun | -PI * 0.3 / 60 ticks
| LOCK_GUN | 1 << 9 | Locks the gun. If gun is locked, it will rotate along with any tank rotation |
| UNLOCK_GUN | 1 << 10 | Unlocks the gun. If gun is unlocked, the gun will not rotate with tank rotation |
| LOCK_RADAR | 1 << 11 | Locks the radar. If the radar is locked, it will rotate along with any gun or tank rotation |
| UNLOCK_RADAR | 1 << 12 | Unlocks the radar. If the radar is unlocked, it will not rotate with gun or tank rotation |