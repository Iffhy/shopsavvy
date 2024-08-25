import express from "express";
import {login, registration } from "../contollers/authController.js";



const authRouter = express.Router();

authRouter.post("/register", registration);

authRouter.post("/login", login);


export default authRouter;