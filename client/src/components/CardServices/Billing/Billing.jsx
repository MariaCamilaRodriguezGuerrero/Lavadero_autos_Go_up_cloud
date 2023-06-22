import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./Billing.module.css";
import validation from "./validation";
import { putOrder, getOrders } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Billing = () => {
  const location = useLocation();
  const { services } = location.state;
  console.log(services);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [medioPago, setMedioPago] = useState("");
  const [descuento, setDescuento] = useState(0);
  const [tip, setTip] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(medioPago));
    if (!validation(medioPago)) {
      services.forEach((service) => {
        dispatch(
          putOrder(service.orderService, {
            orderStatus: "completed",
            invoiced: calculateTotal(),
            tip,
          })
        );
      });

      //dispatch(getOrders());
      setTimeout(() => {
        navigate("/ad");
      }, 200);
    }
  };

  useEffect(() => {
    return () => dispatch(getOrders());
  }, [dispatch]);

  const calculateTotal = () => {
    const subtotal = services
      .map((e) => Number(e.cost))
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    const descuentoAplicado = (subtotal * descuento) / 100;
    return subtotal - descuentoAplicado;
  };

  const handleDescuentoChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setDescuento(value);
    }
  };

  return (
    <div className={style.backgroundDiv}>
      <div className={style.mainDiv}>
        <div className={style.titleDiv}>
          <div className={style.columnBtn}>
            <Link to={"/ad"}>
              <img
                className={style.backBtn}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
                alt=""
              />
            </Link>
            <h1 className={style.title}>FACTURA</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.row}>
            <label>Medio de Pago</label>
            <select
              value={medioPago}
              onChange={(e) => setMedioPago(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Transferencia">Transferencia</option>
              <option value="Red de Compra">Red de Compra</option>
            </select>
          </div>
          {error && <p className={style.error}>{error}</p>}
          <div className={style.row}>
            <label>Descuento</label>
            <select value={descuento} onChange={handleDescuentoChange}>
              <option value={0}>0%</option>
              <option value={5}>5%</option>
              <option value={10}>10%</option>
              <option value={15}>15%</option>
              <option value={20}>20%</option>
            </select>
          </div>
          <div className={style.row}>
            <label>Propina</label>
            <input
              type="number"
              onChange={(e) => setTip(e.target.value)}
            ></input>
          </div>
          <div className={style.column}>
            {services &&
              services.map((e) => (
                <span key={e.serviceName}>
                  {e.serviceName}: ${e.cost}
                </span>
              ))}
              {services &&
              services.map((e) => (
                <span>
                  Decuento del dia: ${e.discountDay}
                </span>
              ))}

            <span>Descuento: {descuento}%</span>
          </div>
          <span className={style.total}>
            Total: ${services && calculateTotal()}
          </span>

          <button type="submit" className={style.submit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Billing;
