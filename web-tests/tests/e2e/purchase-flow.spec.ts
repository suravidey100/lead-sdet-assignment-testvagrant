import { test, expect } from '../../fixtures/pageFixture';
import { AssertionHelper } from '../../helpers/AssertionHelper';
import { CheckoutFactory } from '../../test-data/factories/CheckoutFactory';

test.describe('@smoke @regression Purchase Flow E2E', () => {

    test(
        '@smoke @regression Login -> Add Product -> Checkout -> Complete Purchase',
        async ({
            page,
            inventoryPage,
            cartPage,
            checkoutPage
        }) => {

            await inventoryPage.open();

            await inventoryPage.addBackpackToCart();

            await expect(
                inventoryPage.cartBadge
            ).toHaveText('1');

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
                checkoutPage.successMessage
            , 'Thank you for your order');
        }
    );
});