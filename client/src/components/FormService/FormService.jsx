import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./FormService.module.css";
import Select from "react-select";
import Nav from "../Nav/Nav";

const FormService = () => {
  const [workers, setWorkers] = useState([]);
  const [services, setServices] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state) return <h2>Sin Datos</h2>;
  const { client, vehicleType, patent, whatsapp, model, brand } =
    location.state;

  const { ongoingServices } = "";

  const ejemplosServicios = [
    { value: "2000", label: "Lavado simple", name: "Lavado simple" },
    { value: "1500", label: "Lavado con espuma", name: "Lavado con espuma" },
    { value: "800", label: "Lavado Detallado", name: "Lavado Detallado" },
    {
      value: "1800",
      label: "Lavado con Encerado",
      name: "Lavado con Encerado",
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
    console.log(services);
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

    if (isValid) {
      ongoingServices.unshift({
        client,
        vehicleType,
        patent,
        whatsapp,
        model,
        workers,
        brand,
        services,
      });

      navigate(`/services`);
    }
    */
  };

  return (
    <div>
      <Nav/>
      <Link to={"/formVehicle"} state={patent}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className={style.h1title}>Crear Servicio</h1>
        <div  className={style.divs}>
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            options={ejemplosServicios}
            className={style.customSelect2}
            value={services[0]}
            onChange={(e) => setServices([...services, (services[0] = e)])}
          ></Select>
          <Select
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            options={ejemplosTrabajador}
            className={style.customSelect2}
            value={workers}
            onChange={(e) => setWorkers((workers[0] = e))}
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
