import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from 'base-framework';

const authFile =
    'storage/standard-user.json';

setup(
    'Authenticate Standard User',
    async ({ page }) => {

        const loginPage =
            new LoginPage(page);

        await loginPage.openApplication();

        await loginPage.login(
            ENV.STANDARD_USER,
            ENV.PASSWORD
        );

        await expect(page).toHaveURL(
            /inventory/
        );

        await page.context().storageState({
            path: authFile
        });
    }
);