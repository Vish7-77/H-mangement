const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  timeAdded: String,
  dateAdded: String,
  bookedBy: String,
  doctorsId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Apponitment", appointmentSchema);
