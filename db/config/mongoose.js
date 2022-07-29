import mongoose from "mongoose";

const connectMongoose = (url) => mongoose.connect(url).then(console.log("congratulations"))

export { connectMongoose }