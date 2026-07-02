# Apple Homepage Clone

A collaborative front-end project to recreate the current Apple homepage using **HTML5**, **CSS3**, **Bootstrap 5**, and **JavaScript**.

## Project Overview

The objective of this project is to rebuild the Apple homepage with a responsive layout while following clean code practices and collaborative GitHub workflows.

## Tech Stack

- HTML5
- CSS3
- Bootstrap 5 (Local Installation)
- JavaScript (ES6)

## Project Structure

```text
apple-homepage/
│
├── bootstrap/
│   ├── css/
│   └── js/
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── icons/
│   ├── hero-section/
│   ├── promo-section/
│   └── tv-section/
│
├── index.html
└── README.md
```

## Collaboration Guidelines

- Do **not** work directly on the `main` branch.
- Create a new feature branch before starting your task.
- Commit your work with clear, descriptive commit messages.
- Push your branch to GitHub.
- Open a Pull Request for review before merging into `main`.

### Example Workflow

```bash
git checkout main
git pull origin main

git checkout -b feature/your-feature-name

# Make your changes

git add .
git commit -m "Describe your changes"

git push origin feature/your-feature-name
```

## Assigned Sections

- Navigation
- Hero Section 1
- Hero Section 2
- Hero Section 3
- Promo Section
- Apple TV+ Section
- Footer

Each contributor should work only on their assigned section to minimize merge conflicts.

## Coding Guidelines

- Use semantic HTML elements.
- Follow the existing project structure.
- Keep code clean and properly indented.
- Reuse CSS variables where applicable.
- Write meaningful commit messages.
- Test your changes before creating a Pull Request.

## Getting Started

1. Clone the repository.
2. Open the project in your preferred code editor.
3. Create a new feature branch.
4. Complete your assigned task.
5. Commit, push, and submit a Pull Request.

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

Collaborate effectively using GitHub while recreating a responsive Apple homepage with clean, maintainable, and well-organized code.
