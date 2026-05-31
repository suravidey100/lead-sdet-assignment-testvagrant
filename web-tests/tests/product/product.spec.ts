import { test, expect } from '../../fixtures/pageFixture';
import {
    ENV,
    ROUTES
} from 'base-framework';
import { AssertionHelper } from '../../helpers/AssertionHelper';


test.describe('Product Catalog Module', () => {

    test(
        '@smoke @regression User should add product to cart',
        async ({ page, inventoryPage }) => {

            await inventoryPage.open();

            await inventoryPage.addBackpackToCart();

            await AssertionHelper.verifyText(inventoryPage.cartBadge, '1');
        }
    );

    test(
        '@regression Cart badge should not exist before adding products',
        async ({ page, inventoryPage }) => {

            await inventoryPage.open();

            await AssertionHelper.verifyNotVisible(inventoryPage.cartBadge);
        }
    );
});