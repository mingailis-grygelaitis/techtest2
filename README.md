# Task board UI exercise

Node.js 22+ and npm are required. This exercises the public React TodoMVC demo at https://demo.playwright.dev/todomvc/ . No account or credentials are needed.

```sh
npm run setup
npm test
```

Optional: `npm run test:headed` to watch the browser and `npm run typecheck` to check TypeScript. Setup needs internet access for npm packages and Chromium; tests need access to the demo site. On Linux, Chromium may also need OS libraries (`npx playwright install --with-deps chromium`).

This is a 30-minute exercise with two short tests covering one workflow: load two release tasks, complete one, view completed work, then clear completed tasks. You have inherited these tests and their small helper.

The intended behaviour is that only the chosen task is completed, the Completed view shows that task, and clearing completed work removes it while preserving the active task. Changes should survive a page reload.

Run it, explain what it does, and discuss your initial observations. Choose one or two worthwhile improvements, implement them, and explain how you verified them. You are not expected to rewrite the framework or find every concern.

This is open book. Documentation, search, and AI tools are welcome. Identify concerns yourself before using AI to implement changes, and be ready to explain and defend the resulting code.

`BASE_URL` can point to another compatible TodoMVC deployment. Use only a disposable demo environment.
