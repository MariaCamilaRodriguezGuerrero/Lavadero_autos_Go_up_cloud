import { Outlet } from "react-router-dom";
import style from "./Services.module.css";
import { ToastContainer } from "react-toastify";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Cards from "../../components/CardServices/Cards/Cards";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getOrders,
  getWorkers,
  getServices,
} from "../../redux/actions/actions";

const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
    dispatch(getWorkers());
    dispatch(getOrders());
  }, [dispatch]);

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
        <ToastContainer
          toastStyle={{
            backgroundColor: "rgb(38, 143, 255)",
            fontSize: "20px",
            color: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default Services;
