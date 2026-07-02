# Apple Homepage Clone

A collaborative front-end project recreating the Apple homepage, built with **HTML5**, **CSS3**, **Bootstrap 5**, and **JavaScript**. Developed as part of Phase 3 / Week 14 at [Evangadi Tech](https://www.evangadi.com/).

---

## Live Preview

> Open `index.html` directly in your browser or use the VS Code **Live Server** extension.

---

## Features

- Full-width hero banners for MacBook Pro 16", iPhone 11 Pro, and iPhone 11
- Apple-style typography using SF Pro Display
- Light and dark text variants per banner matching the image tone
- Responsive layout with CSS media queries and Bootstrap 5 grid
- Smooth scroll and subtle hover transitions
- Clean CSS variable system for colors, fonts, and transitions

---

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Markup     | HTML5 (semantic elements)           |
| Styling    | CSS3 + Bootstrap 5 (local)          |
| Scripting  | JavaScript ES6                      |
| Typography | SF Pro Display / Helvetica Neue     |

---

## Project Structure

```
appleClone/
├── bootstrap/
│   ├── css/
│   │   └── bootstrap.min.css
│   └── js/
│       └── bootstrap.bundle.min.js
│
├── css/
│   └── style.css          # CSS variables, reset, banner & hero styles
│
├── js/
│   └── lsmain.js          # Custom JavaScript
│
├── images/
│   ├── macbook-pro-16.jpg
│   ├── iphone-11-pro.jpg
│   └── iphone-11.jpg
│
├── index.html             # Main entry point
└── README.md
```

---

## Getting Started

No build tools or package manager required — this is a static site.

<<<<<<< HEAD
### 1. Clone the repository
=======
# Git Workflow for Team Members

1. Switch to the `main` branch:

   git checkout main

2. Update your local `main` with the latest changes from the repository:

   git fetch origin
   git pull origin main

3. Create a new feature branch from the updated `main`:

   git checkout -b your-branch-name

4. Make your code changes.

5. Stage your changes:

   git add .

6. Commit your changes:

   git commit -m "Describe your changes"

7. Push your branch to the remote repository:

   git push -u origin feature/your-branch-name

8. Open a Pull Request (PR) from your feature branch into `main` for review.

# Git Workflow for Team Members

1. Switch to the `main` branch:

   git checkout main

2. Update your local `main` with the latest changes from the repository:

   git fetch origin
   git pull origin main

3. Create a new feature branch from the updated `main`:

   git checkout -b your-branch-name

4. Make your code changes.

5. Stage your changes:

   git add .

6. Commit your changes:

   git commit -m "Describe your changes"

7. Push your branch to the remote repository:

   git push -u origin feature/your-branch-name

8. Open a Pull Request (PR) from your feature branch into `main` for review.

## Team Goal
>>>>>>> 8439f9b7ca4e8ebc8a560435509a4c2094f5bf63

```bash
git clone https://github.com/DawitMahabaw/appleClone.git
cd appleClone
```

### 2. Run locally

- **Double-click** `index.html` in your file explorer, or
- Use the **Live Server** extension in VS Code:
  right-click `index.html` → _Open with Live Server_

That's it — no `npm install`, no build step.

---

## Page Sections

| Section         | Status      | Branch / Owner          |
| --------------- | ----------- | ----------------------- |
| Navigation      | Assigned    |                         |
| Hero Section 1  | In progress | `hero-section1` (Hana)  |
| Hero Section 2  | Assigned    |                         |
| Hero Section 3  | Assigned    |                         |
| Promo Section   | Assigned    |                         |
| Apple TV+ Section | Assigned  |                         |
| Footer          | Assigned    |                         |

Each contributor works only on their assigned section to minimize merge conflicts.

---

## Git Workflow

1. Always branch off the latest `main`:

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-section-name
   ```

2. Make your changes, then commit with a clear message:

   ```bash
   git add .
   git commit -m "feat: add navigation bar with responsive dropdown"
   ```

3. Push and open a Pull Request against `main`:

   ```bash
   git push origin feature/your-section-name
   ```

4. Request a review before merging — **never push directly to `main`**.

---

## Coding Standards

- Use semantic HTML elements (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- Use existing CSS variables (`--primary-color`, `--text-color`, etc.) — do not hardcode values already defined in `:root`.
- Follow the existing class naming convention: `banner`, `banner-bg`, `banner-content`, `banner-title`, etc.
- Keep code clean and properly indented (2 spaces).
- Test your section across at least mobile (375px), tablet (768px), and desktop (1200px) before opening a PR.
- Write meaningful, descriptive commit messages.

---

## CSS Variables Reference

```css
:root {
  --primary-color:     #000000;
  --secondary-color:   #ffffff;
  --text-color:        #1d1d1f;
  --background-color:  #f5f5f7;
  --font-family:       "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --transition:        all 0.3s ease;
}
```

---

## Credits

Built collaboratively by the Evangadi Tech Phase 3 cohort.
