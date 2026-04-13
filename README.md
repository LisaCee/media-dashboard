# Social Media Dashboard

A Frontend Mentor challenge — built with Next.js, TypeScript & Tailwind CSS

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js) ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## Live demo

[Social Media Dashboard](https://dashboard.lisacanini.com/)

## Overview

A responsive social media analytics dashboard built as a solution to the [Frontend Mentor Social Media Dashboard challenge](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Displays mock follower counts, engagement metrics, and daily stats across multiple social platforms, with a toggleable dark/light mode.

## Features

- Dark / light mode toggle
- Fully responsive layout
- Follower count summary cards
- Today's engagement overview
- Mock data via Faker.js
- Per-platform stat breakdowns

## Tech stack

- **Framework**: Next.js (used as project scaffold)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Mock data**: Faker.js

## Getting started

```bash
git clone "https://github.com/LisaCee/media-dashboard.git"
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project structure

```
├── app/
│   ├── layout.tsx        # Root layout with theme setup
│   └── page.tsx          # Main dashboard page
├── components/
│   ├── CardPrimary.tsx   # Follower summary cards
│   ├── CardSecondary.tsx # Today's overview cards
│   ├── CardLayout.tsx    # Responsive grid wrapper
│   ├── Header.tsx        # Title + theme toggle
│   └── Footer.tsx
└── data/                 # Faker-generated mock data
```

## Acknowledgements

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
- Solution by [Lisa Canini](https://www.lisacanini.com)
