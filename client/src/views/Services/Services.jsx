import { Link } from "react-router-dom";
import Card from '../../components/Card/Card';
import vehiculos from "../../EjemplosDATA/Vehiculos";

const Services = () => {
  
    return (
      <>
        <Link to={"/home"}>
            <button>atrás</button>
        </Link> 
        <h1>Servicio en Curso</h1>
        {vehiculos.map( ({cliente,
          tipoVehiculo,
          patenteParam,
          whatsapp,
          modelo,
          nombreTrabajador,
          marca,
          tipoServicios, 
          index}) => 
        <Card 
          key={index} 
          cliente={cliente} 
          patenteParam={patenteParam}
          whatsapp={whatsapp}
          modelo={modelo}
          nombreTrabajador={nombreTrabajador}
          tipoVehiculo={tipoVehiculo}
          marca={marca}
          tipoServicios={tipoServicios}
        />)}
      </>
      )
  }; 

export default Services;