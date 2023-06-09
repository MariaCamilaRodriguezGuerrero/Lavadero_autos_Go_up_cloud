import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";
import { useState } from "react";

export default function Nav() {
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
            className={`${style.menuIconLine} ${menuOpen ? style.open : ""}`}
          ></div>
          <div
            className={`${style.menuIconLine} ${menuOpen ? style.open : ""}`}
          ></div>
          <div
            className={`${style.menuIconLine} ${menuOpen ? style.open : ""}`}
          ></div>
        </div>
        {menuOpen && (
          <div className={style.mobileMenuItems}>
            <Link
              to={"/ad/createVehicle"}
              className={
                location.pathname === "/ad/createVehicle"
                  ? style.itemActive
                  : style.item
              }
              onClick={closeMenu}
            >
              Ingresar Vehículo
            </Link>
            <Link
              to={"/ad"}
              className={
                location.pathname === "/ad"
                  ? style.itemActive
                  : style.item
              }
              onClick={closeMenu}
            >
              Servicios En Curso
            </Link>
            <Link
              to={"/ad/dashboard"}
              className={
                location.pathname === "/ad/dashboard"
                  ? style.itemActive
                  : style.item
              }
              onClick={closeMenu}
            >
              Resumen del Día
            </Link>
            <Link
              to={"/ad/billingList"}
              className={
                location.pathname === "/ad/billingList"
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
        <Link
          to={"/ad/createVehicle"}
          className={
            (location.pathname === "/ad/createVehicle") |
            (location.pathname === "/ad/formVehicle") |
            (location.pathname === "/ad/formService")
              ? style.itemActive
              : style.item
          }
        >
          Ingresar Vehículo
        </Link>
        <Link
          to={"/ad"}
          className={
            location.pathname === "/ad" ? style.itemActive : style.item
          }
        >
          Servicios En Curso
        </Link>
        <Link
          to={"/ad/dashboard"}
          className={
            location.pathname === "/ad/dashboard"
              ? style.itemActive
              : style.item
          }
        >
          Resumen del Día
        </Link>
        <Link
          to={"/ad/billingList"}
          className={
            location.pathname === "/ad/billingList"
              ? style.itemActive
              : style.item
          }
        >
          Facturación
        </Link>
        <Link to={"/"} className={style.itemLogout}>
          Cerrar sesión
        </Link>
      </div>
    </div>
  );
}
