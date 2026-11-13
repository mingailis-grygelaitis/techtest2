import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 1,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: process.env.BASE_URL || 'https://demo.playwright.dev/todomvc/',
    ...devices['Desktop Chrome'],
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});
