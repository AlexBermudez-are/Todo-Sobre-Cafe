import mongoose from "mongoose";

// Se crea el esquema validador de mongoose destructurando 'Schema? de mongoose

const { Schema, model } = mongoose;

// se instancia un nuevo Schema 

const schemaObjectMongoose = new Schema({
    id: { type: String, _id: false },
    cp: { type: Number, min: 5, max: 5, required: true },
    tel: { type: Number, min: 10, max: 10, required: true },
    name: { type: String, minLenght: 5, maxLength: 20, required: true },
    email: { type: String, minLenght: 5, maxLength: 25, required: true },
    surname: { type: String, minLenght: 5, maxLength: 20, required: true },
    password: { type: String, minLength: 8, maxLength: 16, required: true },
})

// Se instancia el modelo en una const y se exporta

export const UserModelSchema = model('user', schemaObjectMongoose)