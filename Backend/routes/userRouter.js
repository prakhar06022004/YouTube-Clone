import express from "express";
import upload from "../middleware/multer.js";
import { signUp } from "../controller/authController.js";

const userRouter = express.Router();
userRouter.post("/signup", upload.single("image"), signUp);
export default userRouter;
