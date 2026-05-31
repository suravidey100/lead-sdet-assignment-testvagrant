import { test } from '../../fixtures/apiFixture';

import bookingSchema from '../../schemas/booking.schema.json';

import {
    ApiAssertionHelper
} from '../../helpers/ApiAssertionHelper';

import {
    BookingPayloadFactory
} from '../../payloads/BookingPayloadFactory';

test.describe('@smoke Create Booking', () => {

    test(
        '@smoke Create Booking With Valid Payload',
        async ({
            bookingClient
        }) => {

            const payload =
                BookingPayloadFactory.createBooking();

            const response =
                await bookingClient.createBooking(
                    payload
                );

            ApiAssertionHelper.verifyStatusCode(
                response,
                200
            );

            const body =
                await response.json();

            ApiAssertionHelper.verifyNotNull(
                body.bookingid
            );

            ApiAssertionHelper.verifyEqual(
                body.booking.firstname,
                payload.firstname
            );

            ApiAssertionHelper.verifySchema(
                bookingSchema,
                body.booking
            );
        }
    );

    test(
        '@regression Create Booking With Invalid Payload',
        async ({
            bookingClient
        }) => {

            const response =
                await bookingClient.createBooking(
                    BookingPayloadFactory.invalidBooking()
                );

            ApiAssertionHelper.verifyStatusCodeIn(
                response,
                [200, 400, 500]
            );
        }
    );

    test(
        '@regression Create Booking Without Payload',
        async ({
            bookingClient
        }) => {

            const response =
                await bookingClient.createBookingWithoutBody();

            ApiAssertionHelper.verifyStatusCodeIn(
                response,
                [400, 500]
            );
        }
    );
});