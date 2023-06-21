import { Link, useLocation } from "react-router-dom";
import style from "./NavSuperAdmin.module.css";

export default function NavSuperAdmin() {
  const location = useLocation();


  return (
    <div className={style.nav}>
      {/* Desktop Menu */}
      <div className={style.desktopMenu}>
        <Link
          to={"/su"}
          className={
            location.pathname === "/su" ? style.itemActive : style.item
          }
        >
          Resumen del Día
        </Link>
        <Link
          to={"/su/billingListSuperAdmin"}
          className={
            location.pathname === "/su/billingListSuperAdmin" ? style.itemActive : style.item
          }
        >
          Facturación
        </Link>  
        <Link
        to={"/su/canceledServices"}
        className={
            location.pathname === "/su/canceledServices" ? style.itemActive : style.item
          }
        >
          Cancelados
        </Link>
      
        <Link
        to={"/su/workersregistration"}
        className={
            location.pathname === "/su/workersregistration" ? style.itemActive : style.item
          }
        >
          Trabajadores
        </Link>
        <Link
        to={"/su/servicesRegistration"}
        className={
            location.pathname === "/su/servicesRegistration" ? style.itemActive : style.item
          }
        >
          Servicios
        </Link>
        <Link to={"/"} className={style.itemLogout}>
          Cerrar sesión
        </Link>
      </div>
    </div>
  );
}