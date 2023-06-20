import { Link, useLocation } from "react-router-dom";
import style from "./NavSuperAdmin.module.css";
import { useState } from "react";

export default function NavSuperAdmin() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={style.nav}>
      {/* Mobile Menu */}
      <Link to={"/"} className={style.itemLogout} onClick={closeMenu}>
              Cerrar sesión
            </Link>
      <div className={style.mobileMenu}>
        <div className={style.menuIcon} onClick={handleMenuToggle}>
          <div
            className={`${style.menuIconLine} ${
              menuOpen ? style.open : ""
            }`}
          ></div>
          <div
            className={`${style.menuIconLine} ${
              menuOpen ? style.open : ""
            }`}
          ></div>
          <div
            className={`${style.menuIconLine} ${
              menuOpen ? style.open : ""
            }`}
          ></div>
        </div>
        {menuOpen && (
          <div className={style.mobileMenuItems}>
            <Link
              to={"/createVehicle"}
              className={
                location.pathname === "/createVehicle"
                  ? style.itemActive
                  : style.item
              }
              onClick={closeMenu}
            >
              Ingresar Vehículo
            </Link>
            <Link
              to={"/servicesSuperAdmin"}
              className={
                location.pathname === "/servicesSuperAdmin"
                  ? style.itemActive
                  : style.item
              }
              onClick={closeMenu}
            >
              Servicios En Curso
            </Link>
            <Link
              to={"/dashboard"}
              className={
                location.pathname === "/dashboard"
                  ? style.itemActive
                  : style.item
              }
              onClick={closeMenu}
            >
              Resumen del Día
            </Link>
            <Link
              to={"/billingListSuperAdmin"}
              className={
                location.pathname === "/billingListSuperAdmin"
                  ? style.itemActive
                  : style.item
              }
              onClick={closeMenu}
            >
              Facturación
            </Link>
            
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className={style.desktopMenu}>
        {/* <Link
          to={"/createVehicle"}
          className={
            (location.pathname === "/createVehicle") |
            (location.pathname === "/formVehicle") |
            (location.pathname === "/formService")
              ? style.itemActive
              : style.item
          }
        >
          Ingresar Vehículo
        </Link> */}
        <Link
          to={"/dashboard"}
          className={
            location.pathname === "/dashboard" ? style.itemActive : style.item
          }
        >
          Resumen del Día
        </Link>
        <Link
          to={"/servicesSuperAdmin"}
          className={
            location.pathname === "/servicesSuperAdmin" ? style.itemActive : style.item
          }
        >
          Servicios En Curso
        </Link>
        <Link
          to={"/billingListSuperAdmin"}
          className={
            location.pathname === "/billingListSuperAdmin" ? style.itemActive : style.item
          }
        >
          Facturación
        </Link>  
        <Link
        to={"/canceledServices"}
        className={
            location.pathname === "/canceledServices" ? style.itemActive : style.item
          }
        >
          Cancelados
        </Link>
        <Link
        to={"/workersregistration"}
        className={
            location.pathname === "/workersregistration" ? style.itemActive : style.item
          }
        >
          Trabajadores
        </Link>
        <Link
        to={"/servicesRegistration"}
        className={
            location.pathname === "/servicesRegistration" ? style.itemActive : style.item
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