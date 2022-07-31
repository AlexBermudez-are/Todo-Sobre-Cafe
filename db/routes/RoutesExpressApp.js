import { Router } from "express"
import { User_Register_Controller } from "../controllers/User_Register_Controller.js";
import { User_Login_DTO } from "../dto/User_Login_DTO.js";
import { User_Register_DTO } from "../dto/User_Register_DTO.js";
import { JWT_Verify } from "../JWT/User_Web_Token.js";

const Route = Router();

Route.post('/login', User_Login_DTO, JWT_Verify)
Route.post('/register', User_Register_DTO, User_Register_Controller);
Route.get('/profile', JWT_Verify);
Route.delete('/forgotten-password', JWT_Verify);

export default Route