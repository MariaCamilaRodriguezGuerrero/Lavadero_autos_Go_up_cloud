import style from "./Home.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={style.mainDiv}>
      <h1 className={style.title}>Panel de Inicio</h1>
      <div className={style.menuDiv}>
        <Link to="/CreateVehicle">
          <button className={style.btn}>Ingresar Vehiculo</button>
        </Link>
        <Link to="/services">
          <button className={style.btn}>Servicios En Curso</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
