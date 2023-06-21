import React, { useState } from "react";
import CardWorkers from "../../componentsSuperAdmin/CardWorkers/CardWorkers";
import FormWorkers from "../../componentsSuperAdmin/FormWorkersRegistration/FormWorkersRegistration";
import style from "../workersregistration/WorkersRegistration.module.css";

const WorkersRegistration = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = () => {
    setShowForm(false);
  };

  return (
    <div className={style.mainDiv}>
      {!showForm && <CardWorkers />}
      {!showForm && (
        <button className={style.submit} onClick={() => setShowForm(true)}>Mostrar Formulario</button>
      )}
      {showForm && (
        <FormWorkers onFormSubmit={handleFormSubmit} onCancel={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default WorkersRegistration;