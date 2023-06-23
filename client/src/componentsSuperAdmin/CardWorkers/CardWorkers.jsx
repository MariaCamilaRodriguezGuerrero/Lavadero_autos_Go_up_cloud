// CardWorkers.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CardWorkers.module.css";
import { getWorkers, getPayment } from "../../redux/actions/actions";
import { Link, useNavigate, useLocation } from "react-router-dom";

const CardWorkers = () => {
  const { workersData } = useSelector((state) => state);
  console.log(workersData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getWorkers());
    }, 100);
  }, [dispatch]);

  const paymentHandler = (event) => {
    dispatch(getPayment(event.target.name));
    setTimeout(() => {
      navigate("/su/workersregistration/payment", {
        state: { background: location },
      });
    }, 100);
  };

  return (
    <div>
      <h1 className={styles.title}>Lista de Trabajadores</h1>
      <Link to="/su/formRegistration">
        <button className={styles.submit}>Agregar / Editar</button>
      </Link>
      <div className={styles.cardContainer}>
        {!!workersData.length &&
          workersData.map((worker) => (
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
                <strong>Porcentaje de ganancias:</strong>{" "}
                {worker.profitPercentage}%
              </p>
              <p>
                <strong>Porcentaje despues de la meta:</strong>{" "}
                {worker.percentageAfterGoal}%
              </p>
              <p>
                <strong>Meta:</strong> {worker.goal}
              </p>
              <button
                type="button"
                className={styles.pagar}
                onClick={paymentHandler}
                name={worker.rut_passport}
              >
                Pagar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardWorkers;
