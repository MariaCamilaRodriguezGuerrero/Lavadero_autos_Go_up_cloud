import { Outlet } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./CanceledService.module.css";
// import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import CardsCanceled from "../../componentsSuperAdmin/CardCanceledSuperAdmin/Cards/CardsCanceled";
import { getOrdersCanceledSuperAdmin } from "../../redux/actions/actions";
import { useEffect } from "react";

const CanceledService = () => {
  const dispatch = useDispatch();
  const { ordersCancelledSuperAdmin } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getOrdersCanceledSuperAdmin());
  }, [dispatch]);

  return (
    <div className={style.mainDiv}>
      <h1 className={style.title}>Cancelados</h1>
      <div className={style.cards}>
        <SearchBar array={ordersCancelledSuperAdmin} />
        <div className={style.card}>
          <p className={style.estado}>ESTADO</p>
          <p className={style.text}>
            <span className={style.spanDataP}>Patente</span>
            <span className={style.spanData4}>Cliente</span>
            <span className={style.spanData2}>Fecha Hora</span>
            <span className={style.spanData3}>Tipo Servicio</span>
            <span className={style.spanData3}>Trabajador</span>
            <span className={style.spanData}>Valor</span>
            <span className={style.spanDataAceptacion}>Aceptacion</span>
          </p>
        </div>
        <CardsCanceled />
        <Pagination />
        <Outlet />
        {/* <ToastContainer
          toastStyle={{
            backgroundColor: "rgb(38, 143, 255)",
            fontSize: "20px",
            color: "#fff",
          }}
        /> */}
      </div>
    </div>
  );
};
export default CanceledService;
