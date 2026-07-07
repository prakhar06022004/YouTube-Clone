import express from "express";
import { logIn, logOut, signUp } from "../controller/authController.js";
import upload from "../middleware/multer.js";

const authRouter = express.Router();

authRouter.post("/signup", upload.single("image"), signUp);
authRouter.post("/login", logIn);
authRouter.post("/logout", logOut);

export default authRouter;
