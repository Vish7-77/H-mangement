import React, { useState } from "react";
import Appointments from "./Appointments";
import Settings from "./Settings";
import DocsTab from "./DocsTab";

const DoctorsTabs = () => {
  const [tab, setTab] = useState("AP");
  return (
    <>
      <DocsTab tab={tab} setTab={setTab} />
      {tab == "AP" ? <Appointments /> : <Settings />}
    </>
  );
};

export default DoctorsTabs;
