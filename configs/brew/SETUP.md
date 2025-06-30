# Homebrew Setup Instructions

This guide helps you restore your Homebrew environment using the package lists in this repository.

## 1. Install Homebrew (if not already installed)

Follow the instructions at [brew.sh](https://brew.sh/) or run:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 2. Install Packages

To install packages:

```sh
xargs brew install < brew-packages.txt
```

## 3. Install Casks

If you have a `brew-casks.txt` file, install all cask applications with:

```sh
xargs brew install --cask < brew-casks.txt
```

---

- `brew-packages.txt` contains all installed packages.
- `brew-casks.txt` contains all installed cask applications.

You can update these lists at any time with:

```sh
brew leaves > brew-packages.txt
brew list --cask > brew-casks.txt
```
