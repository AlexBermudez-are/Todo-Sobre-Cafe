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
        minLength: 'The name must have a minimun of 5 characters.',
        maxLength: 'The name must have a maximum of 20 characters.',
        type: "Error, the name is wrong, it must be a 'String'",
        format:"Error, the name is incorrect, it must not have a number or another character"
    },

})

export const typesSchemaSurname = Type.String({

    minLength: 5,
    maxLength: 20,
    errorMessage: {
        minLength: 'The surname must have a minimun of 5 characters.',
        maxLength: 'The surname must have a maximum of 20 characters.',
        type: "Error, the surname is wrong, it must be a 'String'",
        format:"Error, the surname is incorrect, it must not have a number or another character"
    },

})

export const typesSchemaEmail = Type.String({

    format: "email",

    maxLength: 25,
    errorMessage: {
        maxLength: 'The name must have a maximum of 25 characters.',
        type: "Error, the email is wrong, it must be a 'String'",
        format: 'Error, the email format is not valid, it must comply with RFC 5322',
    },

})

export const typesSchemaPassword = Type.String({

    format: "password",

    minLength: 8,
    maxLength: 16,
    errorMessage: {
        type: "The password is wrong, try again",
        format:"The format of the password must contain an uppercase, a lowercase and a number",
        minLength: 'The name must have a minimun of 8 characters.',
        maxLength: 'The name must have a maximum of 16 characters.',
    },

})

export const typesSchemaCP = Type.Integer({
    maxLength: 5,
    errorMessage: {
        minLength: 'The name must have a minimun of 8 characters.',
        maxLength: 'The name must have a maximum of 16 characters.',
        type:"Error, zip code is not a number, please try again",
        format:"Error, zip code is incorrect, please try again"
    },
})

export const typesSchemaTel = Type.Integer({
    MinLength:10,
    errorMessage: {
        minLength: 'The number of telephone must have a minimun of 10 characters.',
        type:"error the phone contains unsupported characters, try again",
        format:"Error, the telephone is incorrect, it must not have a number or another character"
    },
})