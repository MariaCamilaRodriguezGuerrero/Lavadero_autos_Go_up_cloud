import React from "react";
import CardWorkers from "../../componentsSuperAdmin/CardWorkers/CardWorkers";
import FormWorkers from "../../componentsSuperAdmin/FormWorkersRegistration/FormWorkersRegistration";
import style from "../workersregistration/WorkersRegistration.module.css";

const WorkersRegistration = () => {

  return (
    <div className={style.mainDiv}>
    <CardWorkers />
    {/* <FormWorkers /> */}
    </div>
  );
};

export default WorkersRegistration;