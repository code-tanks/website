---
sidebar_position: 1
---

# Spin Bot

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="code-tanks-language">
<TabItem value="py" label="Python">

```py title="spin_bot.py"
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

</TabItem>
<TabItem value="dart" label="Dart">

```dart title="spin_bot.dart"
class Tank {

}
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust title="spin_bot.rs"
fn main {

}
```

</TabItem>
</Tabs>
