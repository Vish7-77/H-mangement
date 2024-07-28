const { ROLES } = require("../../constants");
const Apponitment = require("../models/appointmentModel");
const { respo } = require("../util");

exports.createNewAppointment = async (req, res) => {
  try {
    // get the data from body
    const { timeAdded, dateAdded, doctorsId } = req.body;

    // add a check whether you have all the required data
    if (!timeAdded || !dateAdded || !doctorsId) {
      return respo(res, 400, "Please add up all the details");
    }

    const bookedBy = req.user._id;
    // check is that user is Patient or not - if not throw an erro
    if (req.user.role != ROLES[1]) {
      return respo(res, 400, "Doctors are not allowed to book appointments");
    }

    // check that on the selected date and time do we have any other doctor appointment
    const isAppointmentAvail = await Apponitment.find({
      timeAdded,
      dateAdded,
      doctorsId,
    });

    // if we have any app. then throw error
    if (isAppointmentAvail.length > 0) {
      return respo(
        res,
        400,
        "Appointment is not available on the selected time and Date"
      );
    }

    // craete a new apponitment if slot is available
    const newAppointment = await Apponitment.create({
      timeAdded,
      dateAdded,
      doctorsId,
      bookedBy,
    });
    respo(res, 201, newAppointment);
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    // lets init a appointments and do not give a value
    let appointments;

    // if any user who is doc  hitting this API on controller. then we will take all appointments from doctorsID
    if (req.user.role == "DOC") {
      appointments = await Apponitment.find({
        doctorsId: String(req.user._id),
      });
    }
    // if any user who is pat  hitting this API on controller. then we will take all appointments from bookedBy
    if (req.user.role == "PAT") {
      appointments = await Apponitment.find({
        bookedBy: String(req.user._id),
      });
    }

    respo(res, 200, appointments);
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};

exports.getTimings = async (req, res) => {
  try {
    if (req.user.role != "PAT") {
      return respo(res, 500, "Doctors are not allowed to fetch this resource");
    }
    const { doctorsId, dateAdded } = req.query;
    const timings = await Apponitment.find({ doctorsId, dateAdded });
    const newTimeArr = [];

    if (timings.length > 0) {
      for (let i = 0; i <= timings.length; i++) {
        newTimeArr.push(timings[i]?.timeAdded);
      }
    }

    respo(res, 200, newTimeArr);
  } catch (error) {
    const messsage = error?.message;
    respo(res, 500, messsage);
  }
};
