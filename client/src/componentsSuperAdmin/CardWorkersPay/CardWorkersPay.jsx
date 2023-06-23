import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./CardWorkersPay.module.css";
import { putPayment } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const CardWorkersPay = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { payment } = useSelector((state) => state);
  const [paymentToShow, setPaymentToShow] = useState(false);

  useEffect(() => {
    !payment.status && payment.payment && setPaymentToShow(payment);
  }, [payment]);

  const handlePayment = () => {
    dispatch(
      putPayment(payment.ids, {
        statusBill: "paid",
      })
    );
    navigate("/su/workersregistration");
  };

  return (
    <div className={style.backgroundDiv}>
      <div className={style.mainDiv}>
        <Link to="/su/workersregistration" className={style.close}>
          X
        </Link>
        {!paymentToShow && (
          <p className={style.text2}>No Hay Pagos Pendientes</p>
        )}
        {paymentToShow && (
          <>
            <p
              className={style.text}
            >{`¿Desea pagarle a ${paymentToShow.workerName}`}</p>
            <p
              className={style.text}
            >{`La suma de $${paymentToShow.payment}`}</p>

            <p
              className={style.text}
            >{`Generados entre ${paymentToShow.date}?`}</p>

            <p>
              <i>Esta acción no se puede deshacer</i>
            </p>

            <button
              type="button"
              onClick={handlePayment}
              className={style.submit}
            >
              Pagar
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default CardWorkersPay;
