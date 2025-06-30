# iTerm2 Setup Instructions (Based on Clovis Tutorial)

## Used Packages, Tools, and Plugins

- [iTerm2](https://iterm2.com/) (Terminal emulator)
- [Homebrew](https://brew.sh/) (macOS package manager)
- [Meslo LG M for Powerline](https://github.com/powerline/fonts) (Recommended patched font)
- [Zsh](https://www.zsh.org/) (Shell)
- [Oh My Zsh](https://ohmyz.sh/) (Zsh configuration framework)
- [Powerlevel10k](https://github.com/romkatv/powerlevel10k) (Zsh theme)
- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) (Zsh plugin)

---

## 1. Install iTerm2

Install via Homebrew:

```sh
brew install --cask iterm2
```

Or download from [iterm2.com](https://iterm2.com/downloads.html).

## 2. Install a Patched Font

- Download and install [Meslo LG M for Powerline](https://github.com/powerline/fonts/blob/master/Meslo%20Slashed/Meslo%20LG%20M%20Regular%20for%20Powerline.ttf) (recommended) or another Powerline font.
- Set the font in iTerm2: Preferences → Profiles → Text → Change Font.

## 3. Install Zsh and Oh My Zsh

Zsh is the default shell on macOS Catalina (10.15) and later, so you usually do not need to install it. If you want the latest version, you can install it via Homebrew:

```sh
brew install zsh zsh-completions
```

Install Oh My Zsh:

```sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## 4. Add Powerlevel10k Zsh Theme

```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/custom/themes/powerlevel10k
```

Set in `~/.zshrc`:

```
ZSH_THEME="powerlevel10k/powerlevel10k"
```

## 5. Enable Plugins

The repository already contains a pre-configured `.zshrc` file with plugins and settings. You do not need to manually edit your `.zshrc`—simply copy or symlink the provided file to your home directory:

```sh
cp configs/.zshrc ~/.zshrc
# or
ln -s "$PWD/configs/.zshrc" ~/.zshrc
```

## 6. Powerlevel10k Prompt Tweaks

The repository already contains a pre-configured `.p10k.zsh` file for Powerlevel10k prompt customization. To use it, copy or symlink it to your home directory:

```sh
cp configs/.p10k.zsh ~/.p10k.zsh
# or
ln -s "$PWD/configs/.p10k.zsh" ~/.p10k.zsh
```

If you want to further customize your prompt, run:

```sh
p10k configure
```

This will launch an interactive configuration wizard and update your `.p10k.zsh`.

## 7. iTerm2 Color Scheme

- Download a color scheme, e.g. [Clovis’ iTerm2 color scheme](https://raw.githubusercontent.com/Clovis-team/clovis-open-code-extracts/master/utils/Clovis-iTerm2-Color-Scheme.itermcolors).
- Import via iTerm2: Preferences → Profiles → Colors → Color Presets → Import.

## 8. Text Editor Navigation

- iTerm2: Preferences → Profiles → Keys → Load Preset… → Natural Text Editing
- Restart iTerm2 for changes to take effect.

## 9. VS Code Terminal Font (Optional)

If using VS Code, set the terminal font in settings:

```json
"terminal.integrated.fontFamily": "Meslo LG M for Powerline",
"terminal.integrated.fontSize": 12
```

### Use iTerm2 as the Default Terminal in VS Code (macOS)

To use iTerm2 as your default integrated terminal in VS Code, add the following to your VS Code `settings.json`:

```json
"terminal.integrated.defaultProfile.osx": "iTerm2"
```

If you don't see "iTerm2" as an option, you can add a custom profile:

```json
"terminal.integrated.profiles.osx": {
  "iTerm2": {
    "path": "/Applications/iTerm.app/Contents/MacOS/iTerm2",
    "args": []
  }
},
"terminal.integrated.defaultProfile.osx": "iTerm2"
```

---

For more details, see the [original tutorial](https://medium.com/@Clovis_app/configuration-of-a-beautiful-efficient-terminal-and-prompt-on-osx-in-7-minutes-827c29391961).
