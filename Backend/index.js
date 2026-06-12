import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/databaseConnect.js";
import userRouter from "./routes/userRouter.js";

const app = express();

dotenv.config();

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello from serverr");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
