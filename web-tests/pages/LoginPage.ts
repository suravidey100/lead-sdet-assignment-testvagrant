import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ENV,ROUTES} from 'base-framework';


export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.username = page.getByPlaceholder('Username');

        this.password = page.getByPlaceholder('Password');

        this.loginBtn = page.getByRole('button', {
            name: 'Login'
        });

        this.errorMessage = page.locator(
            '[data-test="error"]'
        );
    }

   async openApplication() {
        await this.navigate(
            ROUTES.LOGIN
        );
    }

    async login(
        userName: string,
        password: string
    ) {

        await this.username.fill(userName);

        await this.password.fill(password);

        await this.loginBtn.click();
    }

    async getErrorMessage() {

        return await this.errorMessage.textContent();
    }
}