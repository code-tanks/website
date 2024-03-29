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
import 'package:codetanks/codetanks.dart';

class MyTank extends BaseTank {
  int i = 0;

  MyTank() {
    print("Created my spin tank!");
  }

  @override
  void run() {
    if (i % 2 == 0) {
      commands.add(Command.MOVE_FORWARD | Command.ROTATE_TANK_CLOCKWISE | Command.FIRE);
    } else {
      commands.add(Command.MOVE_BACKWARD | Command.ROTATE_TANK_COUNTER_CLOCKWISE | Command.FIRE);
    }    
    print(commands);
  }
  
  @override
  void onEvent(Map event) {
    print(event);
    i = i + 1;
    print(i);
  }
}

BaseTank createTank() => MyTank();
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust title="spin_bot.rs"
use ct_api::*;
use serde_json::Value;

pub struct MyTank {
    i: u32
}

impl Tank for MyTank {
    fn run(&mut self, commands: &mut Vec<Command>) {
        if self.i % 2 == 0 {
            commands.push(Commands::MOVE_FORWARD | Commands::ROTATE_TANK_CLOCKWISE | Commands::FIRE);
        } else {
            commands.push(Commands::MOVE_BACKWARD | Commands::ROTATE_TANK_COUNTER_CLOCKWISE | Commands::FIRE);
        }
    }

    fn on_event(&mut self, commands: &mut Vec<Command>, event: &Value) {
        self.i += 1;
    }
}

pub fn create_tank() -> MyTank {
    MyTank { i: 0 }
}
```

</TabItem>
</Tabs>
