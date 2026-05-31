import { test, expect } from '../../fixtures/pageFixture';
import {
    ENV,
    ROUTES
} from 'base-framework';

import { AssertionHelper } from '../../helpers/AssertionHelper';
import { CheckoutFactory } from '../../test-data/factories/CheckoutFactory';
test.describe('Checkout Module', () => {

    test(
        '@smoke @regression User should complete checkout successfully',
        async ({
            page,
            inventoryPage,
            cartPage,
            checkoutPage
        }) => {

            await inventoryPage.open();

            await inventoryPage.addBackpackToCart();

            await cartPage.openCart();

            await cartPage.checkout();

            const user = CheckoutFactory.validUser();


            await checkoutPage.fillCheckoutForm(
                user.firstName,
                user.lastName,
                user.postalCode
            );

            await checkoutPage.continueCheckout();

            await checkoutPage.finishCheckout();

            await AssertionHelper.verifyText(
                checkoutPage.successMessage,
                'Thank you for your order'
            );
        }
    );

    test(
        '@regression User should see validation error when first name is missing',
        async ({
            page,
            inventoryPage,
            cartPage,
            checkoutPage
        }) => {

            await inventoryPage.open();

            await inventoryPage.addBackpackToCart();

            await cartPage.openCart();

            await cartPage.checkout();

            await checkoutPage.fillCheckoutForm(
                '',
                'Doe',
                '560100'
            );

            await checkoutPage.continueCheckout();

            await AssertionHelper.verifyText(
                checkoutPage.errorMessage,
                'First Name is required'
            );
        }
    );
});