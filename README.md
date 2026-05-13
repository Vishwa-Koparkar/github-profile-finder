# GitHub Profile Finder

A React application to search GitHub users and explore their public profile, top repositories, and language breakdown — built with the GitHub REST API.

**[Live Demo →](github-profile-finder-gray.vercel.app)**

---

## Features

- **Profile overview** — avatar, bio, location, company, website, follower/following counts
- **Top repositories** — sorted by stars, forks excluded, with description and star count
- **Language badges** — colour-coded badges matching GitHub's official language colours
- **Language breakdown** — most-used languages across all public repos
- **Graceful error handling** — 404 (user not found), 403/429 (rate limit), network errors
- **Responsive layout** — works on mobile and desktop
- **Dark mode** — respects system `prefers-color-scheme`
- **Optional auth token** — set `VITE_GITHUB_TOKEN` to raise the API rate limit from 60 → 5,000 req/hour

---

## Tech stack

| Layer       | Choice                     |
|-------------|----------------------------|
| Framework   | React 18 (Vite)            |
| Styling     | CSS Modules                |
| Data        | GitHub REST API v3          |
| Deployment  | Vercel                     |
| Linting     | ESLint + eslint-plugin-react |

---

## Project structure

```
src/
├── components/         # UI components, each with its own CSS Module
│   ├── SearchBar       # Controlled input + submit button
│   ├── ProfileCard     # Avatar, bio, stats, top languages
│   ├── RepoCard        # Single repository tile
│   ├── LanguageBadge   # Colour-coded language pill
│   ├── ErrorMessage    # Inline error banner
│   └── EmptyState      # Prompt shown before first search
├── hooks/
│   └── useGitHubProfile.js   # Custom hook — all data-fetching logic
├── utils/
│   ├── githubApi.js    # API calls (fetchUser, fetchRepos)
│   ├── formatters.js   # Pure helpers (formatCount, truncate, getTopLanguages)
│   └── constants.js    # LANGUAGE_COLORS, error messages, config
└── styles/
    └── global.css      # Design tokens (CSS vars), reset, base styles
```

---

## Getting started

### Prerequisites
- Node.js 18+
- npm 9+

### Install and run

```bash
# 1. Clone the repo
git clone https://github.com/your-username/github-profile-finder.git
cd github-profile-finder

# 2. Install dependencies
npm install

# 3. (Optional) Add a GitHub token to increase API rate limits
cp .env.example .env
# Edit .env and set VITE_GITHUB_TOKEN=your_token_here

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Deploying to Vercel

The fastest way:

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — Vercel auto-detects Vite and deploys on every push.

To add the optional GitHub token in Vercel: **Project → Settings → Environment Variables → add `VITE_GITHUB_TOKEN`**.

---

## GitHub API rate limits

| Mode            | Limit              |
|-----------------|--------------------|
| Unauthenticated | 60 requests / hour |
| With token      | 5,000 requests / hour |

Generate a token at **GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained**. No scopes required (public data only).

---

## Possible extensions

- [ ] Search history / recently viewed profiles (localStorage)
- [ ] Pinned repositories support (requires GraphQL API)
- [ ] Contribution heatmap
- [ ] Compare two profiles side-by-side
- [ ] Pagination for repositories

---

## License

MIT
