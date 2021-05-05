const Blog = require("./models/blog");

const blogs = [
  {
    title: "Blog-1",
    img:
      "https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:
      "Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry",
    author: "Tony Stark",
  },
  {
    title: "Blog-2",
    img:
      "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:
      "Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry",
    author: "Thor",
  },
  {
    title: "Blog-3",
    img:
      "https://images.unsplash.com/photo-1615761896293-6d24716c2222?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:
      "Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry",
    author: "Captain",
  },
  {
    title: "Blog-4",
    img:
      "https://images.unsplash.com/photo-1540450134379-75379fadd892?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:
      "Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry",
    author: "Vision",
  },
  {
    title: "Blog-5",
    img:
      "https://images.unsplash.com/photo-1619623495531-2cf3ba190d5e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:
      "Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry",
    author: "Hulk",
  },
  {
    title: "Blog-6",
    img:
      "https://images.unsplash.com/photo-1619426072479-bd165fb9d592?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:
      "Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry",
    author: "Black Widow",
  },
  {
    title: "Blog-7",
    img:
      "https://images.unsplash.com/photo-1619253187768-ff0262fb08b2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:
      "Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry",
    author: "Spiderman",
  },
  {
    title: "Blog-8",
    img:
      "https://images.unsplash.com/photo-1619090602676-858b448037ba?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:
      "Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry Lorem ipsum gypsum that means we are studying chemistry",
    author: "Hawkaeye",
  },
];

const seedDB = async () => {
  await Blog.insertMany(blogs);
  console.log("Databse seeded!!");
};

module.exports = seedDB;
