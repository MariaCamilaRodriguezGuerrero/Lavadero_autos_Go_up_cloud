import { Outlet } from "react-router-dom";
import style from "./Services.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Cards from "../../components/CardServices/Cards/Cards";

const Services = () => {
  return (
    <div className={style.mainDiv}>
      <h1 className={style.title}>Servicios en Curso</h1>
      <div className={style.cards}>
        <SearchBar />
        <div className={style.card}>
          <p className={style.estado}>ESTADO</p>
          <p className={style.text}>
            <span className={style.spanDataP}>Patente</span>
            <span className={style.spanData4}>Cliente</span>
            <span className={style.spanData4}>WhatsApp</span>
            <span className={style.spanData2}>Fecha Hora</span>
            <span className={style.spanData3}>Tipo Servicio</span>
            <span className={style.spanData3}>Trabajador</span>
            <span className={style.spanData}>Valor</span>
            <span className={style.spanDataE}>Editar</span>
          </p>
        </div>
        <Cards />
        <Pagination />
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
