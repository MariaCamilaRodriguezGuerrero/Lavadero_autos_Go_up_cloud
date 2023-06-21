import { Outlet } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../componentsSuperAdmin/SearchBar/SearchBar";
import style from "./BillingList.module.css";
// import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import CardsBilling from "../../componentsSuperAdmin/CardBillingSuperAdmin/Cards/CardsBilling"
import { getOrdersCompletedSuperAdmin } from "../../redux/actions/actions";
import { useEffect } from "react";

const BillingListSuperAdmin = () => {
  const dispatch = useDispatch();
  const { ordersCompletedSuperAdmin } = useSelector((state) => state);
  console.log(ordersCompletedSuperAdmin);

  useEffect(() => {
    dispatch(getOrdersCompletedSuperAdmin());
  }, [dispatch]);

  return (
    <div className={style.mainDiv}>
      <h1 className={style.title}>Facturación</h1>
      <div className={style.cards}>
        <SearchBar array={ordersCompletedSuperAdmin} />
        <div className={style.card}>
          <p className={style.estado}>ESTADO</p>
          <p className={style.text}>
            <span className={style.spanDataP}>Patente</span>
            <span className={style.spanData4}>Cliente</span>
            <span className={style.spanData4}>Telefono</span>
            <span className={style.spanData2}>Fecha Hora</span>
            <span className={style.spanData3}>Tipo Servicio</span>
            <span className={style.spanData3}>Trabajador</span>
            <span className={style.spanData}>Valor</span>
          </p>
        </div>
        <CardsBilling />
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
export default BillingListSuperAdmin;
