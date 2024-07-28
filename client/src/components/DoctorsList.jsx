import React, { useEffect } from "react";
import { DOC_IMAGE_URI } from "../constants";
import { fetchDoctors } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AppPopup from "./AppPopup";

const DoctorsList = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { doctors } = useSelector((e) => e.doctorsListReducer);
  const [doctorsList, setDotorsList] = useState(doctors);
  const [isPopUp, setIsPopUp] = useState(false);
  const [doctorsId, setDoctorsId] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const list = doctors.filter((e) => {
      if (
        (e?.name)
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase()) ||
        e?.email.toLocaleLowerCase().includes(inputValue) ||
        e?.userDetails?.position
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      ) {
        return e;
      }
    });
    console.log(list);
    setDotorsList(list);
  };

  useEffect(() => {
    if (!doctors) {
      fetchDoctors(dispatch, setDotorsList);
    }
  }, [doctors]);

  return (
    <>
      {isPopUp ? <AppPopup doctorsId={doctorsId} setIsPopUp={setIsPopUp} /> : null}
      <div className="flex flex-col gap-10 p-4 mt-10">
        <div className="flex w-full justify-end ">
          <form onSubmit={handleSearch} class="w-96">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => {
                  if (e?.target.value.length < 3) {
                    setDotorsList(doctors);
                  }
                  setInputValue(e.target.value);
                }}
                value={inputValue}
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Position
                </th>

                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {doctorsList &&
                doctorsList?.map((e) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        class="w-10 h-10 rounded-full"
                        src={DOC_IMAGE_URI}
                        alt="Jese image"
                      />
                      <div class="ps-3">
                        <div class="text-base font-semibold">{e?.name}</div>
                        <div class="font-normal text-gray-500">{e?.email}</div>
                      </div>
                    </th>
                    <td class="px-6 py-4">
                      {e?.userDetails?.position || "N/A"}
                    </td>

                    <td class="px-6 py-4">
                      <button
                        onClick={() => {
                          setDoctorsId(e?._id);
                          setIsPopUp(true);
                        }}
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DoctorsList;
