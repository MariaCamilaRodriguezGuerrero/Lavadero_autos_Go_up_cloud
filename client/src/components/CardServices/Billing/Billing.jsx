import React, { useState, useEffect } from "react";
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
  const [descuentos, setDescuentos] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(medioPago));
    if (!validation(medioPago)) {
      services.forEach((service, index) => {
        dispatch(
          putOrder(service.orderService, {
            orderStatus: "completed",
            descuento: descuentos[index] || 0,
          })
        );
      });

      setTimeout(() => {
        navigate("/services");
      }, 200);
    }
  };

  useEffect(() => {
    return () => dispatch(getOrders());
  }, [dispatch]);

  const calculateTotal = () => {
    const subtotal = services
      .map((e, index) => Number(e.cost) - (descuentos[index] || 0))
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return subtotal;
  };

  const handleDescuentoChange = (e, index) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      const updatedDescuentos = [...descuentos];
      updatedDescuentos[index] = value;
      setDescuentos(updatedDescuentos);
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
          {services.map((service, index) => (
            <div className={style.row} key={index}>
              <label>{service.serviceName}: </label>
              <input
                type="text"
                value={descuentos[index] || ""}
                onChange={(e) => handleDescuentoChange(e, index)}
              />
              <div>%</div>
            </div>
          ))}
          <div className={style.column}>
            {services.map((service, index) => (
              <span key={service.serviceName}>
                {service.serviceName}: ${service.cost} - Descuento:{" "}
                {descuentos[index] || 0}%
              </span>
            ))}
          </div>
          <span className={style.total}>
            Total: ${calculateTotal()}
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