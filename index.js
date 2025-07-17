require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { RestrictToLoggedIn, AddUser } = require("./middlewares/auth");
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
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", RestrictToLoggedIn, urlRouter);
app.use("/home", AddUser, staticRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
