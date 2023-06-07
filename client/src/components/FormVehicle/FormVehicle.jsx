import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "./FormVehicle.module.css";
import Nav from "../Nav/Nav";

const FormVehicle = () => {
  const [client, setClient] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state) return <h2>Sin Datos</h2>;
  const { patent } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validar campos requeridos
    if (client.trim() === "") {
      isValid = false;
      document.getElementById("clienteError").textContent =
        "Ingrese el nombre del cliente";
    } else {
      document.getElementById("clienteError").textContent = "";
    }

    if (vehicleType === "") {
      isValid = false;
      document.getElementById("tipoVehiculoError").textContent =
        "Seleccione el tipo de vehículo";
    } else {
      document.getElementById("tipoVehiculoError").textContent = "";
    }

    if (whatsapp.trim() === "") {
      isValid = false;
      document.getElementById("whatsappError").textContent =
        "Ingrese el número de WhatsApp";
    } else {
      document.getElementById("whatsappError").textContent = "";
    }
    navigate(`/formService`, {
      state: {
        client,
        vehicleType,
        patent,
        whatsapp,
        model,
        brand,
      },
    });
  };

  const handleWhatsappChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Filtrar solo caracteres numéricos
    setWhatsapp(inputValue);
  };

  return (
    <div>
      <Nav/>
      <Link to={"/createVehicle"}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className={style.h1title}>Crear Servicio</h1>
        <p className={style.h2subtitle}>Los campos con * son obligatorios</p>
        <div className={style.divs}>
          <div className={style.div}>
            <div className={style.inputs}>
              <div className={style.lblNombre}>Cliente* </div>
              <div id="clienteError" className={style.error}></div>
              <input
                type="text"
                value={client}
                className={style.textNomb}
                onChange={(e) => setClient(e.target.value)}
              />
            </div>
            <div className={style.inputs}>
              <label>
                <div className={style.lblNombre}>Tipo de vehiculo* </div>
                <div id="tipoVehiculoError" className={style.error}></div>
                <select
                  value={vehicleType}
                  className={style.customSelect}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option value="">Selecciona un tipo de vehiculo</option>
                  <option value="Sedán">Sedán</option>
                  <option value="Camioneta">Camioneta</option>
                  <option value="Moto">Moto</option>
                  <option value="Camion">Camion</option>
                </select>
              </label>
            </div>

            <div className={style.lblNombre}>Patente* </div>
            <h2 className={style.h2Patente}> {patent}</h2>

            <div className={style.inputs}>
              <div className={style.lblNombre}>WhatsApp* </div>
              <div id="whatsappError" className={style.error}></div>
              <input
                type="text"
                value={whatsapp}
                className={style.textNomb}
                onChange={handleWhatsappChange}
              />
            </div>
            <div className={style.inputs}>
              <div className={style.lblNombre}>Modelo </div>
              <input
                type="text"
                value={model}
                className={style.textNomb}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
          </div>
          <div className={style.div}>
            <div className={style.inputs}>
              <div className={style.lblNombre}>Marca </div>
              <input
                type="text"
                value={brand}
                className={style.textNomb}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className={style.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormVehicle;
