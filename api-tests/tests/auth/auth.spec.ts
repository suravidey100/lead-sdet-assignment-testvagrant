import { test } from '../../fixtures/apiFixture';

import authSchema from '../../schemas/auth.schema.json';

import {
    ApiAssertionHelper
} from '../../helpers/ApiAssertionHelper';

test.describe('@smoke Authentication API', () => {

    test('@smoke Valid Token Generation', async ({
        authClient
    }) => {

        const response =
            await authClient.generateToken();

        ApiAssertionHelper.verifyStatusCode(
            response,
            200
        );

        const body =
            await response.json();

        ApiAssertionHelper.verifyNotNull(
            body.token
        );

        ApiAssertionHelper.verifySchema(
            authSchema,
            body
        );
    });

    test('@regression Invalid Authentication', async ({
        authClient
    }) => {

        const response =
            await authClient.generateInvalidToken();

        ApiAssertionHelper.verifyStatusCode(
            response,
            200
        );

        const body =
            await response.json();

        ApiAssertionHelper.verifyContains(
            body.reason,
            'Bad credentials'
        );
    });
});