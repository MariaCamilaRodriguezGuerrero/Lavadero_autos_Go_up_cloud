import style from "./CardBilling.module.css";
import { Link, useLocation } from "react-router-dom";

const CardBilling = ({
  licensePlate,
  vehicleType,
  client,
  whatsapp,
  brand,
  model,
  services,
}) => {
  const location = useLocation();

  return (
    <div className={style.card}>
      <Link
        to=""
        state={{ background: location, services }}
        className={style.pendiente}
      >
        <img
          className={style.billingImg}
          src="https://www.svgrepo.com/show/92787/check-mark.svg"
          alt=""
        />
        FACTURADO
      </Link>
      <p className={style.text}>
        <span className={style.spanDataP}>{licensePlate}</span>
        <span className={style.spanData4}>{client}</span>
        <span className={style.spanData4}>{whatsapp}</span>

        <span className={style.spanData2}>{services[0].date}</span>

        <div className={style.servicesWorkerDiv}>
          {services.map((service) => (
            <div className={style.servicesDiv}>
              <span className={style.services}>· {service.serviceName}</span>

              <div className={style.workersDiv}>
                {service.workers.map((worker) => (
                  <span className={style.worker}>· {worker}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <span className={style.spanDataV}>
          $
          {services
            .map((e) => Number(e.cost))
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              
            )}
        </span>
      </p>
    </div>
  );
};

export default CardBilling;