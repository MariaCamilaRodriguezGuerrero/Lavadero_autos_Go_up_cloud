const Card = ({cliente,
    tipoVehiculo,
    patenteParam,
    whatsapp,
    modelo,
    nombreTrabajador,
    marca,
    tipoServicios}) => {
  
    return (
    <div>
        <p>Cliente: {cliente}</p>
        <p>Tipo Vehiculo: {tipoVehiculo}</p>
        <p>Tipo Patente: {patenteParam}</p>
        <p>Whatsapp: {whatsapp}</p>
        <p>Modelo: {modelo}</p>
        <p>Nombre Trabajador: {nombreTrabajador}</p>
        <p>Marca: {marca}</p>
        <p>Tipo de Servicio: {tipoServicios}</p>
      </div>
    );
  }; 

export default Card;