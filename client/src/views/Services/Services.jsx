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
        />
      </Link>
      <h1 className={style.title}>Servicios en Curso</h1>
      <div className={style.cards}>
        {vehiculos.map(({ modelo, patenteParam, tipoServicios, index }) => (
          <Card
            key={index}
            modelo={modelo}
            patenteParam={patenteParam}
            tipoServicios={tipoServicios}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
