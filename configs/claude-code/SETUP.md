# Claude Code Status Line Setup

A custom status line for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) that displays workspace context at a glance.

## What It Shows

The status line renders two lines:

**Line 1** — Directory and git info:
```
 ~/project |  main !3 ?1
```
- Current directory (shortened home path)
- Git branch name
- Modified file count (`!N`) in yellow
- Untracked file count (`?N`) in red

**Line 2** — Model and context usage:
```
Claude Opus 4.6 | ████░░░░░░ 40%
```
- Active model name
- Context window usage bar (green <50%, yellow 50–80%, red 80%+)

## Prerequisites

- [jq](https://jqlang.org/) — JSON processor (used to parse Claude Code's status input)
- [git](https://git-scm.com/) — for branch and file status info

Both are available via Homebrew:

```sh
brew install jq git
```

## Installation

### 1. Copy the Script

Copy or symlink `statusline-command.sh` to your Claude Code config directory:

```sh
cp configs/claude-code/statusline-command.sh ~/.claude/statusline-command.sh
# or
ln -s "$PWD/configs/claude-code/statusline-command.sh" ~/.claude/statusline-command.sh
```

Make sure it is executable:

```sh
chmod +x ~/.claude/statusline-command.sh
```

### 2. Configure Claude Code

Add the following to your `~/.claude/settings.json` (create the file if it doesn't exist):

```json
{
  "statusLine": {
    "type": "command",
    "command": "bash ~/.claude/statusline-command.sh"
  }
}
```

If the file already has other settings, merge the `statusLine` key into the existing object.

### 3. Restart Claude Code

Restart Claude Code for the status line to appear.
