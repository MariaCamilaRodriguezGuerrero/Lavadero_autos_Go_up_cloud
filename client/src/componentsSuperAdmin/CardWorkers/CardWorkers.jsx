import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./CardWorkers.module.css";
import { getWorkers } from "../../redux/actions/actions";

const CardWorkers = () => {
  const { workersData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkers());
  }, [dispatch]);

  return (
    <div>
      <h1 className={style.title}>Lista de Trabajadores</h1>
      {workersData.map((worker) => (
        <div key={worker.id} className={style.card}>
          <p>
            <strong>RUT o Pasaporte:</strong> {worker.rut_passport}
          </p>
          <p>
            <strong>Nombre:</strong> {worker.name}
          </p>
          <p>
            <strong>Dirección:</strong> {worker.address}
          </p>
          <p>
            <strong>Sede:</strong> {worker.branch}
          </p>
          <p>
            <strong>Porcentaje de ganancias:</strong> {worker.profitPercentage}%
          </p>
          <p>
            <strong>Meta:</strong> {worker.goal}
          </p>
          <p>
            <strong>Porcentaje después de la meta:</strong>{" "}
            {worker.percentageAfterGoal}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardWorkers;