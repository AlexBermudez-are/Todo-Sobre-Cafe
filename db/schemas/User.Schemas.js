import mongoose from "mongoose";

// Se crea el esquema validador de mongoose destructurando 'Schema? de mongoose

const { Schema, model } = mongoose;

// se instancia un nuevo Schema 

const schemaObjectMongoose = new Schema({
    name: { type: String, minLenght: 5, maxLength: 20, required: true },
    surname: { type: String, minLenght: 5, maxLength: 20, required: true },
    email: { type: String, minLenght: 5, maxLength: 20, required: true },
    cp: { type: Number, max: 5, required: true },
    tel: { type: Number, max: 10, required: true },
    password: { type: String, required: true }
})

// Se instancia el modelo en una const y se exporta

export const UserModelSchema = model('user', schemaObjectMongoose)