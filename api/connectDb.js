const mongoose = require("mongoose");
const URI  = process.env.MONGO_URI


exports.connectDb = () => {
  mongoose
    .connect(URI)
    .then((res) => console.log(`mongo connected at ${res.connection.host}`))
    .catch((err) => console.error(`Error in mongo connect ${err?.message}`));
};
