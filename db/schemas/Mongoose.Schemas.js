import mongoose from "mongoose";

// Se crea el esquema validador de mongoose destructurando 'Schema? de mongoose

const { Schema, model } = mongoose;

// se instancia un nuevo Schema 

const schemaObjectMongoose = new Schema({
    _id: { type: String, _id: false, required: true },
    cp: { type: String, minLength: 5, maxLength: 5, required: true },
    tel: { type: String, minLength: 10, maxLength: 10, required: true },
    name: { type: String, minLength: 5, maxLength: 20, required: true },
    email: { type: String, minLength: 5, maxLength: 25, required: true },
    surname: { type: String, minLength: 5, maxLength: 20, required: true },
    password: { type: String, minLength: 8, required: true },
})



// Se instancia el modelo en una const y se exporta

export const UserModelSchema = model('user', schemaObjectMongoose)