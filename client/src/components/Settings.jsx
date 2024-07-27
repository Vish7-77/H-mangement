import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedPosition } from "../store/action";

const Settings = () => {
  const { userData } = useSelector((e) => e.userReducer);
  const [inputValue, setInputValue] = useState(userData?.userDetails?.position || "N/a");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updatedPosition(dispatch, inputValue);
  };

  return (
    <div className="flex p-10 w-full ">
      <form
        onSubmit={handleFormSubmit}
        className="flex w-1/2 border-r-2 gap-3 p-10 flex-col text-white"
      >
        <span>Position</span>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
          type="text"
          className="bg-gray-300 border p-2 w-2/3  rounded-md text-black"
        />

        <button className="bg-blue-500 w-32 py-1 mt-4 rounded-xl">Save</button>
      </form>
      <div className="flex p-10 flex-col text-white">
        <span>
          The Appointments are booked on day basis every day can be a new
          Appointment
        </span>
      </div>
    </div>
  );
};

export default Settings;
