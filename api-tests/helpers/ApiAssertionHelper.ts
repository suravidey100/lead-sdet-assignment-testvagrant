import {
    APIResponse,
    expect
} from '@playwright/test';

import { SchemaValidator } from './SchemaValidator';

export class ApiAssertionHelper {

    static verifyStatusCode(
        response: APIResponse,
        expectedStatus: number
    ): void {

        expect(
            response.status()
        ).toBe(
            expectedStatus
        );
    }

    static verifyStatusCodeIn(
        response: APIResponse,
        expectedStatuses: number[]
    ): void {

        expect(
            expectedStatuses.includes(
                response.status()
            )
        ).toBeTruthy();
    }

    static verifyNotNull(
        value: any
    ): void {

        expect(value)
            .toBeTruthy();
    }

    static verifyEqual(
        actual: any,
        expected: any
    ): void {

        expect(actual)
            .toBe(expected);
    }

    static verifyContains(
        actual: string,
        expected: string
    ): void {

        expect(actual)
            .toContain(expected);
    }

    static verifySchema(
        schema: object,
        response: object
    ): void {

        SchemaValidator.validate(
            schema,
            response
        );
    }

     static verifyResponseTime(responseTime: number,maxAllowedMs: number) {
        expect(responseTime).toBeLessThanOrEqual(maxAllowedMs)  ;
    }
}