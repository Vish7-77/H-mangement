import React, { useEffect } from "react";
import { DOC_IMAGE_URI } from "../constants";
import { fetchDoctors } from "../store/action";
import { useDispatch, useSelector } from "react-redux";

const DoctorsList = () => {
  const { doctors } = useSelector((e) => e.doctorsListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!doctors) {
      fetchDoctors(dispatch);
    }
  }, [doctors]);

  return (
    <div class="relative overflow-x-auto p-10 shadow-md sm:rounded-lg">
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
          {doctors &&
            doctors?.map((e) => (
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
                <td class="px-6 py-4">{e?.userDetails?.position || "N/A"}</td>

                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Book
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsList;
