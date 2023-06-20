import style from "./CardSuperAdmin.module.css";
import { Link, useLocation } from "react-router-dom";

const CardSuperAdmin = ({
  licensePlate,
  vehicleType,
  client,
  whatsapp,
  brand,
  model,
  color,
  services,
}) => {
  const location = useLocation();

  return (
    <div className={style.card}>
      <div
        className={style.pendiente}
      >
        <img
          className={style.billingImg}
          src="https://www.pngkit.com/png/full/139-1394535_png-file-svg-document-icon-svg.png"
          alt=""
        />
        PENDIENTE
      </div>
      <div className={style.text}>
        <span className={style.spanDataP}>{licensePlate}</span>
        <span className={style.spanData4}>{client}</span>
        <span className={style.spanData4}>{whatsapp || "No ingresado"}</span>
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

        <span className={style.spanData}>
          $
          {services
            .map((e) => Number(e.cost))
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
              licensePlate,
              vehicleType,
              client,
              whatsapp,
              brand,
              model,
              services,
              color,
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
      </div>
    </div>
  );
};

export default CardSuperAdmin;
