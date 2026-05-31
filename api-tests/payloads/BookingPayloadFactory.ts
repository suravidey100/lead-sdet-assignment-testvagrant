export class BookingPayloadFactory {

    static createBooking() {

        return {

            firstname: 'John',

            lastname: 'Doe',

            totalprice: 1000,

            depositpaid: true,

            bookingdates: {

                checkin: '2026-01-01',

                checkout: '2026-01-05'
            },

            additionalneeds: 'Breakfast'
        };
    }

    static updateBooking() {

        return {

            firstname: 'Updated',

            lastname: 'User',

            totalprice: 2000,

            depositpaid: false,

            bookingdates: {

                checkin: '2026-02-01',

                checkout: '2026-02-05'
            },

            additionalneeds: 'Lunch'
        };
    }

    static invalidBooking() {

        return {

            firstname: '',

            lastname: '',

            totalprice: 'invalid-price',

            depositpaid: 'invalid-boolean',

            bookingdates: {},

            additionalneeds: ''
        };
    }
}