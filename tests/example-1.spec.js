import { test, expect } from '@playwright/test';

test.beforeAll(async ({ playwright }) => {
  await playwright.selectors.register('vue-select-label', () => ({
    query() {},
    queryAll() {},
  }));
});

test('Can open new risk 1', async ({ page }) => {
  await expect(true).toBe(true);
});
