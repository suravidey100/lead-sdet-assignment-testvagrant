import { expect, Locator } from '@playwright/test';

export class AssertionHelper {

    static async verifyText(
        locator: Locator,
        expectedText: string
    ) {

        await expect(locator)
            .toContainText(expectedText);
    }

    static async verifyVisible(
        locator: Locator
    ) {

        await expect(locator)
            .toBeVisible();
    }

     static async verifyNotVisible(
        locator: Locator
    ): Promise<void> {

        await expect(locator)
            .not.toBeVisible();
    }

    static async verifyUrl(
        page: any,
        expectedUrl: RegExp
    ) {

        await expect(page)
            .toHaveURL(expectedUrl);
    }

    
}