import mongoose from "mongoose";

const connectMongoose = (url) => mongoose.connect(url)

connectMongoose
    ? console.log("congratulations, we are successfully connected to mongoose")
    : console.log("Error, could not connect to mongoose")

export { connectMongoose }