const express = require("express");
const {
  getAllAppointments,
  getTimings,
  createNewAppointment,
} = require("../controllers/appController");
const { auth } = require("../auth");
const router = express.Router();

router.get("/appointments", auth, getAllAppointments);
router.post("/appointment", auth, createNewAppointment);
router.get("/appointment/timings", auth, getTimings);

module.exports = router;
