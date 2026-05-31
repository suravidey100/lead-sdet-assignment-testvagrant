import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ENV } from 'base-framework';
import { AssertionHelper } from '../../helpers/AssertionHelper';

test.describe('Login Module', () => {

    test('@smoke @regression Valid user should login successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.openApplication();

        await loginPage.login(
            ENV.STANDARD_USER,
            ENV.PASSWORD
        );

        await expect(page).toHaveURL(/inventory/);
    });

    test('@smoke @regression Invalid user should see error message', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.openApplication();

        await loginPage.login(
            'invalid_user',
            'invalid_password'
        );

        await AssertionHelper.verifyVisible(
            loginPage.errorMessage
        );

        await AssertionHelper.verifyText(
            loginPage.errorMessage,
            'Username and password do not match'
        );
    });
});