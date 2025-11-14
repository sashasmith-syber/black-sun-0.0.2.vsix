# 🌑 BLACK SUN – A Cyberpunk-Inspired Dark Theme for VS Code

> **"In the void of darkness, only the glow remains."**

**BLACK SUN** is a sleek, futuristic dark theme for Visual Studio Code that blends deep blacks with vibrant neon glows—inspired by cyberpunk aesthetics, terminal interfaces, and the iconic green hues of _The Matrix_. Designed for developers who crave focus, contrast, and a touch of digital rebellion.

---

## 🌟 Features

- **True Black Background** (`#080808`) for OLED-friendly, distraction-free coding.
- **Neon Cyan Glow** (`#00ffff`) for active elements: cursor, selections, tabs, and UI highlights.
- **Matrix Green Accents** (`#00ff00`) for strings, constants, tags, and search matches.
- **Dynamic Bracket Pair Colouring** with 6 distinct glowing hues for unmatched code structure clarity.
- **Terminal-Ready Colours**: Fully customized ANSI palette matching the theme’s cyberpunk vibe.
- **Subtle UI Consistency**: All panels, sidebars, and controls use a cohesive "Black Light" palette with soft borders and hover glows.

---

## 🎨 Colour Highlights

| Element              | Colour           | Purpose                       |
| -------------------- | ---------------- | ----------------------------- |
| Editor Background    | `#080808`        | Pure black for deep immersion |
| Keywords / Types     | `#00ffff`        | Cyan glow – core syntax focus |
| Strings              | `#ffcc66`        | Warm orange-yellow            |
| Numbers              | `#99ccff`        | Soft light blue               |
| Constants / Booleans | `#00ff00`        | Matrix green                  |
| Functions            | `#aaffaa`        | Gentle light green            |
| Cursor & Selection   | `#00ffff` (glow) | High-visibility interaction   |
| Find Matches         | `#00ff0044`      | Semi-transparent Matrix green |
| Errors               | `#ff0000`        | Bold red                      |
| Warnings             | `#ffff00`        | Bright yellow                 |

---

## 💻 Terminal Support

BLACK SUN includes a full terminal colour scheme that matches the editor:

- **Cursor**: Neon cyan (`#00ffff`)
- **ANSI Colours**: Custom-tuned for readability and style
  - Green: `#00ff00` → Perfect for logs and success messages
  - Red: `#ff0000` → Clear error visibility
  - Bright variants for enhanced contrast

---

## 🔧 Installation

1. Open **Visual Studio Code**
2. Go to **Extensions** (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for **"BLACK SUN"**
4. Click **Install**
5. Open **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`)
6. Type `Preferences: Color Theme`
7. Select **BLACK SUN**

---

## 🖼️ Preview

_Imagine this section with screenshots showing:_

- Code in JavaScript/TypeScript with glowing brackets and syntax
- Terminal output with vibrant ANSI colours
- Sidebar, tabs, and status bar with subtle borders and hover effects
- Find-in-files with Matrix-green highlights

> 💡 _Tip: Pair with a monospace font like **Fire Code**, **JetBrains Mono**, or **Cascadia Code** for the ultimate cyber-coding experience._

---

## 🛠️ Customization

Want to tweak the glow intensity or adjust contrast?  
BLACK SUN uses consistent transparency (`#00ffff33`, `#00ffff1A`, etc.)—so you can easily modify the theme file or extend it via VS Code’s `settings.json`.

Example: Make selections more opaque

```json
{
  "workbench.colorCustomizations": {
    "[Black Sun]": {
      "editor.selectionBackground": "#00ffff66"
    }
  }
}
```

---

## 📜 License

MIT License – Free to use, modify, and distribute.

---

## ✨ Final Words

**BLACK SUN** isn’t just a theme—it’s a statement.
For those who code in the shadows but shine with neon brilliance.

> *"Welcome to the real world."* – But make it **glow**.

---

**Author**: Sasha Smith
**Version**: 0.0.2
**Repository**: [https://github.com/sashasmith-syber/black-sun-glow]
**Feedback?** Open an issue or submit a PR! 🌌
