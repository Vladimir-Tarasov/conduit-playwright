import { test, expect } from '@playwright/test';

test('registration', async ({ page }) => {
    const USER = [
        'semen111',
        'semen111@gmail.com',
        'senya_11'
    ];

    const userNameField = page.locator('input[ng-model="$ctrl.formData.username"]');
    const email = page.locator('input[ng-model="$ctrl.formData.email"]');
    const password = page.locator('input[ng-model="$ctrl.formData.password"]');

    await page.goto('https://demo.realworld.io/#/');
    await page.locator('a[href="#/register"]').click();
    await userNameField.fill(USER[0]);
    await email.fill(USER[1]);
    await password.fill(USER[2]);
    await page.locator('button[class="btn btn-lg btn-primary pull-xs-right ng-binding"]')
        .click();
    await expect(page.locator('[ui-sref="app.profile.main({ username: $ctrl.currentUser.username })"]'))
        .toHaveText([USER[0]]);
})