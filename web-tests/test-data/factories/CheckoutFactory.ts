import { CheckoutUser } from '../models/CheckoutUser';

export class CheckoutFactory {

    static validUser(): CheckoutUser {

        return {
            firstName: 'John',
            lastName: 'Doe',
            postalCode: '560100'
        };
    }

    static missingFirstName(): CheckoutUser {

        return {
            firstName: '',
            lastName: 'Doe',
            postalCode: '560100'
        };
    }
}