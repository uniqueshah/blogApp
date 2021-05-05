const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// Getting a signup form to register a user
router.get("/register", (req, res) => {
  res.render("auth/signup");
});

// Registering a user
router.post("/register", async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
    });
    await User.register(user, req.body.password);
    req.flash("success", "Registered Successfully!!");
    res.redirect("/blogs");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
});

// Getting a form to login a user
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// Logging a user
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", `Welcome, ${req.user.username}`);
    res.redirect("/blogs");
  }
);

// Logging out a user
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "Logged out Successfully!!");
  res.redirect("/login");
});

module.exports = router;
