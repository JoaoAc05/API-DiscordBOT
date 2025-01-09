import express from "express";
import LoginController from "../src/Controller/LoginController.js";

const LoginRouter = express.Router();
const loginController = new LoginController();

LoginRouter.post("/", loginController.login);


export default LoginRouter;