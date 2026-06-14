import express from "express";
import upload from "../middleware/multer.js";
import { logIn, logOut, signUp } from "../controller/authController.js";

const userRouter = express.Router();
userRouter.post("/signup", upload.single("image"), signUp);
userRouter.post("/login", logIn);
userRouter.post("/logout", logOut);
export default userRouter;
