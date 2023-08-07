import { test, expect } from '@playwright/test';

test('open counduit', async ({ page }) =>
{
    await page.goto('https://demo.realworld.io/#/');
    await expect(page).toHaveTitle('Home — Conduit');
    await expect(page).toHaveURL(/#/);
    await page.screenshot({ path: 'screenshots/open.jpg' });
});