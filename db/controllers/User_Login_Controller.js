import { compare } from "bcrypt";
import { SignJWT } from "jose";
import { UserModelSchema } from "../schemas/Mongoose.Schemas.js"

const User_Login_Controller = async (req, res) => {
    const { password, email } = req.body

    const userExist = await UserModelSchema.findOne({ email }).exec();
    if (!userExist) return res.status(403).send({ Error: 'Error, the email does not match any account created.' });

    const passwordOk = await compare(password, userExist.password);
    if (!passwordOk) return res.status(403).send({ Error: 'Error, password does not match.' });

    const jwtConstructor = new SignJWT({ id: userExist._id });

    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
        .setProtectedHeader({
            alg: 'HS256',
            typ: 'JWT',
        })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encoder.encode(process.env.JWT_KEY));
    return res.send({jwt})
}

export { User_Login_Controller }