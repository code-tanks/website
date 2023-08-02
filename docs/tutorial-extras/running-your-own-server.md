---
sidebar_position: 1
---

# Running your own server

## Installation

To add an insecure docker registry, add the file /etc/docker/daemon.json with the following content:

```bash
{
  "insecure-registries" : ["localhost:5001"],
}
```

and then restart docker `sudo systemctl restart docker`.

Now bring up all code-tank services.

```bash
docker compose up -d
```

## Development

There are helper scripts to build this code from source in the directory `code-tanks/scripts/dev/`

Example:
```bash
./scripts/dev/build/server.sh
```

The deploy the newly built container with:

```bash
docker compose up -d
```


For resetting the database:
```bash
./scripts/dev/reset_db.sh
```
