import { typesSchemaEmail, typesSchemaPassword } from "../schemas/Typebox.Schemas.js";
import { Type } from "@sinclair/typebox";
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';

const SchemaLoginAJV = Type.Object(
    {
        email: typesSchemaEmail,
        password: typesSchemaPassword
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Error, additional data not allowed',
        },
    }
);

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

ajv.addFormat('password', /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/); // validacion personalizada
addFormats(ajv, ['email']); // Validaciones por defecto
addErrors(ajv);

const compilerAjv = ajv.compile(SchemaLoginAJV);

const User_Login_DTO = (req, res, next) => {

    const compiler_Ajv_Data_Login = compilerAjv(req.body);

    if (!compiler_Ajv_Data_Login)
        return res.status(400).send({
            errors: compilerAjv.errors.map((error) => error.message)
        });

    next();

}

export { User_Login_DTO }