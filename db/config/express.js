import express from 'express';
import RouteExpressApp from '../routes/RoutesExpressApp.js';
import cors from 'cors'


const expressApp = express();
expressApp.use(express.json())
// expressApp.use(cors())
// expressApp.use(express.urlencoded({ extended: true }))

// expressApp.use(function (req, res, next) {
//     req.is('json')
//     req.is('application/json')
//     req.is('application/*')
//     req.is('html')
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     res.header("Cache-Control", "no-cache, no-store, must-revalidate");
//     next();
// });

expressApp.use('/user', RouteExpressApp)

export { expressApp }