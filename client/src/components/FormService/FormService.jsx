import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./FormService.module.css";
import Select from "react-select";

const FormService = () => {
  const [workers, setWorkers] = useState([]);
  const [services, setServices] = useState([]);
  const [options, setOptions] = useState([
    { value: "2000", label: "Lavado Simple", name: "lavado simple" },
    { value: "1500", label: "Lavado con Espuma", name: "lavado con espuma" },
    { value: "800", label: "Lavado Detallado", name: "lavado detallado" },
    {
      value: "1800",
      label: "Lavado con Encerado",
      name: "lavado con encerado",
    },
  ]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (services.length) {
      let optionsNew = ejemplosServicios.map((option) =>
        console.log(services.filter((service) => option.name !== service.name))
      );
      setOptions(optionsNew);
    }
  }, [services]);

  if (!location.state) return <h2 style={{ marginTop: "100px" }}>Sin Datos</h2>;
  const { patent } = location.state;

  const { ongoingServices } = "";

  const ejemplosServicios = [
    { value: "2000", label: "Lavado Simple", name: "lavado simple" },
    { value: "1500", label: "Lavado con Espuma", name: "lavado con espuma" },
    { value: "800", label: "Lavado Detallado", name: "lavado detallado" },
    {
      value: "1800",
      label: "Lavado con Encerado",
      name: "lavado con encerado",
    },
  ];
  const ejemplosTrabajador = [
    { value: "yhilmar", label: "Yhilmar" },
    { value: "lautaro", label: "Lautaro" },
    { value: "duvan", label: "Duvan" },
    { value: "maría", label: "María" },
  ];

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
      var date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + " " + time;

      console.log({
        idVehicle: patent,
        services: services.map((service, index) => {
          return {
            id: service.name,
            workers: workers[index].map((worker) => worker.value),
            date: dateTime,
          };
        }),
      });

      //navigate(`/services`);
    }
  };

  const servicesChangeHandler = (value, action) => {
    const num = action.name;
    let servicesPrev = services;
    servicesPrev[num] = value;
    setServices(servicesPrev);
  };
  const workersChangeHandler = (value, action) => {
    const num = action.name;
    let workersNew = workers;
    workersNew[num] = value;
    setWorkers(workersNew);
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
            options={options}
            value={services[0]}
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
            value={workers[0]}
            options={ejemplosTrabajador}
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
            options={options}
            className={style.select}
            value={services[1]}
            onChange={servicesChangeHandler}
            name="1"
          ></Select>
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            styles={selectStyles}
            options={ejemplosTrabajador}
            className={style.select}
            value={workers[1]}
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
            options={options}
            className={style.select}
            value={services[2]}
            onChange={servicesChangeHandler}
            name="2"
          ></Select>
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            styles={selectStyles}
            options={ejemplosTrabajador}
            className={style.select}
            value={workers[2]}
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
            options={options}
            className={style.select}
            value={services[3]}
            onChange={servicesChangeHandler}
            name="3"
          ></Select>
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            styles={selectStyles}
            options={ejemplosTrabajador}
            className={style.select}
            value={workers[3]}
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
