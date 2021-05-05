const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const Review = require("../models/review");
const { isLoggedIn } = require("../middleware");

// Display All Blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.render("blogs/index", { blogs });
  } catch (e) {
    console.log(e.messgage);
    req.flash("error", "Cannot find Blogs!!");
    res.render("error");
  }
});

// Getting a form to add new blog
router.get("/blogs/new", isLoggedIn, (req, res) => {
  res.render("blogs/new");
});

// Addding a new blog
router.post("/blogs", isLoggedIn, async (req, res) => {
  try {
    await Blog.create(req.body.blog);
    req.flash("success", "Blog created Successfully");
    res.redirect("/blogs");
  } catch (e) {
    console.log(e.messgae);
    req.flash("error", "Cannot create Blog!!");
    res.render("error");
  }
});

// Show a particular blog
router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("reviews");
    res.render("blogs/show", { blog });
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot find Blog!!");
    res.redirect("/error");
  }
});

// Getting a form to edit/update a blog
router.get("/blogs/:id/edit", isLoggedIn, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.render("blogs/edit", { blog });
  } catch (e) {
    console.log(e.message);
    req.flash("error", "Cannot edit this blog!!");
    res.redirect("/error");
  }
});

// Updating a blog
router.patch("/blogs/:id", isLoggedIn, async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
    req.flash("success", "Blog Updated Successfully!!");
    res.redirect(`/blogs/${req.params.id}`);
  } catch (e) {
    console.log(e.message);
    req.flash("error", "Cannot update this Blog!!");
    res.redirect("/error");
  }
});

// Deleting a blog
router.delete("/blogs/:id", isLoggedIn, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    req.flash("success", "Blog deleted Successfully!!");
    res.redirect("/blogs");
  } catch (e) {
    console.log(e.message);
    req.flash("error", "Cannot delete Blog!!");
    res.redirect("/error");
  }
});

// creating a comment on a blog
router.post("/blogs/:id/review", isLoggedIn, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    const review = new Review({
      user: req.user.username,
      ...req.body,
    });

    blog.reviews.push(review);

    await review.save();
    await blog.save();
    req.flash("success", "Review Added Successfully!!");
    res.redirect(`/blogs/${req.params.id}`);
  } catch (e) {
    console.log(e.message);
    req.flash("error", "Cannot add review to this blog!!");
    res.redirect("/error");
  }
});

router.get("/error", (req, res) => {
  res.status(404).render("error");
});

module.exports = router;
