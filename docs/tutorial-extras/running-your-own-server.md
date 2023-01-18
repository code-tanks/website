---
sidebar_position: 1
---

# Running your own server
## Requirements
- [Docker](https://docs.docker.com/get-docker/)

## Installation

To add an insecure docker registry, add the file /etc/docker/daemon.json with the following content:

```bash
{
  "insecure-registries" : ["localhost:5001"],
}
```

and then restart docker.

Now bring up all code-tank services.

```bash
docker compose up -d
```

## Development

There are helper scripts to build this code from source in the directory `code-tanks/scripts/dev/`

Example:
```bash
./scripts/dev/build_all.sh
```

Running a build script will restart that respective container in the docker compose stack

For resetting the database:
```bash
./scripts/dev/reset_db.sh
```