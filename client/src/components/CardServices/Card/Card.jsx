import style from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";

const Card = ({
  client,
  vehicleType,
  patent,
  whatsapp,
  model,
  services,
  brand,
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
        <span className={style.spanDataP}>{patent}</span>
        <span className={style.spanData4}>{client}</span>
        <span className={style.spanData4}>+56 {whatsapp}</span>

        <span className={style.spanData2}>{services[0].date}</span>

        <div className={style.servicesWorkerDiv}>
          {services.map((service) => (
            <div className={style.servicesDiv}>
              <span className={style.services}>· {service.name}</span>

              <div className={style.workersDiv}>
                {service.workers.map((worker) => (
                  <span className={style.worker}>· {worker}</span>
                ))}
              </div>
            </div>
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
              brand,
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
