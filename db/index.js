import '#Config/env.js';
import { connectMongoose } from '#Config/mongoose.js';
import { createServerHttp } from '#Config/Http.js';

const init = async () => {

    await connectMongoose(process.env.MONGODB_URL);

    createServerHttp.listen(3000, () => { console.log(process.env.PORT, process.env.MONGODB_URL) })
}

init()