# Project Guide

## Overview

Piksel is a Turkish-language marketing website for a digital studio offering business websites, web development, logo design, brand identity, and graphic design. The site uses a single-page, editorial landing experience and a Netlify Forms-powered project inquiry form.

## Technology

- TanStack Start and React 19
- TanStack Router file-based routing
- TypeScript in strict mode
- Tailwind CSS 4 with a custom global CSS design system
- Lucide React icons
- Netlify deployment and Netlify Forms

## Key Directories

- `src/routes/`: File-based pages and the root document.
- `src/routes/index.tsx`: Complete homepage content, service data, project examples, and contact form behavior.
- `src/styles.css`: Design tokens, layout, typography, responsive rules, and motion.
- `public/`: Static assets and the hidden Netlify Forms registration page.
- `.netlify/`: Netlify-generated project context and delivery results.

## Architecture

The public site is intentionally a focused single-page experience. Homepage sections are composed directly in `src/routes/index.tsx` because they share one visual narrative and do not currently need reuse across routes. Repeated services, projects, and process steps are represented as typed local data arrays and rendered declaratively.

Netlify Forms requires `public/__forms.html` for build-time form discovery. The React form posts URL-encoded data to that static path rather than `/`, which avoids TanStack Start's SSR catch-all route.

## Conventions

- Use Turkish for visitor-facing copy and accessible labels.
- Use PascalCase for React components and camelCase for functions and local values.
- Keep visual tokens in `:root` and reuse existing CSS custom properties.
- Prefer semantic HTML and preserve keyboard focus and reduced-motion behavior.
- Keep the visual direction editorial, asymmetric, high-contrast, and intentionally minimal.
- Add all new contact form fields to both the React form and `public/__forms.html`.

## Commands

- `pnpm dev`: Start the Vite development server.
- `pnpm build`: Create the production build.

Use Netlify CLI when local Netlify feature emulation is required.
