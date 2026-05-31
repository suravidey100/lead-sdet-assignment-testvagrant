import { Locator, Page } from '@playwright/test';
import { ENV } from 'base-framework';

export class BasePage {

    constructor(protected page: Page) {}

    async navigate(route: string) {
        await this.page.goto(
            `${ENV.BASE_URL}${route}`
        );
    }

    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    async fill(
        locator: Locator,
        value: string
    ): Promise<void> {
        await locator.fill(value);
    }

    async getText(
        locator: Locator
    ): Promise<string> {

        return (
            await locator.textContent()
        ) ?? '';
    }
}