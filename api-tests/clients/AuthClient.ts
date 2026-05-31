import {
    APIRequestContext
} from '@playwright/test';
import {ENV, API_ROUTES} from 'base-framework';

export class AuthClient {

    constructor(
        private request: APIRequestContext
    ) {}

    async generateToken() {

        const response =
            await this.request.post(
                `${ENV.API_BASE_URL}${API_ROUTES.AUTH}`,
                {
                    data: {
                        username: 'admin',
                        password: 'password123'
                    }
                }
            );

        return response;
    }

    async generateInvalidToken() {

        return await this.request.post(
            `${ENV.API_BASE_URL}${API_ROUTES.AUTH}`,
            {
                data: {
                    username: 'wrong',
                    password: 'wrong'
                }
            }
        );
    }
}