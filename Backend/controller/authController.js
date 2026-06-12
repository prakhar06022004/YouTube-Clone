import bcrypt from "bcrypt";
import User from "../model/userSchema.js";
import cloudinary from "../config/cloudinary.js";
import validator from "validator";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "Password should be strong" });
    }
    const userSignup = await User.findOne({ email });

    if (userSignup) {
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
