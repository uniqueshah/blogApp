const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const seedDB = require("./seed");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// Routes
const productRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");

mongoose
  .connect("mongodb://localhost:27017/blogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log("Connection error!!");
    console.log(err.message);
  });

// seedDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const sessionConfig = {
  secret: "weneedbettersecret",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionConfig));
app.use(flash());

// Initialising passport and sessions for storing users info
app.use(passport.initialize());
app.use(passport.session());

// Configuring the passport to use local Strategy
passport.use(new LocalStrategy(User.authenticate()));

// Serializing and deserializing user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.send("Landing Page is in progress..");
});

app.use(productRoutes);
app.use(authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
