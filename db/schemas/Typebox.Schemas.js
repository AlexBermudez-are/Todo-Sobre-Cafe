import { Type } from '@sinclair/typebox'

export const typesSchemaId = Type.String({

    format: 'uuid',

    errorMessage: {
        type: "Error, the id is wrong, it must be a 'String'",
        format: "Error, the id is not valid, it must be a uiid4",
    }

})

export const typesSchemaName = Type.String({

    minLength: 5,
    maxLength: 20,
    errorMessage: {
        minLength: 'The name must have a minimum of 5 characters.',
        maxLength: 'The name must have a maximum of 20 characters.',
        type: "Error, the name is wrong, it must be a 'String'",
        format: "Error, the name is incorrect, it must not have a number or another character"
    },

})

export const typesSchemaSurname = Type.String({

    minLength: 5,
    maxLength: 20,
    errorMessage: {
        minLength: 'The surname must have a minimum of 5 characters',
        maxLength: 'The surname must have a maximum of 20 characters',
        type: "Error, the surname is wrong, it must be a 'String'",
        format: "Error, the surname is incorrect, it must not have a number or another character"
    },

})

export const typesSchemaEmail = Type.String({

    format: "email",
    minLength: 5,
    maxLength: 25,
    errorMessage: {
        minLength: 'The email must have a minimum of 5 characters',
        maxLength: 'The email must have a maximum of 25 characters',
        type: "Error, the email is wrong, it must be a 'String'",
        format: 'Error, the email format is not valid, it must comply with RFC 5322',
    },

})

export const typesSchemaPassword = Type.String({

    format: "password",

    errorMessage: {
        type: "Error, the password is wrong, it must be a 'String'",
        format: "The format of the password must contain an uppercase, a lowercase and a number",
    },

})

export const typesSchemaCP = Type.String({
    minLength: 5,
    maxLength: 5,
    errorMessage: {
        minLength: 'Error, the zip code must have a minimum of 5 characters',
        maxLength: 'Error, the zip code must have a maximum of 5 characters',
        type: "Error, zip code number must be a String",
        format: "Error, the postal code only admits numbers"
    },
})

export const typesSchemaTel = Type.String({
    minLength: 10,
    maxLength: 10,
    errorMessage: {
        maxLength: 'The number of telephone must have a maximum of 10 characters',
        minLength: 'The number of telephone must have a minimum of 10 characters',
        type: "Error, the phone number must be a String",
        format: "Error, the telephone number only admits numbers"
    },
})