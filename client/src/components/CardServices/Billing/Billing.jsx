import style from "./Billing.module.css";
import { Link, useLocation } from "react-router-dom";

const Billing = () => {

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    //navigate(`/services`);
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
          alt=""/>
      </Link>
          </div>
          <div className={style.column}>
        <h1 className={style.title}>FACTURA</h1>
        </div>
        <div className={style.column}></div>
      </div>
        <form onSubmit={handleSubmit} className={style.form}>
          <label>Medio de Pago</label>
          <select>
            <option>Seleccione</option>
            <option>Efectivo</option>
            <option>Transferencia</option>
            <option>Red de Compra</option>
          </select>
          <label>Descuento</label>
          <input type="number"></input>
          <label>Promoción del día</label>
          <input type="number"></input>
          <label>Propina</label>
          <input type="number"></input>
          {location.state.data && location.state.data.tipoServicios.map(e => <span>{e.name} - ${e.value}</span>)}

          <span>{location.state.data && "Total: $" + location.state.data.tipoServicios.map(e => Number(e.value)).reduce(
          (accumulator, currentValue) => accumulator + currentValue, 0
          )}</span>
          <button type="submit" className={style.submit}>Enviar</button>
        </form>
        </div>
    </div>
  );
};

export default Billing;
