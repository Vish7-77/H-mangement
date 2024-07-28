import React, { useState } from "react";
import { createNewAppointment, getDocTimings } from "../store/action";
import { useDispatch } from "react-redux";
import { TIMINGS } from "../constants";
import toast from "react-hot-toast";

const AppPopup = ({ setIsPopUp, doctorsId }) => {
  const [appDate, setAppDate] = useState("");
  const [timings, setTimings] = useState([]);
  const [timeAdded, setTimeAdded] = useState("");
  const dispatch = useDispatch();

  const getTimings = () => {
    getDocTimings(dispatch, doctorsId, appDate, setTimings);
  };

  const bookSlot = () => {
    if (!appDate || !timeAdded || !doctorsId) {
      toast.error("Add all the fields");
      return;
    }

    createNewAppointment(dispatch, doctorsId, appDate, timeAdded, () => {
      setIsPopUp(false);
    });
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-black bg-opacity-75  z-[999] fixed">
      <div className="flex p-10 min-w-96 bg-white flex-col rounded-lg">
        <div className="flex w-full justify-between items-center">
          <span className="w-52 text-xl font-bold">
            Please choose the appointment date
          </span>
          <button onClick={() => setIsPopUp(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <input
          type="date"
          onChange={(e) => setAppDate(e?.target.value)}
          className="mt-5 border p-2 rounded-md"
          name=""
          id=""
        />
        <button
          onClick={getTimings}
          type="button"
          class="text-white w-fit mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get Timings
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>

        {timings.length <= 0 ? null : (
          <>
            <div className="flex flex-col w-full">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                onChange={(e) => setTimeAdded(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a Timing</option>
                {timings.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={bookSlot}
              type="button"
              class="text-white mt-5 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppPopup;
