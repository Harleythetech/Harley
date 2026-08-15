# Harley's Portfolio V7

Personal portfolio — version 7. Built with React, TypeScript, Tailwind CSS v4, and Vite.

Live at [harleythetech.dev](https://harleythetech.vercel.app/) *(placeholder — update when deployed)*

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 6 |
| Styling | Tailwind CSS v4 |
| Build | Vite 8 |
| Animation | Anime.js v4 |
| Linting | Oxlint |
| Contact form | Web3Forms |
| Trivia API | Open Trivia DB (category: Computer Science) |

---

## Project structure

```
src/
├── assets/          Static assets (logo, profile image, social icons)
├── data/            Content data — edit these to update the site
│   ├── projects.ts  Project cards
│   └── about.ts     Experience, education, achievements, tech stack
├── main/
│   ├── Components/
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── home.tsx
├── index.css
└── main.tsx
public/
└── cv.pdf           Resume — replace with your own
```

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Updating content

All portfolio content lives in `src/data/`. You never need to touch the components to update text or add projects.

**Add a project** — edit `src/data/projects.ts`:

```ts
{
    id: 5,
    number: "05",
    title: "My New Project",
    description: "What it does.",
    technologies: ["React", "Node.js"],
    year: "2026",
    type: "Web Application",
    href: "https://github.com/...",
}
```

**Update about info** — edit `src/data/about.ts` to change experience, education, achievements, interests, or tech stack.

**Replace CV** — drop a new `cv.pdf` into the `public/` folder.

---

## Contact form

Powered by [Web3Forms](https://web3forms.com). The access key in `Contact.tsx` routes submissions to the configured email. Replace it with your own key from the Web3Forms dashboard if you fork this.

---

## License

Personal portfolio — not intended as a template. Feel free to take inspiration, but please don't ship it as your own.
