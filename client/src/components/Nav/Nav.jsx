import { Link, useLocation } from "react-router-dom";
import style from './Nav.module.css';

export default function Nav() {
    const location = useLocation();

    return (
        <div className={style.nav}>
            <div className={style.items}>
                <div className={style.item}>
                    <Link
                        to={"/createVehicle"}
                        className={`${style.itemsDiv} ${location.pathname === '/createVehicle' | location.pathname === '/formVehicle' | location.pathname === '/formService' ? style.itemsDivActive : ''}`}
                    >
                        Ingresar Vehiculo
                    </Link>
                </div>
            </div>

            <div className={style.items}>
                <div className={style.item}>
                    <Link
                        to={"/services"}
                        className={`${style.itemsDiv} ${location.pathname === '/services' ? style.itemsDivActive : ''}`}
                    >
                        Servicios En Curso
                    </Link>
                </div>
            </div>

            <div className={style.items}>
                <div className={style.item}>
                    <Link
                        to={"/dashboard"}
                        className={`${style.itemsDiv} ${location.pathname === '/dashboard' ? style.itemsDivActive : ''}`}
                    >
                        Resumen del Día
                    </Link>
                </div>
            </div>

            <div className={style.items}>
                <div className={style.item}>
                    <Link
                        to={"/"}
                        className={`${style.itemsDiv}`}
                    >
                        Salir
                    </Link>
                </div>
            </div>
        </div>
    );
}