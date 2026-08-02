# AGENTS.md

## Cursor Cloud specific instructions

### What this repository is

This is a **GitHub profile README repository** (`vishnukummitha8/vishnukummitha8`).
Because its name matches the account name, GitHub renders its `README.md` at the
top of the user's public profile page. The repo contains only `README.md` — there
is **no application code, package manager, build system, test suite, or services**.

### Development notes

- There is nothing to install as a project dependency, and no `lint` / `test` /
  `build` / server commands exist. The "product" is the Markdown content in
  `README.md`, which renders on the GitHub profile.
- The only meaningful dev loop is: edit `README.md`, preview how it will look on
  GitHub, then commit/push. GitHub renders the profile automatically once pushed.
- To preview GitHub-Flavored Markdown locally (exactly as GitHub renders it), use
  [`grip`](https://github.com/joeyespo/grip), which proxies GitHub's rendering API:
  - Install (not part of the repo; only needed for previewing): `pip3 install --break-system-packages grip`
  - Run: `grip README.md 0.0.0.0:6419` then open the served URL. `grip` live-reloads
    on file save. Note: rendering requires network access to `api.github.com`, and
    unauthenticated requests are rate-limited (pass `--user/--pass` a token if needed).
- Do not add a heavy toolchain or CI to this repo unless the task explicitly asks;
  it is intentionally minimal.
