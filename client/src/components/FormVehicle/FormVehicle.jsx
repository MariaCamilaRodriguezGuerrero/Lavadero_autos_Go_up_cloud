import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./FormVehicle.module.css"
import Select from 'react-select'

const FormVehicle = () => {
  const [cliente, setCliente] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [modelo, setModelo] = useState('');
  const [nombreTrabajador, setNombreTrabajador] = useState('');
  const [marca, setMarca] = useState('');
  const [tipoServicios, setTipoServicios] = useState();
  const { patenteParam } = useParams();
  const navigate = useNavigate();

  const { ongoingServices } = useSelector((state) => state);

  const ejemplosServicios = [
    { value: "2000", label: "Lavado simple", name: "Lavado simple" },
    { value: "1500", label: "Lavado con espuma", name: "Lavado con espuma" },
    { value: "800", label: "Lavado Detallado", name: "Lavado Detallado" },
    { value: "1800", label: "Lavado con Encerado", name: "Lavado con Encerado" },
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
    if (cliente.trim() === '') {
      isValid = false;
      document.getElementById('clienteError').textContent = 'Ingrese el nombre del cliente';
    } else {
      document.getElementById('clienteError').textContent = '';
    }

    if (tipoVehiculo === '') {
      isValid = false;
      document.getElementById('tipoVehiculoError').textContent = 'Seleccione el tipo de vehículo';
    } else {
      document.getElementById('tipoVehiculoError').textContent = '';
    }

    if (whatsapp.trim() === '') {
      isValid = false;
      document.getElementById('whatsappError').textContent = 'Ingrese el número de WhatsApp';
    } else {
      document.getElementById('whatsappError').textContent = '';
    }

    if (nombreTrabajador.length === 0) {
      isValid = false;
      document.getElementById('nombreTrabajadorError').textContent = 'Seleccione al menos un trabajador';
    } else {
      document.getElementById('nombreTrabajadorError').textContent = '';
    }

    if (tipoServicios.length === 0) {
      isValid = false;
      document.getElementById('tipoServiciosError').textContent = 'Seleccione al menos un tipo de servicio';
    } else {
      document.getElementById('tipoServiciosError').textContent = '';
    }

    if (isValid) {
      ongoingServices.unshift({
        cliente,
        tipoVehiculo,
        patenteParam,
        whatsapp,
        modelo,
        nombreTrabajador: nombreTrabajador.map((e) => e.value),
        marca,
        tipoServicios: tipoServicios.map((e) => e),
      });

      navigate(`/services`);
    }
  };

  const handleWhatsappChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // Filtrar solo caracteres numéricos
    setWhatsapp(inputValue);
  };

  return (
    <>
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
              <input type="text" value={cliente} className={style.textNomb} onChange={(e) => setCliente(e.target.value)} />
            </div>
            <div className={style.inputs}>
              <label>
                <div className={style.lblNombre}>Tipo de vehiculo* </div>
                <div id="tipoVehiculoError" className={style.error}></div>
                <select value={tipoVehiculo} className={style.customSelect} onChange={(e) => setTipoVehiculo(e.target.value)}>
                  <option value="">Selecciona un tipo de vehiculo</option>
                  <option value="Sedán">Sedán</option>
                  <option value="Camioneta">Camioneta</option>
                  <option value="Moto">Moto</option>
                  <option value="Camion">Camion</option>
                </select>
              </label>
            </div>

            <div className={style.lblNombre}>Patente* </div>
            <h2 className={style.h2Patente}> {patenteParam}</h2>

            <div className={style.inputs}>
              <div className={style.lblNombre}>WhatsApp* </div>
              <div id="whatsappError" className={style.error}></div>
              <input type="text" value={whatsapp} className={style.textNomb} onChange={handleWhatsappChange} />
            </div>
            <div className={style.inputs}>
              <div className={style.lblNombre}>Modelo </div>
              <input type="text" value={modelo} className={style.textNomb} onChange={(e) => setModelo(e.target.value)} />
            </div>
          </div>
          <div className={style.div}>
            <div className={style.inputs}>
              <div className={style.lblNombre}>Marca </div>
              <input type="text" value={marca} className={style.textNomb} onChange={(e) => setMarca(e.target.value)} />
            </div>

            <div className={style.inputs}>
              <label>
                <div className={style.lblNombre}>Nombre trabajador* </div>
                <div id="nombreTrabajadorError" className={style.error}></div>
                <Select
                  options={ejemplosTrabajador}
                  isMulti
                  classNamePrefix="select"
                  value={nombreTrabajador}
                  className={style.customSelect2}
                  placeholder="Seleccione un trabajador"
                  onChange={(e) => setNombreTrabajador(e)}
                />
              </label>
            </div>

            <div className={style.inputs}>
              <label>
                <div className={style.lblNombre}>Tipo de servicios* </div>
                <div id="tipoServiciosError" className={style.error}></div>
                <Select
                  options={ejemplosServicios}
                  isMulti
                  classNamePrefix="select"
                  className={style.customSelect2}
                  value={tipoServicios}
                  placeholder="Seleccione un tipo de servicio"
                  onChange={(e) => setTipoServicios(e)}
                />
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className={style.submit}>Enviar</button>
      </form>
    </>
  );
};

export default FormVehicle;