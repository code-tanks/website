---
sidebar_position: 1
---

# Your First Tank

# Basics
For the purpose of simplicity we will use the [python](https://github.com/code-tanks/python-template) template of Code-Tanks. If you prefer any other language, please follow the README.md in it's template repository.

Clone the repository and open the folder in a [VSCode container](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-an-existing-folder-in-a-container).

Open the file `tanks/my_tank.py`. This is the file that you will be editing to create your tank. You may create as many tank files as you wish, however your file must follow some basic requirements. These are usually the imports at the top of the file, the run() and onEvent() tank methods, and the createTank() method that returns a instance of your tank.

Here is an example of a basic spinning tank in Python
```py title="spin_bot.py"
"""Python spinning tank
"""

from codetanks import BaseTank, commands


class MyTank(BaseTank):
    """Simple Python spinning tank
    """

    def __init__(self):
        super().__init__()

        self.direction = 0

        print('Running my spinning tank!')

    def run(self):
        if self.direction % 2 == 0:
            self.commands.append(commands.MOVE_BACKWARD | commands.ROTATE_TANK_COUNTER_CLOCKWISE | commands.FIRE)
        else:
            self.commands.append(commands.MOVE_FORWARD | commands.ROTATE_TANK_CLOCKWISE | commands.FIRE)

    def on_event(self, event):
        self.direction = self.direction + 1

def create_tank():
    """Return an instance of your tank
    """
    return MyTank()
```

This a basic tank that spins and fires. Upon any event, it will spin in the opposite direction. For more details, check out [Anatomy](anatomy.md), [Physics & World](physics-and-world.md), [Commands](commands.md), [Debugging](debugging.md), [Events](events.md), and [Game Engine Logic](game-engine-logic.md).

# Building

To upload your code
```bash
./scripts/upload_tank.sh my_tank.py
```
This will output the tank_id for your code. To check the build status of your tank, run
```bash
./scripts/get_build_log.sh YOUR_TANK_ID
```
This will output the build log for your code, otherwise it will return "building".

# Running (Web)
```bash
./scripts/run_simulation.sh YOUR_TANK_ID ANOTHER_TANK_ID ETC_TANK_IDS
```
You may enter multiple tank ids as well as duplicate tank ids. To check the status of the simulation, simply run the same command.
Then visit http://localhost:8088/YOUR_TANK_ID-ANOTHER_TANK_ID-ETC_TANK_IDS to view the simulation.

# Running (Desktop)
```bash
cargo run --bin ctdesktop YOUR_TANK_ID ANOTHER_TANK_ID ETC_TANK_IDS
```
You may enter multiple tank ids as well as duplicate tank ids.
