import { test } from '../../fixtures/apiFixture';

import bookingSchema from '../../schemas/booking.schema.json';

import {
    ApiAssertionHelper
} from '../../helpers/ApiAssertionHelper';

import {
    BookingPayloadFactory
} from '../../payloads/BookingPayloadFactory';

test.describe(
    '@smoke Booking Retrieval',
    () => {

        test(
            '@smoke Get All Bookings',
            async ({
                bookingClient
            }) => {

                const response =
                    await bookingClient.getBookings();

                ApiAssertionHelper.verifyStatusCode(
                    response,
                    200
                );

                const body =
                    await response.json();

                ApiAssertionHelper.verifyNotNull(
                    body
                );
            }
        );

        test(
            '@smoke Get Booking By Id',
            async ({
                bookingClient
            }) => {

                const createResponse =
                    await bookingClient.createBooking(
                        BookingPayloadFactory.createBooking()
                    );

                const createBody =
                    await createResponse.json();

                const bookingId =
                    createBody.bookingid;

                const response =
                    await bookingClient.getBookingById(
                        bookingId
                    );

                ApiAssertionHelper.verifyStatusCode(
                    response,
                    200
                );

                const body =
                    await response.json();

                ApiAssertionHelper.verifyEqual(
                    body.firstname,
                    'John'
                );

                ApiAssertionHelper.verifySchema(
                    bookingSchema,
                    body
                );
            }
        );

        test(
            '@regression Invalid Booking Id',
            async ({
                bookingClient
            }) => {

                const response =
                    await bookingClient.getBookingById(
                        99999999
                    );

                ApiAssertionHelper.verifyStatusCode(
                    response,
                    404
                );
            }
        );
    }
);