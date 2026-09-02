import { test, expect } from '@playwright/test';

test('login succeeds with valid credentials', async ({ page }) => {
  await page.goto('/qaeverset-pilot-mini/');
  await page.fill('input[name="username"]', 'alice');
  await page.fill('input[name="password"]', 'alice123');
  await page.click('#loginBtn');
  await expect(page.locator('#ok')).toBeVisible();
  await expect(page.locator('#ok')).toContainText('Welcome, alice!');
});

test('login shows error with invalid password', async ({ page }) => {
  await page.goto('/qaeverset-pilot-mini/');
  await page.fill('input[name="username"]', 'alice');
  await page.fill('input[name="password"]', 'wrong');
  await page.click('#loginBtn');
  await expect(page.locator('#err')).toBeVisible();
});

test('login button is visible', async ({ page }) => {
  await page.goto('/qaeverset-pilot-mini/');
  await expect(page.locator('#loginBtn')).toBeVisible();
});

test('username placeholder is correct', async ({ page }) => {
  await page.goto('/qaeverset-pilot-mini/');
  await expect(page.locator('input[name="username"]')).toBeVisible();
  await expect(page.locator('input[name="username"]')).toHaveAttribute('placeholder', 'Username');
});

test('password is masked', async ({ page }) => {
  await page.goto('/qaeverset-pilot-mini/');
  await expect(page.locator('input[name="password"]')).toHaveAttribute('type', 'password');
});
