import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Edit.module.css";

const Edit = () => {
  const location = useLocation();
  const { client, whatsapp, patent, model, workers, services } =
    location.state.data;

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
          <h1 className={style.title}>EDIT</h1>
        </div>
        <div className={style.dataContainer}>
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
            <span className={style.dataValue}>{patent}</span>
          </div>
          <div className={style.dataItem}>
            <span className={style.dataLabel}>Modelo:</span>
            <span className={style.dataValue}>{model}</span>
          </div>
          <div className={style.dataItem}>
            <span className={style.dataLabel}>Nombre Trabajador:</span>
            <span className={style.dataValue}>{workers}</span>
          </div>
          <div className={style.dataItem}>
            <span className={style.dataLabel}>Tipo de servicio:</span>
            <span className={style.dataSpan}>
              {services &&
                services.map((e) => (
                  <span key={e.value}>
                    {" "}
                    {e.name} - {e.value}
                  </span>
                ))}
            </span>
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
