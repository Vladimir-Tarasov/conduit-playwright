import { test, expect } from '@playwright/test';
import { USER } from './registration.spec';

test('login', async ({ page }) =>
{
    const emailField = page.locator('');
    const passwordField = page.locator('');

    await page.goto('https://demo.realworld.io/#/');
    await page.locator('').click();
    await emailField.fill(USER[1]);
    await passwordField.fill(USER[2]);
    await page.locator('').click();
    await expect(page.locator('')).toHaveText(USER[1]);
})