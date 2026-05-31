import Ajv from 'ajv';

export class SchemaValidator {

    private static ajv = new Ajv();

    static validate(
        schema: object,
        response: object
    ) {

        const validate =
            this.ajv.compile(schema);

        const valid =
            validate(response);

        if (!valid) {

            throw new Error(
                JSON.stringify(
                    validate.errors,
                    null,
                    2
                )
            );
        }
    }
}