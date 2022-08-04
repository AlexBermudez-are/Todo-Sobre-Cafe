import {
    typesSchemaEmail,
    typesSchemaPassword,
    typesSchemaCP,
    typesSchemaName,
    typesSchemaSurname,
    typesSchemaTel,
    typesSchemaId
} from "../schemas/Typebox.Schemas.js";
import { Type } from "@sinclair/typebox";
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import Ajv from 'ajv';

let errorsARR = []

const SchemaRegisterAJV = Type.Object(
    {
        password: typesSchemaPassword,
        surname: typesSchemaSurname,
        email: typesSchemaEmail,
        name: typesSchemaName,
        tel: typesSchemaTel,
        _id: typesSchemaId,
        cp: typesSchemaCP,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Error, additional data not allowed',
        }
    }
)

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

addErrors(ajv)
addFormats(ajv, ['email', 'uuid'])

ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
ajv.addFormat('cp', /[0-9]{5}/)
ajv.addFormat('tel', /[0-9]{10}/)
ajv.addFormat('name', /^(?=.*[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s])*$/)
ajv.addFormat('surname', /^(?=.*[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s])*$/)

const compilerRegisterAJV = ajv.compile(SchemaRegisterAJV)

const User_Register_DTO = (req, res, next) => {

    const compiler_Ajv_Data_Register = compilerRegisterAJV(req.body)


    const { cp, tel, name, surname } = req.body,
        telParsed = Number(tel),
        cpParsed = Number(cp);

    let nameParsed,
        surnameParsed

    function filterNameSurname() {

        var regex = /(\d+)/g;

        nameParsed = name.match(regex)
        surnameParsed = surname.match(regex);

        return {
            nameParsed,
            surnameParsed
        }
    }

    filterNameSurname()


    if (!telParsed || !cpParsed) {

        if (!telParsed) errorsARR.push({
            nameError: 'tel',
            error: 'Error, the phone number must be a Number'
        })
        if (!cpParsed) errorsARR.push({
            nameError: 'cp',
            error: 'Error, the zip code must be a Number'
        })


    }

    if (nameParsed || surnameParsed) {
        if (nameParsed) errorsARR.push({
            nameError: 'name',
            error: 'Error, the name must not contain numbers'
        })
        if (surnameParsed) errorsARR.push({
            surnameError: 'surname',
            error: 'Error,the surname must not contain numbers'
        })
    }

    if (!compiler_Ajv_Data_Register) {
        return res.status(400).send({
            errors: compilerRegisterAJV.errors.map((error) => error.message),
        })
    }

    if (errorsARR.length) {
        res.status(400).send({
            errors: errorsARR.map(el => el.error)
        })
        return errorsARR = []
    }

    next();

}

export { User_Register_DTO }