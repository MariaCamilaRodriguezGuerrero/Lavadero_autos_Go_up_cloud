import style from "./CardCanceled.module.css";
import { useDispatch } from "react-redux";
import { deleteOrder, getOrdersCanceledSuperAdmin } from "../../../redux/actions/actions";

const CardCanceled = ({
  licensePlate,
  client,
  orderDate,
  orderHour,
  serviceName,
  orderService,
}) => {
  const dispatch = useDispatch();

  const handleDeleteOrder = () => {
    dispatch(deleteOrder(orderService));
    dispatch(getOrdersCanceledSuperAdmin());
  };

  return (
    <div className={style.card}>
      <div className={style.canceled}>
        <svg className={style.botonX} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>
        <p> CANCELADO</p>
      </div>

      <p className={style.text}>
        <span className={style.spanDataP}>{licensePlate}</span>
        <span className={style.spanData4}>{client}</span>
        <span className={style.spanData2}>{orderDate}</span>
        <span className={style.spanData2}>{orderHour}</span>

        <div className={style.servicesWorkerDiv}>
          <div className={style.servicesDiv}>
            <span className={style.services}>· {serviceName}</span>
          </div>
        </div>

        <span className={style.spanDataAceptacion}>
        <div onClick={handleDeleteOrder}>Eliminar</div>
        </span>
      </p>
    </div>
  );
};

export default CardCanceled;
