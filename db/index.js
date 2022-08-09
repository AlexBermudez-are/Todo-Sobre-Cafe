import '#Config/env.js'; // Importa la configuracion de .Env
import { connectMongoose } from '#Config/mongoose.js';
// Importa la funcion para conectar mongoose

import { createServerHttp } from '#Config/Http.js';


const init = async () => {

    await connectMongoose(process.env.MONGODB_URL);

    createServerHttp.listen(process.env.PORTDB, () => { console.log("Servidor funcionando") })
}

init()