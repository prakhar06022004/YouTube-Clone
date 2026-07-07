import express from "express";
import { jwtVerify } from "../middleware/jwtVerify.js";
import { getMe } from "../controller/authController.js";

const userRouter = express.Router();
userRouter.get("/me", jwtVerify, getMe);
export default userRouter;
