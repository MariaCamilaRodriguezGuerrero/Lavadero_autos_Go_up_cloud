import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";

const Card = ({ cliente,
    tipoVehiculo,
    whatsapp,
    patenteParam,
    modelo,
    nombreTrabajador,
    tipoServicios
    }) => {
    const location = useLocation();

  return (
      <div className={style.card}>
        
        <Link
          to="/services/billing"
          state={{ background: location, data: { tipoServicios } }}
          className={style.pendiente}
        >
        <img
          className={style.billingImg}
          src="https://www.pngkit.com/png/full/139-1394535_png-file-svg-document-icon-svg.png"
          alt=""/>
          PENDIENTE
        </Link>
          <p className={style.text}>
          <span className={style.spanData2}>5/6/2023</span>
          <span className={style.spanData2}>{tipoVehiculo}</span>
          <span className={style.spanData}>{modelo}</span>
          <span className={style.spanDataP}>{patenteParam}</span>
          <span className={style.spanData3}>{cliente}</span>
          <span className={style.spanData3}>+56 {whatsapp}</span>
          <div className={style.spanData3}>{nombreTrabajador.map(e => <span>{e}</span>)}</div>
          <div className={style.spanData3}>{tipoServicios.map(e => <span>{e.name}</span>)}</div>
          <span className={style.spanData}>${tipoServicios.map(e => Number(e.value)).reduce(
          (accumulator, currentValue) => accumulator + currentValue, 0
          )}</span>

          <Link
          to="/services/edit"
          state={{ background: location, data: {  cliente,
                                                tipoVehiculo,
                                                whatsapp,
                                                patenteParam,
                                                modelo,
                                                nombreTrabajador,
                                                tipoServicios } }}
          className={style.spanDataE}
          >
            <span >
              <img
              className={style.editImg}
              src="https://www.svgrepo.com/show/73131/edit-button.svg"
              alt=""/>
            </span>
          </Link>
        </p>
      </div>
  );
};

export default Card;
