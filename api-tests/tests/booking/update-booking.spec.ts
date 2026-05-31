import { test } from '../../fixtures/apiFixture';

import bookingSchema from '../../schemas/booking.schema.json';

import {
    ApiAssertionHelper
} from '../../helpers/ApiAssertionHelper';

import {
    BookingPayloadFactory
} from '../../payloads/BookingPayloadFactory';

test.describe(
    '@regression Update Booking',
    () => {

        test(
            '@smoke Update Existing Booking',
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

                const updatePayload =
                    BookingPayloadFactory.updateBooking();

                const updateResponse =
                    await bookingClient.updateBooking(
                        bookingId,
                        token,
                        updatePayload
                    );

                ApiAssertionHelper.verifyStatusCode(
                    updateResponse,
                    200
                );

                const body =
                    await updateResponse.json();

                ApiAssertionHelper.verifyEqual(
                    body.firstname,
                    updatePayload.firstname
                );

                ApiAssertionHelper.verifySchema(
                    bookingSchema,
                    body
                );
            }
        );

        test(
            '@regression Update Without Token',
            async ({
                bookingClient
            }) => {

                const response =
                    await bookingClient.updateBooking(
                        1,
                        '',
                        BookingPayloadFactory.updateBooking()
                    );

                ApiAssertionHelper.verifyStatusCode(
                    response,
                    403
                );
            }
        );
    }
);