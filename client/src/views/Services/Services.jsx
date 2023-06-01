import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import vehiculos from "../../EjemplosDATA/Vehiculos";
import style from "./Services.module.css";

const Services = () => {
  return (
    <div className={style.mainDiv}>
      <Link to={"/home"}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""/>
      </Link>
      <h1 className={style.title}>Servicios en Curso</h1>
      <div className={style.cards}>
        {vehiculos.map(({ cliente,
          tipoVehiculo,
          patenteParam,
          modelo,
          nombreTrabajador,
          tipoServicios,
          index }) => (
          <Card
            key={index}
            tipoVehiculo={tipoVehiculo}
            modelo={modelo}
            patenteParam={patenteParam}
            cliente={cliente}
            nombreTrabajador={nombreTrabajador}
            tipoServicios={tipoServicios}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
