# @cdx/helix-ai

Sync the Helix design-system **AI coding guidance** into a repository, in the
formats each AI tool reads — version-matched to the `@cdx/*` packages you have
installed.

It writes, from the guidance bundled in this package:

| Format               | Written to                                                              | Read by                                                              |
| -------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Agent Skills         | `.claude/skills/{helix-patterns,helix-components,helix-project-setup}/` | Claude Code and skill-aware agents                                   |
| AGENTS.md block      | a managed block in `AGENTS.md`                                          | Cursor, Codex, the Copilot coding agent, and other cross-tool agents |
| Copilot instructions | `.github/instructions/helix-patterns.instructions.md`                   | GitHub Copilot in the IDE                                            |

The skills cover **project setup** (`helix-project-setup` — install and theme a
new app), **components** (`helix-components` — variants, tokens), and
**patterns** (`helix-patterns` — composed UI), so `sync` bootstraps a greenfield
repo as well as an existing one.

The guidance is generated once from each pattern's `*.guide.md` in `cdx-next`
(`tools/patterns/generate-pattern-ai.mjs`) and baked into this package at
publish time, so **the version you install is the version you get**.

## Usage

Run it in a repo that depends on `@cdx/*`:

```bash
npx @cdx/helix-ai sync
```

Pin the guidance to the Helix major your app is on by installing the matching
version, e.g. `@cdx/helix-ai@18` for an app on `@cdx/* 18`. The CLI reads the
`@cdx/*` version in the target's `node_modules` and **refuses on a major
mismatch** unless you pass `--force`.

### Options

```
--all          write every format (default)
--skill        write only the Agent Skill
--agents       write only the AGENTS.md block
--copilot      write only the Copilot instructions
--dir <path>   target repo (default: current directory)
--dry-run      print what would change, write nothing
--force        overwrite even on a detected @cdx/* major mismatch
--help         show this help
```

### Keeping it in sync

Commit the written files, and re-run `npx @cdx/helix-ai sync` whenever you bump
`@cdx/*` (a CI step or a scheduled PR works well). The `AGENTS.md` block is
replaced in place between its `helix-patterns` markers, so anything else in your
`AGENTS.md` is preserved.

> Generated files carry a `do not edit by hand` note and the source version.
> Edit the pattern guides in `cdx-next` and regenerate; don't edit the synced
> files.
