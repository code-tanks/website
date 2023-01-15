---
sidebar_position: 1
---

# Game Engine Protocol

Each tick consists of 4 steps:
1. request_commands()
```
# pseudocode for request_commands()
for t in tanks:
    if t.commands.is_empty():
        t.commands = t.request_commands()
```

2. apply_commands()
```
# pseudocode for apply_commands()
for t in tanks:
    system.apply_command(t.pop())
```

3. apply_physics()
```
# pseudocode for apply_physics()
for t in tanks:
    t.events = system.check_collisions(t)
```

4. publish_events()
```
# pseudocode for publish_events()
for t in tanks:
    for e in t.events:
        t.commands.extend_front(t.request_commands_by_event(e))
```
