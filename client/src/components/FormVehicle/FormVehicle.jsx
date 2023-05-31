import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import vehiculos from '../../EjemplosDATA/Vehiculos';

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
            <button>atrás</button>
        </Link> 
        <form onSubmit={handleSubmit}>
        <h1>Crear Servicio</h1>
        <h2>Patente: {patenteParam}</h2>
        <label>
            Cliente:
            <input type="text" value={cliente} onChange={(e) => setCliente(e.target.value)} />
        </label>
        <br />
        <label>
            Tipo de vehiculo:
            <select value={tipoVehiculo} onChange={(e) => setTipoVehiculo(e.target.value)}>
            <option value="">Selecciona un tipo de vehiculo</option>
            <option value="sedan">Sedán</option>
            <option value="camioneta">Camioneta</option>
            <option value="moto">Moto</option>
            <option value="camion">Camion</option>
            </select>
        </label>
        <br />
        <label>
            WhatsApp:
            <input type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
        </label>
        <br />
        <label>
            Modelo:
            <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        </label>
        <br />
        <label>
            Nombre trabajador:
            <input type="text" value={nombreTrabajador} onChange={(e) => setNombreTrabajador(e.target.value)} />
        </label>
        <br />
        <label>
            Marca:
            <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </label>
        <br />
        <label>
            Tipo de servicios:
            <select value={tipoServicios} onChange={(e) => setTipoServicios(e.target.value)}>
            <option value="">Selecciona un tipo de servicio</option>
            <option value="Lavado simple">Lavado simple</option>
            <option value="Lavado con espuma">Lavado con espuma</option>
            <option value="Lavado Detallado">Lavado Detallado</option>
            <option value="Lavado con encerado">Lavado con encerado</option>
            </select>
        </label>
        <br />
        <button type="submit">Enviar</button>
        </form>
    </>
  );
};

export default FormVehicle;