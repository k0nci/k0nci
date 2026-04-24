#!/bin/sh
input=$(cat)

cwd=$(echo "$input" | jq -r '.workspace.current_dir // .cwd // ""')
model=$(echo "$input" | jq -r '.model.display_name // ""')
used=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

# Shorten home directory to ~
home="$HOME"
short_cwd="${cwd/#$home/~}"

# Git branch + untracked count
branch=""
untracked=""
modified=""
if git -C "$cwd" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  branch=$(git -C "$cwd" -c gc.auto=0 symbolic-ref --short HEAD 2>/dev/null || git -C "$cwd" rev-parse --short HEAD 2>/dev/null)
  ut_count=$(git -C "$cwd" ls-files --others --exclude-standard 2>/dev/null | wc -l | tr -d ' ')
  [ "$ut_count" -gt 0 ] 2>/dev/null && untracked="?${ut_count}"
  mod_count=$(git -C "$cwd" diff --name-only 2>/dev/null | wc -l | tr -d ' ')
  [ "$mod_count" -gt 0 ] 2>/dev/null && modified="!${mod_count}"
fi

# Context bar (10 chars wide, block characters)
bar=""
if [ -n "$used" ]; then
  pct=$(printf '%.0f' "$used")
  filled=$((pct / 10))
  empty=$((10 - filled))
  if [ "$pct" -ge 80 ]; then
    bar_color='\033[31m'
  elif [ "$pct" -ge 50 ]; then
    bar_color='\033[33m'
  else
    bar_color='\033[32m'
  fi
  bar_filled=""
  i=0; while [ "$i" -lt "$filled" ]; do bar_filled="${bar_filled}█"; i=$((i+1)); done
  bar_empty=""
  i=0; while [ "$i" -lt "$empty" ]; do bar_empty="${bar_empty}░"; i=$((i+1)); done
  bar=$(printf "${bar_color}%s\033[90m%s\033[0m %s%%" "$bar_filled" "$bar_empty" "$pct")
fi

# Line 1: path |  branch ?untracked
dir_icon=$(printf '\xEF\x81\xBB')
line1=$(printf '\033[34m%s %s\033[0m' "$dir_icon" "$short_cwd")
if [ -n "$branch" ]; then
  git_icon=$(printf '\xEE\x82\xA0')
  line1=$(printf '%s | \033[32m%s %s\033[0m' "$line1" "$git_icon" "$branch")
fi
if [ -n "$modified" ]; then
  line1=$(printf '%s \033[33m%s\033[0m' "$line1" "$modified")
fi
if [ -n "$untracked" ]; then
  line1=$(printf '%s \033[31m%s\033[0m' "$line1" "$untracked")
fi

# Line 2: [model] | bar
line2=""
if [ -n "$model" ]; then
  line2=$(printf '\033[38;5;208m%s\033[0m' "$model")
fi
if [ -n "$bar" ]; then
  if [ -n "$line2" ]; then
    line2=$(printf '%s | %s' "$line2" "$bar")
  else
    line2="$bar"
  fi
fi

printf '%s\n%s\n' "$line1" "$line2"
