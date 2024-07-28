import React  from "react";
import Profile from "../components/Profile";
import { useSelector } from "react-redux";
import PatientsTabs from "../components/PatientsTabs";
import DoctorsTabs from "../components/DoctorsTabs";

const Home = () => {
  const { userData } = useSelector((e) => e.userReducer);

  return (
    <div className="flex w-full min-h-screen bg-gray-900 flex-col">
      <Profile role={userData?.role} userData={userData} />
      {userData?.role == "DOC" ? (
        <>
          {" "}
          <DoctorsTabs />
        </>
      ) : (
        <PatientsTabs />
      )}
    </div>
  );
};

export default Home;
