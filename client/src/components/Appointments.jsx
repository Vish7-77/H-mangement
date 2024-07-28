import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMyAppointments } from "../store/action";

const Appointments = () => {
  const { appointments } = useSelector((e) => e.myAppointmentsReducer);
  const [myAppointments, setMyAppointments] = useState(appointments);
  const { doctors } = useSelector((e) => e.doctorsListReducer);
  const dispatch = useDispatch();

  const { userData } = useSelector((e) => e.userReducer);
  useEffect(() => {
    if (!appointments) {
      getAllMyAppointments(dispatch, setMyAppointments);
    }
  }, []);

  const getDoctorName = (id) => {
    return doctors?.find((e) => e._id == id).name;
  };

  return (
    <div class="relative p-10 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Date of Apponintment
            </th>
            <th scope="col" class="px-6 py-3">
              Time
            </th>
            {userData?.role == "PAT" && (
              <th scope="col" class="px-6 py-3">
                Doctor id
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {myAppointments?.length > 0
            ? myAppointments.map((e) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {e?.dateAdded}
                  </th>
                  <td class="px-6 py-4">{e?.timeAdded}</td>
                  {userData?.role == "PAT" && (
                    <td class="px-6 py-4">
                      {getDoctorName(e?.doctorsId) || e?.doctorsId}
                    </td>
                  )}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
