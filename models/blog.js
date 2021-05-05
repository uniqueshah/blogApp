const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
  desc: {
    type: String,
  },
  author: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
