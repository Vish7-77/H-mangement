const express = require("express");
const app = express();
const cors  = require('cors')
const userRouter = require("./src/routes/userRoute");
app.use(cors())
app.use(express.json());
app.use("/api/v1", userRouter);


module.exports = app;
