import { test } from '../../fixtures/apiFixture';

import {
    ApiAssertionHelper
} from '../../helpers/ApiAssertionHelper';
import {
    BookingPayloadFactory
} from '../../payloads/BookingPayloadFactory';

test.describe(
    '@regression Delete Booking',
    () => {

        test(
            '@smoke Delete Existing Booking',
            async ({
                authClient,
                bookingClient
            }) => {

                const tokenResponse =
                    await authClient.generateToken();

                const token =
                    (
                        await tokenResponse.json()
                    ).token;

                const createResponse =
                    await bookingClient.createBooking(
                        BookingPayloadFactory.createBooking()
                    );

                const bookingId =
                    (
                        await createResponse.json()
                    ).bookingid;

                const deleteResponse =
                    await bookingClient.deleteBooking(
                        bookingId,
                        token
                    );

                ApiAssertionHelper.verifyStatusCode(
                    deleteResponse,
                    201
                );
            }
        );

        test(
            '@regression Delete Without Token',
            async ({
                bookingClient
            }) => {

                const response =
                    await bookingClient.deleteBooking(
                        1,
                        ''
                    );

                ApiAssertionHelper.verifyStatusCode(
                    response,
                    403
                );
            }
        );
    }
);