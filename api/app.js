const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./src/routes/userRoute");
const appRouter = require("./src/routes/appRoute");
app.use(cors());
app.use(express.json());
app.use("/api/v1", userRouter);
app.use("/api/v1", appRouter);

module.exports = app;
