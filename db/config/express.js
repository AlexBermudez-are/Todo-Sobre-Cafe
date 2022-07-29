import express from 'express';

const expressApp = express();

expressApp.use(express.json())

export { expressApp }