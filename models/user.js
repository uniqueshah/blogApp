const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSachema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSachema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSachema);

module.exports = User;
