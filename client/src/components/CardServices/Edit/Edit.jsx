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
          <h3>Agregar servicios</h3>
          {/*
          <form className={style.form} onSubmit={submitHandler}>
            <h1 className={style.title}>Crear Servicios</h1>
            <div className={style.inputDiv}>
              <Select
                classNamePrefix="select"
                placeholder="Seleccione un tipo de servicio"
                isClearable={true}
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsServices}
                value={selectedServices[0]}
                onChange={servicesChangeHandler}
                name={0}
              />
              <Select
                isMulti
                classNamePrefix="select"
                placeholder="Seleccione Trabajadores"
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsWorkers}
                value={selectedWorkers[0]}
                onChange={workersChangeHandler}
                name={0}
              />
            </div>
            <div className={style.inputDivDynamic} id="1">
              <Select
                classNamePrefix="select"
                placeholder="Seleccione un tipo de servicio"
                isClearable={true}
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsServices}
                value={selectedServices[1]}
                onChange={servicesChangeHandler}
                name={1}
              />
              <Select
                isMulti
                classNamePrefix="select"
                placeholder="Seleccione Trabajadores"
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsWorkers}
                value={selectedWorkers[1]}
                onChange={workersChangeHandler}
                name={1}
              />
              <button
                type="button"
                onClick={eraseField}
                name={1}
                className={style.eraseFieldBtn}
              >
                x
              </button>
            </div>
            <div className={style.inputDivDynamic} id="2">
              <Select
                classNamePrefix="select"
                placeholder="Seleccione un tipo de servicio"
                isClearable={true}
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsServices}
                value={selectedServices[2]}
                onChange={servicesChangeHandler}
                name={2}
              />
              <Select
                isMulti
                classNamePrefix="select"
                placeholder="Seleccione Trabajadores"
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsWorkers}
                value={selectedWorkers[2]}
                onChange={workersChangeHandler}
                name={2}
              />
              <button
                type="button"
                onClick={eraseField}
                name={2}
                className={style.eraseFieldBtn}
              >
                x
              </button>
            </div>
            <div className={style.inputDivDynamic} id="3">
              <Select
                classNamePrefix="select"
                placeholder="Seleccione un tipo de servicio"
                isClearable={true}
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsServices}
                value={selectedServices[3]}
                onChange={servicesChangeHandler}
                name={3}
              />
              <Select
                isMulti
                classNamePrefix="select"
                placeholder="Seleccione Trabajadores"
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsWorkers}
                value={selectedWorkers[3]}
                onChange={workersChangeHandler}
                name={3}
              />
              <button
                type="button"
                onClick={eraseField}
                name={3}
                className={style.eraseFieldBtn}
              >
                x
              </button>
            </div>
            <div className={style.inputDivDynamic} id="4">
              <Select
                classNamePrefix="select"
                placeholder="Seleccione un tipo de servicio"
                isClearable={true}
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsServices}
                value={selectedServices[4]}
                onChange={servicesChangeHandler}
                name={4}
              />
              <Select
                isMulti
                classNamePrefix="select"
                placeholder="Seleccione Trabajadores"
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsWorkers}
                value={selectedWorkers[4]}
                onChange={workersChangeHandler}
                name={4}
              />
              <button
                type="button"
                onClick={eraseField}
                name={4}
                className={style.eraseFieldBtn}
              >
                x
              </button>
            </div>
            <div className={style.inputDivDynamic} id="5">
              <Select
                classNamePrefix="select"
                placeholder="Seleccione un tipo de servicio"
                isClearable={true}
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsServices}
                value={selectedServices[5]}
                onChange={servicesChangeHandler}
                name={5}
              />
              <Select
                isMulti
                classNamePrefix="select"
                placeholder="Seleccione Trabajadores"
                theme={selectTheme}
                className={style.select}
                styles={selectStyles}
                options={optionsWorkers}
                value={selectedWorkers[5]}
                onChange={workersChangeHandler}
                name={5}
              />
              <button
                type="button"
                onClick={eraseField}
                name={5}
                className={style.eraseFieldBtn}
              >
                x
              </button>
            </div>
            {error && <p className={style.error}>{error}</p>}
            <button type="button" onClick={addFields} className={style.addBtn}>
              +
            </button>
            <button className={style.submit} type="submit">
              Enviar
            </button>
          </form>
*/}
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
