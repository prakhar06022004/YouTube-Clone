import bcrypt from "bcrypt";
import User from "../model/userSchema.js";
import cloudinary from "../config/cloudinary.js";
import validator from "validator";
import { generateToken } from "../config/jwt.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email", field: "email" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Minimum 8 characters required", field: "password" });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        field: "email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

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
      return res
        .status(400)
        .json({ message: "User not found", field: "password" });
    }
    const comparePassword = await bcrypt.compare(password, loginUser.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ message: "Incorrect password", field: "password" });
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

export const logOut = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  return res.status(200).json({
    message: "Logout successful",
  });
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot get user",
      error: error.message,
    });
  }
};
