import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: { baseURL: 'https://victor-2026.github.io/qaeverset-pilot-mini/', headless: true },
});
