const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: {
    type:String,
    unique:true,
  },
  password: String,
  role: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userDetails: Object,
});



module.exports = mongoose.model("User", UserSchema);
