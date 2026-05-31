import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import {
    ROUTES
} from 'base-framework';

export class InventoryPage extends BasePage {

    readonly backpackAddBtn: Locator;
    readonly bikeLightAddBtn: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {

        super(page);

        this.backpackAddBtn =
            page.locator(
                '#add-to-cart-sauce-labs-backpack'
            );

        this.bikeLightAddBtn =
            page.locator(
                '#add-to-cart-sauce-labs-bike-light'
            );

        this.cartBadge =
            page.locator('.shopping_cart_badge');
    }

    async open() {
        await this.navigate(
            ROUTES.INVENTORY
        );
    }

    async addBackpackToCart() {

        await this.backpackAddBtn.click();
    }

    async addBikeLightToCart() {

        await this.bikeLightAddBtn.click();
    }

    async getCartCount() {

        return await this.cartBadge.textContent();
    }
}