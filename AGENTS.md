# AGENTS.md

## Cursor Cloud specific instructions

The Baybayin Project is a single, purely client-side Vite + React 19 + TypeScript SPA that transliterates Latin/English text into historical/fictional writing systems (Baybayin, Aurebesh, Deseret, Tengwar, Ogham, Klingon, etc.). There is no backend, database, or external service; all state lives in React Context + `localStorage`.

Standard scripts are in `package.json` (`dev`, `build`, `lint`, `preview`). Run them with `npm`.

Non-obvious caveats:
- The Vite dev server serves under a base path (`base: "/the-baybayin-project"` in `vite.config.ts`). Open `http://localhost:5173/the-baybayin-project/`, not the bare root — the bare root returns 404.
- Routing uses hash routes, e.g. the transliterator is at `http://localhost:5173/the-baybayin-project/#/transliterator/baybayin`.
- `npm run lint` currently reports pre-existing errors in the repo (e.g. `no-var`, `prefer-const`, unused vars). These are not environment problems; do not "fix" them unless the task asks for it.
- There is no test runner configured. `src/App.test.js` is a leftover Create-React-App file with no Jest/Vitest/@testing-library installed and no `test` script. End-to-end verification is done by running the dev server and using the app in a browser.
