import express from 'express';
import RouteExpressApp from '../routes/RoutesExpressApp.js';

const expressApp = express();

expressApp.use(express.json())

expressApp.use('/user', RouteExpressApp)

export { expressApp }