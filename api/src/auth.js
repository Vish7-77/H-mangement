const { getUserFromId } = require("./services/userService");
const { respo } = require("./util");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    console.log(req.headers)
    if (!token) {
      return respo(res, 400, "Invalid request");
    }
    console.log(token,">>")
    const { id } = jwt.decode(token, process.env.JWT_SECRET);
    if (!id) {
      return respo(res, 400, "Invalid request");
    }
    const user = await getUserFromId(id);
    console.log(id,user);
    req.user = user;
    next();
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};
