const User = require("../models/userModel");

exports.getUserFromId = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
