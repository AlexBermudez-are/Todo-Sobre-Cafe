import { jwtVerify } from "jose"

const JWT_Verify = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) res.status(401).send('Error,  user no verify')
    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(authorization, encoder.encode(process.env.JWT_KEY))
        req.id = payload.id
    } catch (error) {
        res.status(401).send('Error,  user no verify')
    }
}

export { JWT_Verify }