import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Edit.module.css";

const Edit = () => {
  const location = useLocation();
  const {
    client,
    whatsapp,
    licensePlate,
    model,
    workers,
    services,
    brand,
    vehicleType,
  } = location.state.data;

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/services`);
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modalContent}>
        <Link to={"/services"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
            alt=""
            className={style.backBtn}
          />
        </Link>
        <div className={style.titleDiv}>
          <h1 className={style.title}>Editar Servicio de vehiculo</h1>
        </div>
        <div className={style.dataContainer}>
          <div className={style.dataContainer1}>
            <div className={style.dataItem}>
              <span className={style.dataLabel}>Cliente:</span>
              <span className={style.dataValue}>{client}</span>
            </div>
            <div className={style.dataItem}>
              <span className={style.dataLabel}>WhatsApp:</span>
              <span className={style.dataValue}>{whatsapp}</span>
            </div>
            <div className={style.dataItem}>
              <span className={style.dataLabel}>Patente:</span>
              <span className={style.dataValue}>{licensePlate}</span>
            </div>
          </div>
          <div className={style.dataContainer2}>
            <div className={style.dataItem}>
              <span className={style.dataLabel}>Modelo:</span>
              <span className={style.dataValue}>{model}</span>
            </div>
            <div className={style.dataItem}>
              <span className={style.dataLabel}>Marca:</span>
              <span className={style.dataValue}>{brand}</span>
            </div>
            <div className={style.dataItem}>
              <span className={style.dataLabel}>Tipo de vehiculo:</span>
              <span className={style.dataValue}>{vehicleType}</span>
            </div>
          </div>
        </div>

        <div className={style.servicesWorkerDiv}>
          {services.map((service) => (
            <div className={style.servicesDiv}>
              <span className={style.services}>
                · {service.serviceName} ${service.cost}
              </span>

              <div className={style.workersDiv}>
                {service.workers.map((worker) => (
                  <span className={style.worker}>· {worker}</span>
                ))}
              </div>
              <div className={style.buttondelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </div>
            </div>
          ))}
          <div className={style.botonagregar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <button type="submit" className={style.submitBtn}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
