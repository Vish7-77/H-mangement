const { ROLES } = require("../../constants");
const User = require("../models/userModel");
const { respo } = require("../util");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUpUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return respo(res, 400, "Please enter all the details");
    }
    if (!ROLES.includes(role)) {
      return respo(res, 400, "Role doesn't match");
    }
    const encPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: encPassword,
      role,
    });
    respo(res, 201, user);
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};

exports.signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return respo(res, 400, "Please enter all the details");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return respo(res, 404, "we dont have any user on that");
    }
    const isPassMatch = await bcrypt.compare(password, user?.password);
    if (!isPassMatch) {
      return respo(res, 403, "Invalid Creds");
    }
    const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET);
    respo(res, 200, { user, token });
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};

exports.getUserData = async (req, res) => {
  try {
    console.log(req.user);
    respo(res, 200, { user: req.user });
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};

exports.getAllDocs = async (req, res) => {
  try {
    const doctors = await User.find({ role: "DOC" });
    respo(res, 200, doctors);
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};

exports.saveDocsPosition = async (req, res) => {
  try {
    const { position } = req.body;
    const newUser = {
      ...JSON.parse(JSON.stringify(req.user)),
      userDetails: {
        position,
      },
    };

    console.log(newUser);
    const updatedUser = await User.findByIdAndUpdate(req.user._id, newUser, {
      new: true,
    });
    respo(res, 200, updatedUser);
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};
