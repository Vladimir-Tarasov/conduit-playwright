import { test, expect } from '@playwright/test';

// test.beforeAll(async ({ page }) => {
//     await page.goto('https://demo.realworld.io/#/');
// })

test('registration', async ({ page }) => {
    const USER = [
        'semen1',
        'semen1@gmail.com',
        'senya_11'
    ];

    const usernameField = page.getByPlaceholder('Username');
    const email = page.getByPlaceholder('Email');
    const password = page.getByPlaceholder('Password');

    await page.goto('https://demo.realworld.io/#/');
    await page.getByRole('link', { name: 'Sign up' })
        .click();
    await usernameField.fill(USER[0]);
    await email.fill(USER[1]);
    await password.fill(USER[2]);
    await page.getByRole('button', { name: 'Sign up' })
        .click();
    await expect(page.getByRole('link', { name: 'Sign up' }))
        .not.toBeVisible();
    await expect(page.getByRole('navigation'))
        .toHaveText([USER[0]]);
})