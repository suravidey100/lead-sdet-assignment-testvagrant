import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from 'base-framework';

export class CheckoutPage extends BasePage {

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;

    readonly continueBtn: Locator;
    readonly finishBtn: Locator;

    readonly successMessage: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.firstName =
            page.getByPlaceholder('First Name');

        this.lastName =
            page.getByPlaceholder('Last Name');

        this.postalCode =
            page.getByPlaceholder(
                'Zip/Postal Code'
            );

        this.continueBtn =
            page.getByRole('button', {
                name: 'Continue'
            });

        this.finishBtn =
            page.getByRole('button', {
                name: 'Finish'
            });

        this.successMessage =
            page.locator('.complete-header');

        this.errorMessage =
            page.locator('[data-test="error"]');
    }

    async openStepOne() {
        await this.navigate(
            ROUTES.CHECKOUT_STEP_ONE
        );
    }

    async fillCheckoutForm(
        first: string,
        last: string,
        zip: string
    ) {

        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(zip);
    }

    async continueCheckout() {

        await this.continueBtn.click();
    }

    async finishCheckout() {

        await this.finishBtn.click();
    }

    async getSuccessMessage() {

        return await this.successMessage.textContent();
    }

    async getErrorMessage() {

        return await this.errorMessage.textContent();
    }
}