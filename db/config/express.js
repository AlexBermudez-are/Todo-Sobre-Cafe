import express from 'express';
import RouteExpressApp from '../routes/RoutesExpressApp.js';
import cors from 'cors'


const expressApp = express();
expressApp.use(express.json())
expressApp.use(cors())
expressApp.use(express.urlencoded({ extended: true }))

expressApp.use('/user', RouteExpressApp)

export { expressApp }