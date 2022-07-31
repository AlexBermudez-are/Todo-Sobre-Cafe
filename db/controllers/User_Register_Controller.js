import { hash } from "bcrypt";
import { UserModelSchema } from "../schemas/Mongoose.Schemas.js";

const User_Register_Controller = async (req, res) => {
    const { _id, email, cp, tel, name, surname, password } = req.body;
    const existingUserID = await UserModelSchema.findById(_id).exec(),
        existingEmailUser = await UserModelSchema.findOne({ email }).exec();

    if (existingEmailUser) return res.status(409).send({ error: ['Error, there is already an account created with that email'] });
    if (existingUserID) return res.status(409).send({ error: ['Error, there is already an account created with that id'] })

    try {

        const passwordCrypted = await hash(password, 12)

        const userRegisterSuccesfully = new UserModelSchema({
            _id,
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