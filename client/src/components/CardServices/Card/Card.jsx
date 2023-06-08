import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";

const Card = ({
  client,
  vehicleType,
  patent,
  whatsapp,
  model,
  workers,
  services,
}) => {
  const location = useLocation();

  return (
    <div className={style.card}>
      <Link
        to="/services/billing"
        state={{ background: location, services }}
        className={style.pendiente}
      >
        <img
          className={style.billingImg}
          src="https://www.pngkit.com/png/full/139-1394535_png-file-svg-document-icon-svg.png"
          alt=""
        />
        PENDIENTE
      </Link>
      <p className={style.text}>
        <span className={style.spanData2}>5-6-2023 10:00</span>
        <span className={style.spanDataT}>{vehicleType}</span>
        <span className={style.spanDataP}>{patent}</span>
        <span className={style.spanData4}>{client}</span>
        <span className={style.spanData4}>+56 {whatsapp}</span>
        <div className={style.spanData3}>
          {workers.map((e) => (
            <span>{e}</span>
          ))}
        </div>
        <div className={style.spanData3}>
          {services.map((e) => (
            <span>{e.name}</span>
          ))}
        </div>
        <span className={style.spanData}>
          $
          {services
            .map((e) => Number(e.value))
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )}
        </span>

        <Link
          to="/services/edit"
          state={{
            background: location,
            data: {
              client,
              vehicleType,
              patent,
              whatsapp,
              model,
              workers,
              services,
            },
          }}
          className={style.spanDataE}
        >
          <span>
            <img
              className={style.editImg}
              src="https://www.svgrepo.com/show/73131/edit-button.svg"
              alt=""
            />
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Card;
