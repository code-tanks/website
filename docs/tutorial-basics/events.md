---
sidebar_position: 5
---

# Events

| Name | Info |
| --- | --- |
| tank_hit | Published when your tank hits a wall, bullet, or another tank |
| radar_scan | Published when radar comes in contact with a wall, bullet, or another tank |
| bullet_hit | Published when a bullet fired from your tank collides with a wall, a bullet, or another tank |


Here is the Event JSON specification
```json
{
    "collision_type": "string",
    "entity": "string",
    "transform": {
        "x": "float",
        "y": "float",
        "rotation": "float"
    },
    "velocity": {
        "linvel": {
            "x": "float",
            "y": "float"
        },
        "angvel": "float"
    }
}
```


## Collision Types

|  |
| --- |
| Bullet |
| Tank |
| Wall |
| Radar |
