// CardWorkers.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CardWorkers.module.css";
import { getWorkers } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const CardWorkers = () => {
  const { workersData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getWorkers()); 
    }, 100);
  }, [dispatch]);
  
  return (
    <div>
      <h1 className={styles.title}>Lista de Trabajadores</h1>
      <Link to="/su/formRegistration">
        <button className={styles.submit}>Agregar / Editar</button>
      </Link>
      <div className={styles.cardContainer}>
        {!!workersData.length && workersData.map((worker) => (
          <div key={worker.id} className={styles.card}>
            <p>
              <strong>RUT o Pasaporte:</strong> {worker.rut_passport}
            </p>
            <p>
              <strong>Nombre:</strong> {worker.name}
            </p>
            <p>
              <strong>Dirección:</strong> {worker.address || "No ingresado"}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWorkers;
