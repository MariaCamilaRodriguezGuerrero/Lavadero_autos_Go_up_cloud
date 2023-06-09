import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "./FormService.module.css";
import Select from "react-select";
import { getServices, getWorkers } from "../../redux/actions/actions";

const FormService = () => {
  const [workers, setWorkers] = useState([]);
  const [services, setServices] = useState([]);
  const [optionsServices, setOptionsServices] = useState([]);
  const [optionsWorkers, setOptionsWorkers] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { servicesData, workersData } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getServices());
    dispatch(getWorkers());
  }, [dispatch]);

  useEffect(() => {
    servicesData.length &&
      setOptionsServices(
        servicesData
          .filter((service) => service.vehicleType === vehicleType.value)
          .map((service) => {
            return {
              label: service.serviceName,
              value: service.serviceName,
            };
          })
      );
  }, [servicesData]);

  useEffect(() => {
    workersData.length &&
      setOptionsWorkers(
        workersData.map((worker) => {
          return {
            label: worker.name,
            value: worker.name,
          };
        })
      );
  }, [workersData]);

  if (!location.state.patent || !location.state.vehicleType)
    return <h2 style={{ marginTop: "100px" }}>Sin Datos</h2>;
  const { patent, vehicleType } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    // Validar campos requeridos
    /*
    if (workers.length === 0) {
      isValid = false;
      document.getElementById("nombreTrabajadorError").textContent =
        "Seleccione al menos un trabajador";
    } else {
      document.getElementById("nombreTrabajadorError").textContent = "";
    }

    if (services.length === 0) {
      isValid = false;
      document.getElementById("tipoServiciosError").textContent =
        "Seleccione al menos un tipo de servicio";
    } else {
      document.getElementById("tipoServiciosError").textContent = "";
    }
    */

    if (isValid) {
      var today = new Date();
      const year = today.getFullYear();
      const month =
        today.getMonth() + 1 < 10
          ? `0${today.getMonth() + 1}`
          : today.getMonth() + 1;
      const day =
        today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
      let hours =
        today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
      let minutes =
        today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
      let seconds =
        today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

      var dateTime = `${year}${month}${day}${hours}${minutes}${seconds}`;

      console.log({
        idVehicle: patent,
        services: selectedServices.map((service, index) => {
          return {
            id: service.value,
            workers: selectedWorkers[index].map((worker) => worker.value),
            date: dateTime,
          };
        }),
      });

      //navigate(`/services`);
    }
  };

  const filterOptions = () => {
    setOptionsServices(
      servicesData
        .filter((service) => service.vehicleType === vehicleType.value)
        .map((service) => {
          return {
            label: service.serviceName,
            value: service.serviceName,
          };
        })
        .filter((service) => {
          let filteredService = true;
          for (let i = 0; i < selectedServices.length; i++) {
            if (selectedServices[i].value === service.value)
              filteredService = false;
          }
          return filteredService;
        })
    );
  };
  const servicesChangeHandler = (value, action) => {
    const num = action.name;
    let servicesPrev = selectedServices;
    servicesPrev[num] = value;
    setSelectedServices(servicesPrev);
    filterOptions();
  };
  const workersChangeHandler = (value, action) => {
    const num = action.name;
    let workersNew = selectedWorkers;
    workersNew[num] = value;
    setSelectedWorkers(workersNew);
  };

  const selectStyles = {
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    valueContainer: (styles) => ({ ...styles, paddingLeft: "36px" }),
  };
  const selectTheme = (theme) => ({
    ...theme,
    borderRadius: "20px",
    colors: {
      ...theme.colors,
      primary25: "#3cd8f0",
      primary: "black",
    },
  });
  return (
    <div>
      <Link to={"/formVehicle"} state={patent}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className={style.title}>Crear Servicio</h1>
        <div className={style.inputDiv}>
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsServices}
            value={selectedServices[0]}
            onChange={servicesChangeHandler}
            name="0"
          ></Select>
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
            name="0"
          ></Select>
        </div>
        <div className={style.inputDiv}>
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            theme={selectTheme}
            styles={selectStyles}
            options={optionsServices}
            className={style.select}
            value={selectedServices[1]}
            onChange={servicesChangeHandler}
            name="1"
          ></Select>
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            styles={selectStyles}
            options={optionsWorkers}
            className={style.select}
            value={selectedWorkers[1]}
            onChange={workersChangeHandler}
            name="1"
          ></Select>
        </div>
        <div className={style.inputDiv}>
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            theme={selectTheme}
            styles={selectStyles}
            options={optionsServices}
            className={style.select}
            value={selectedServices[2]}
            onChange={servicesChangeHandler}
            name="2"
          ></Select>
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            styles={selectStyles}
            options={optionsWorkers}
            className={style.select}
            value={selectedWorkers[2]}
            onChange={workersChangeHandler}
            name="2"
          ></Select>
        </div>
        <div className={style.inputDiv}>
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            theme={selectTheme}
            styles={selectStyles}
            options={optionsServices}
            className={style.select}
            value={selectedServices[3]}
            onChange={servicesChangeHandler}
            name="3"
          ></Select>
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            styles={selectStyles}
            options={optionsWorkers}
            className={style.select}
            value={selectedWorkers[3]}
            onChange={workersChangeHandler}
            name="3"
          ></Select>
        </div>
        <button type="submit" className={style.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormService;
