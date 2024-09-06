require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const morgan = require("morgan");
const port = process.env.PORT;
const dbURL = process.env.MONGO_URI;
const passport = require("passport");
require("./helpers/passport");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false
    })
  );

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("login.ejs");
});
app.use((req, res, next)=>{
    res.locals.user = req.user ;
  next();
})
const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");

app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

app.listen(port, async () => {
  await mongoose
    .connect(dbURL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
  console.log(`Server Started at http://localhost:${port}`);
});
