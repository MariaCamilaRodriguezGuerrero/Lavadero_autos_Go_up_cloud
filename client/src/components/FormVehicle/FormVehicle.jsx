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
  const [tipoServicios, setTipoServicios] = useState('');
  const { patenteParam } = useParams();
  const navigate = useNavigate();

  const{ ongoingServices} = useSelector((state) => state);

  const ejemplosServicios = [
    { value: "lavado simple", label: "Lavado simple" },
    { value: "lavado con espuma", label: "Lavado con espuma" },
    { value: "lavado detallado", label: "Lavado Detallado" },
    { value: "lavado con encerado", label: "Lavado con Encerado" },
  ];

  const ejemplosTrabajador = [
    { value: "yhilmar", label: "Yhilmar" },
    { value: "lautaro", label: "Lautaro" },
    { value: "duvan", label: "Duvan" },
    { value: "maría", label: "María" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor o procesarlos localmente
    ongoingServices.push({
        cliente,
        tipoVehiculo,
        patenteParam,
        whatsapp,
        modelo,
        nombreTrabajador: nombreTrabajador.map((e) => e.value),
        marca,
        tipoServicios: tipoServicios.map((e) => e.value),
      })
    navigate(`/services`);
  };

  return ( <>
        <Link to={"/createVehicle"}>
            <img
            className={style.backBtn}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
            alt=""/>
        </Link> 
        <form onSubmit={handleSubmit}>
        <h1 className={style.h1title}>Crear Servicio</h1>
        <div className={style.divs}>
        <div className={style.div}>
            <div className={style.inputs}>
                <div className={style.lblNombre}>Cliente: </div>
                <input type="text" value={cliente} className={style.textNomb} onChange={(e) => setCliente(e.target.value)} />
            </div>
            <div className={style.inputs}>
                <label>
                    <div className={style.lblNombre}>Tipo de vehiculo: </div>
                    <select value={tipoVehiculo} className={style.customSelect}  onChange={(e) => setTipoVehiculo(e.target.value)}>
                        <option value="">Selecciona un tipo de vehiculo</option>
                        <option value="Sedán">Sedán</option>
                        <option value="Camioneta">Camioneta</option>
                        <option value="Moto">Moto</option>
                        <option value="Camion">Camion</option>
                    </select>
                </label>
            </div>

            <div className={style.lblNombre}>Patente: </div>
            <h2 className={style.h2Patente}> {patenteParam}</h2>

            <div className={style.inputs}>
                <div className={style.lblNombre}>WhatsApp: </div>   
                <input type="text" value={whatsapp} className={style.textNomb} onChange={(e) => setWhatsapp(e.target.value)} />
            </div>
        <div className={style.inputs}>
            <div className={style.lblNombre}>Modelo: </div> 
            <input type="text" value={modelo} className={style.textNomb} onChange={(e) => setModelo(e.target.value)} />
        </div>
        </div>
        <div className={style.div}>

        <div className={style.inputs}>
            <div className={style.lblNombre}>Marca: </div>
            <input type="text" value={marca} className={style.textNomb} onChange={(e) => setMarca(e.target.value)} />
        </div>


        <div className={style.inputs}>
                <label>
                    <div className={style.lblNombre}>Nombre trabajador: </div>
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
                <div className={style.lblNombre}>Tipo de servicios: </div>
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