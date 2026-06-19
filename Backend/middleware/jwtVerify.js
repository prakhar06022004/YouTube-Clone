import jwt from "jsonwebtoken";

export const jwtVerify = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.userId = decoded.userId;

  next();
};
