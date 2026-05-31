import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import {
    ROUTES
} from 'base-framework';

export class CartPage extends BasePage {

    readonly cartIcon: Locator;
    readonly checkoutBtn: Locator;

    constructor(page: Page) {

        super(page);

        this.cartIcon =
            page.locator('.shopping_cart_link');

        this.checkoutBtn =
            page.getByRole('button', {
                name: 'Checkout'
            });
    }

    async open() {
        await this.navigate(
            ROUTES.CART
        );
    }
    async openCart() {

        await this.cartIcon.click();
    }

    async checkout() {

        await this.checkoutBtn.click();
    }
}