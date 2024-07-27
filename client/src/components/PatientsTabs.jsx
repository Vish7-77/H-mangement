import React, { useState } from "react";
import Tabs from "./Tabs";
import DoctorsList from "./DoctorsList";
import Appointments from "./Appointments";

const PatientsTabs = () => {
    const [tab, setTab] = useState("BA");
  return (
    <>
      <Tabs tab={tab} setTab={setTab} />
      {tab == "BA" ? <DoctorsList/> : <Appointments/>}
    </>
  );
};

export default PatientsTabs;
