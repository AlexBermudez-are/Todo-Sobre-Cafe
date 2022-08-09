import { hash } from "bcrypt";
import { UserModelSchema } from "../schemas/Mongoose.Schemas.js";

const User_Register_Controller = async (req, res) => {
    const { email, cp, tel, name, surname, password } = req.body;
    const existingEmailUser = await UserModelSchema.findOne({ email }).exec();
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    if (existingEmailUser) return res.status(409).send({ error: ['Error, there is already an account created with that email'] });

    try {

        const passwordCrypted = await hash(password, 12)

        const userRegisterSuccesfully = new UserModelSchema({
            dateIssuedAt: hoy,
            email,
            cp,
            tel,
            name,
            surname,
            password: passwordCrypted,
        })

        await userRegisterSuccesfully.save()

        return res.status(201).send('The user is created succesfully')

    } catch (error) {
        return res.status(400).send({ error: error })
    }
}

export { User_Register_Controller }