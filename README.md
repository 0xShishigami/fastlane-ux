# Fastlane UX Slides

A presentation project built with [Marp](https://marp.app/) for creating beautiful slides from Markdown.

## 🚀 Features

- **Markdown-based slides** - Write presentations in simple Markdown
- **Multiple themes** - Rose Pine themes (Dawn, Moon, and default)
- **Kroki diagrams** - Support for creating diagrams using Kroki.io
- **Local file support** - Include local images and assets
- **Multiple output formats** - Generate HTML, PDF, and PowerPoint presentations

## 📁 Project Structure

```
slides/
├── slides/           # Source Markdown files
│   ├── slide.md     # Main presentation file
│   └── slide.html   # Generated HTML output
├── themes/          # Custom CSS themes
│   ├── rose-pine.css
│   ├── rose-pine-dawn.css
│   └── rose-pine-moon.css
├── docs/            # Documentation and resources
├── marp.config.js   # Marp configuration
└── package.json     # Project dependencies
```

## 🛠️ Setup

**Install dependencies:**
   ```bash
   pnpm install
   ```

## 📖 Usage

### Live presentation server (recommended)
```bash
marp -s -c marp.config.js
```
This starts a local server with your custom configuration for live presentations.

### Generate HTML presentation
```bash
marp slides/slide.md --output slides/slide.html
```

### Generate PDF presentation
```bash
marp slides/slide.md --pdf --output slides/presentation.pdf
```

### Generate PowerPoint presentation
```bash
marp slides/slide.md --pptx --output slides/presentation.pptx
```

### Live preview with auto-reload
```bash
marp slides/slide.md --server --watch
```

## 🎨 Themes

This project includes three Rose Pine themes:
- **rose-pine.css** - Default Rose Pine theme
- **rose-pine-dawn.css** - Light variant
- **rose-pine-moon.css** - Dark variant

To use a specific theme in your slides, add this to your Markdown:
```markdown
---
marp: true
theme: rose-pine-moon
---
```

## 📊 Diagrams

This project supports [Kroki](https://kroki.io/) diagrams. You can create various types of diagrams using Kroki syntax in your Markdown:

```markdown
```kroki type=mermaid
graph TD
    A[Start] --> B{Decision?}
    B -->|Yes| C[Do Something]
    B -->|No| D[Do Nothing]
```
```

## 🔧 Configuration

The project is configured via `marp.config.js`:
- Input directory: `./slides`
- Local files allowed: `true`
- Kroki integration enabled
- Custom theme set included

## 📝 Writing Slides

Write your slides in Markdown format. Each slide is separated by `---`:

```markdown
---
marp: true
theme: rose-pine
---

# Slide 1
Content goes here

---

# Slide 2
More content here
```

## 🚀 Development

- Edit `slides/slide.md` to modify your presentation
- Use `marp --server --watch` for live preview during development
- Generated files are automatically ignored by git (see `.gitignore`)

## 📄 License

ISC License 