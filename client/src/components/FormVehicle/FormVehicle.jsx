import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import vehiculos from '../../EjemplosDATA/Vehiculos';
import style from "./FormVehicle.module.css"

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor o procesarlos localmente
    vehiculos.push({
        cliente,
        tipoVehiculo,
        patenteParam,
        whatsapp,
        modelo,
        nombreTrabajador,
        marca,
        tipoServicios
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
        <h1>Crear Servicio</h1>
        <div className={style.divs}>
        <div className={style.div}>
            <div className={style.inputs}>
                <div className={style.lblNombre}>Cliente: </div>
                <input type="text" value={cliente} className={style.textNomb} onChange={(e) => setCliente(e.target.value)} />
            </div>
            <div className={style.inputs}>
                <label>
                    <div className={style.lblNombre}>Tipo de vehiculo: </div>
                    <select value={tipoVehiculo} className={style.customSelect} onChange={(e) => setTipoVehiculo(e.target.value)}>
                        <option value="">Selecciona un tipo de vehiculo</option>
                        <option value="sedan">Sedán</option>
                        <option value="camioneta">Camioneta</option>
                        <option value="moto">Moto</option>
                        <option value="camion">Camion</option>
                    </select>
                </label>
            </div>

            <div className={style.lblNombre}>Patente: </div>
            <h2 className={style.h2Patente}> {patenteParam}</h2>

            <div className={style.inputs}>
                <div className={style.lblNombre}>WhatsApp: </div>   
                <input type="text" value={whatsapp} className={style.textNomb} onChange={(e) => setWhatsapp(e.target.value)} />
            </div>
        </div>
        <div className={style.div}>
        <div className={style.inputs}>
            <div className={style.lblNombre}>Modelo: </div> 
            <input type="text" value={modelo} className={style.textNomb} onChange={(e) => setModelo(e.target.value)} />
        </div>

        <div className={style.inputs}>
            <div className={style.lblNombre}>Marca: </div>
            <input type="text" value={marca} className={style.textNomb} onChange={(e) => setMarca(e.target.value)} />
        </div>


        <div className={style.inputs}>
            <div className={style.lblNombre}>Nombre trabajador: </div>
            <input type="text" value={nombreTrabajador} className={style.textNomb} onChange={(e) => setNombreTrabajador(e.target.value)} />
        </div>

        <div className={style.inputs}>
            <label>
                <div className={style.lblNombre}>Tipo de servicios: </div>
                <select value={tipoServicios} className={style.customSelect} onChange={(e) => setTipoServicios(e.target.value)}>
                    <option value="">Selecciona un tipo de servicio</option>
                    <option value="Lavado simple">Lavado simple</option>
                    <option value="Lavado con espuma">Lavado con espuma</option>
                    <option value="Lavado Detallado">Lavado Detallado</option>
                    <option value="Lavado con encerado">Lavado con encerado</option>
                </select>
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