# Svara Website

Landing page for [Svara](https://github.com/virat-mankali/svara), a free macOS voice dictation app that turns speech into clean pasted text.

The site is built as a small, single-page Next.js app with a calm cream visual style, release-focused calls to action, and copy that explains why Svara exists: a free alternative for people who want the voice-to-text workflow without another paid subscription.

## Links

- Website repo: https://github.com/virat-mankali/svara-website
- Svara app repo: https://github.com/virat-mankali/svara
- Releases: https://github.com/virat-mankali/svara/releases

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Bun

## Local Development.

Install dependencies:

```bash
bun install
```

Run the dev server:

```bash
bun run dev
```

Open http://localhost:3000 in your browser.

## Scripts

```bash
bun run dev
bun run build
bun run start
bun run lint
```

## Project Structure

```text
src/app/page.tsx       Landing page
src/app/layout.tsx     Metadata and root layout
src/app/globals.css    Global theme styles
public/svara-hero.png  Hero image asset
```

## Deployment

The easiest path is to import this repository into Vercel and deploy from the `main` branch.

Recommended build settings:

- Framework: Next.js
- Install command: `bun install`
- Build command: `bun run build`
- Output directory: Next.js default

## Credit

Svara is open source and built by [Virat Mankali](https://github.com/virat-mankali). The website links users directly to the GitHub releases page so they can download the latest macOS build.
