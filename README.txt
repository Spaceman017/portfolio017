Sulaiman Portfolio - Multi-page Next.js (App Router)
--------------------------------------------------
Files: src/app/... (Home, About, Skills, Projects, Contact)
Components: src/app/components/Navbar.jsx, ButtonLink.jsx

How to use:
1. Create a fresh Next.js project (if you haven't): npx create-next-app@latest my-portfolio
   - Answer: No (TypeScript), Yes (src/), Yes (App Router). Tailwind & Turbopack optional.
2. Delete the existing src/app/ folder inside your new project.
3. Copy the entire 'src' folder from this zip into your project (replace the folder).
4. cd my-portfolio && npm install (if you changed packages) && npm run dev
5. Open http://localhost:3000

Important troubleshooting notes (from earlier problems):
- Any component that uses React hooks (useState/useEffect) must be a client component.
  Add the line "use client" at the top of that file. The Navbar.jsx and ButtonLink.jsx already include this.
- If you see a 404 on /, ensure src/app/page.jsx exists (this zip includes it).
- If you added previous files (LandingPage.jsx, AboutUs.jsx) delete duplicates before replacing.
- If the site doesn't update, stop the dev server (Ctrl+C) and run npm run dev again.
