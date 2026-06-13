import bcrypt from "bcrypt";
import User from "../model/userSchema.js";
import cloudinary from "../config/cloudinary.js";
import validator from "validator";
import { generateToken } from "../config/jwt.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "Password should be strong" });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await cloudinary.uploader.upload(req.file.path);

    const imageUrl = result.secure_url;

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      imageUrl,
    });

    const jwtToken = await generateToken(user._id);

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "Sign up successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Sign up failed",
      error: error.message,
    });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await User.findOne({ email });
    if (!loginUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const comparePassword = await bcrypt.compare(password, loginUser.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const jwtToken = await generateToken(loginUser._id);

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "Login successfully", loginUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Login failed", error: error.message });
  }
};
