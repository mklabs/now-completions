# now-completions

[Tabtab](https://github.com/mklabs/tabtab) completion handler for
[now-cli](https://github.com/zeit/now-cli).

---
![now-completions](https://user-images.githubusercontent.com/113832/46511339-61495400-c84e-11e8-872c-e49a9530e154.gif)
---

## Installation

```sh
npm install mklabs/now-completions -g
now-completions install
```

Then choose the SHELL for which you want to enable the completions for.

## Supported commands

Fow now, only a subset of commands have "intelligent" completion:

- now (the top level command)
- ls | list
- log | logs
- inspect

Some commands (such as ls, inspect and logs) make use of [now
API](https://zeit.co/api#introduction) to get back namely the list of
deployments.

Make sure that `now` who you are by running `now login` once before completing
with these commands.

It indeed uses the token stored in `auth.json`. You can check how by looking at
[lib/request.js](./lib/request.js) and [lib/auth.js](./lib/auth.js) files.

## Next commands

Pretty much all now.sh commands, with a bit more work. If you feel like a
command is missing or would like to enhance an existing one, PRs are welcome
and appreciated!

---

> MIT
