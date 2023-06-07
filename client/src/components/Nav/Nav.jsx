import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav() {
  const location = useLocation();

  return (
    <div className={style.nav}>
      <Link to={"/"} className={style.itemLogout}>
        Cerrar sesión
      </Link>
      <Link
        to={"/createVehicle"}
        className={
          (location.pathname === "/createVehicle") |
          (location.pathname === "/formVehicle") |
          (location.pathname === "/formService")
            ? style.itemActive
            : style.item
        }
      >
        Ingresar Vehiculo
      </Link>
      <Link
        to={"/services"}
        className={
          location.pathname === "/services" ? style.itemActive : style.item
        }
      >
        Servicios En Curso
      </Link>
      <Link
        to={"/dashboard"}
        className={
          location.pathname === "/dashboard" ? style.itemActive : style.item
        }
      >
        Resumen del Día
      </Link>
    </div>
  );
}
