---
sidebar_position: 2
---

# Installation

|  |  |  |
| --- | --- | --- |
| Python | [API](https://github.com/code-tanks/python-api) | [Template](https://github.com/code-tanks/python-template) |
| Rust |[API](https://github.com/code-tanks/code-tanks/tree/main/api) | [Template](https://github.com/code-tanks/rust-template) |
| Dart |[API](https://github.com/code-tanks/dart-api) | [Template](https://github.com/code-tanks/dart-template) |

Navigate to the code-tanks template repo for the language of your choice and click the green "*Use this template*" button.

Clone the repository you have just made to your local machine.

Run:
```bash
./get_scripts.sh
```


That's it! Head over to [Your First Tank](tutorial-basics/your-first-tank.mdx) to get started.

## (Optional) IDE

The recommended IDE for code-tanks is VSCode, which offers [development containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers) allowing easy setup for different environments. If you prefer to install required libraries directly to your system, follow the installation steps provided in `/.devcontainer/Dockerfile` of any template repositories listed above.

## (Optional) Desktop Requirements
```bash
sudo apt install -y curl jq pkg-config libasound2-dev libudev-dev
```

