import { test } from '../../fixtures/apiFixture';

import { ApiAssertionHelper} from '../../helpers/ApiAssertionHelper';

import {
    BookingPayloadFactory
} from '../../payloads/BookingPayloadFactory';

test.describe(
    '@smoke @regression Booking Lifecycle',
    () => {

        test(
            'Create -> Update -> Verify -> Delete',
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

                // Create

                const createResponse =
                    await bookingClient.createBooking(
                        BookingPayloadFactory.createBooking()
                    );

                ApiAssertionHelper.verifyStatusCode(
                    createResponse,
                    200
                );

                const bookingId =
                    (
                        await createResponse.json()
                    ).bookingid;

                // Verify Created

                const getResponse =
                    await bookingClient.getBookingById(
                        bookingId
                    );

                ApiAssertionHelper.verifyStatusCode(
                    getResponse,
                    200
                );

                // Update

                const updateResponse =
                    await bookingClient.updateBooking(
                        bookingId,
                        token,
                        BookingPayloadFactory.updateBooking()
                    );

                ApiAssertionHelper.verifyStatusCode(
                    updateResponse,
                    200
                );

                // Verify Updated

                const verifyResponse =
                    await bookingClient.getBookingById(
                        bookingId
                    );

                const verifyBody =
                    await verifyResponse.json();

                ApiAssertionHelper.verifyEqual(
                    verifyBody.firstname,
                    'Updated'
                );

                // Delete

                const deleteResponse =
                    await bookingClient.deleteBooking(
                        bookingId,
                        token
                    );

                ApiAssertionHelper.verifyStatusCode(
                    deleteResponse,
                    201
                );

                // Verify Deleted

                const deletedResponse =
                    await bookingClient.getBookingById(
                        bookingId
                    );

                ApiAssertionHelper.verifyStatusCode(
                    deletedResponse,
                    404
                );
            }
        );
    }
);