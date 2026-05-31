import {
    APIRequestContext
} from '@playwright/test';

import {
    ENV,
    API_ROUTES
} from 'base-framework';

export class BookingClient {

    constructor(
        private request: APIRequestContext
    ) {}

    async getBookings() {

        return await this.request.get(
            `${ENV.API_BASE_URL}${API_ROUTES.BOOKING}`
        );
    }

    async getBookingById(
        bookingId: number
    ) {

        return await this.request.get(
            `${ENV.API_BASE_URL}${API_ROUTES.BOOKING}/${bookingId}`
        );
    }

    async createBooking(
        payload: any
    ) {

        return await this.request.post(
            `${ENV.API_BASE_URL}${API_ROUTES.BOOKING}`,
            {
                data: payload
            }
        );
    }

    async createBookingWithoutBody() {

        return await this.request.post(
            `${ENV.API_BASE_URL}${API_ROUTES.BOOKING}`
        );
    }

    async updateBooking(
        bookingId: number,
        token: string,
        payload: any
    ) {

        return await this.request.put(
            `${ENV.API_BASE_URL}${API_ROUTES.BOOKING}/${bookingId}`,
            {
                headers: {
                    Cookie: `token=${token}`
                },

                data: payload
            }
        );
    }

    async deleteBooking(
        bookingId: number,
        token: string
    ) {

        return await this.request.delete(
            `${ENV.API_BASE_URL}${API_ROUTES.BOOKING}/${bookingId}`,
            {
                headers: {
                    Cookie: `token=${token}`
                }
            }
        );
    }
}