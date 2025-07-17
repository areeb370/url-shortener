require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./connect");
const PORT = 3001;

const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/user");

connectDB(process.env.MONGO_DB_USER_KEY)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRouter);
app.use("/home", staticRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
