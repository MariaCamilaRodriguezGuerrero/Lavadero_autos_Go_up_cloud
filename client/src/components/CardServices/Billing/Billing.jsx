import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./Billing.module.css";
import validation from "./validation";
import { putOrder, getOrders } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Billing = () => {
  const location = useLocation();
  const { services } = location.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [medioPago, setMedioPago] = useState("");
  const [descuento, setDescuento] = useState(0);
  const [promocion, setPromocion] = useState(0);
  const [propina, setPropina] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(medioPago));
    if (!validation(medioPago)) {
      services.forEach((service) => {
        dispatch(
          putOrder(service.orderService, {
            orderStatus: "completed",
          })
        );
      });
      setTimeout(() => {
        dispatch(getOrders());
        navigate("/services");
      }, "1000");
    }
  };

  const calculateTotal = () => {
    const subtotal = services
      .map((e) => Number(e.cost))
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    const descuentoAplicado = (subtotal * descuento) / 100;
    const promocionAplicada = (subtotal * promocion) / 100;
    return subtotal - descuentoAplicado - promocionAplicada + propina;
  };

  const handleDescuentoChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setDescuento(value);
    }
  };

  const handlePromocionChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setPromocion(value);
    }
  };

  const handlePropinaChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setPropina(value);
    }
  };

  return (
    <div className={style.backgroundDiv}>
      <div className={style.mainDiv}>
        <div className={style.titleDiv}>
          <div className={style.columnBtn}>
            <Link to={"/services"}>
              <img
                className={style.backBtn}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
                alt=""
              />
            </Link>
          </div>
          <h1 className={style.title}>FACTURA</h1>
        </div>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.row}>
            <label>Medio de Pago:</label>
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
            <label>Descuento: </label>
            <input
              type="text"
              value={descuento}
              onChange={handleDescuentoChange}
            />
            <div>%</div>
          </div>
          <div className={style.row}>
            <label>Promoción del día: </label>
            <input
              type="text"
              value={promocion}
              onChange={handlePromocionChange}
            />
            <div>%</div>
          </div>
          <div className={style.row}>
            <label>Propina:</label>
            <input type="text" value={propina} onChange={handlePropinaChange} />
          </div>

          <div className={style.column}>
            {services &&
              services.map((e) => (
                <span key={e.serviceName}>
                  {e.serviceName}: ${e.cost}
                </span>
              ))}

            <span>Descuento: {descuento}%</span>

            <span>Promoción del día: {promocion}%</span>

            <span>Propina: ${propina}</span>
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
