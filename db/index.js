import './config/env.js'
import { createServerHttp } from './config/Http';
import { connectMongoose } from './config/mongoose';

const init = async () => {

    await connectMongoose(process.env.MONGODB_URL)

    createServerHttp.listen(process.env.PORT, () => { console.log("init") })
}

init()