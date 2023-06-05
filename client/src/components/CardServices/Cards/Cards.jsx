import styles from "./Cards.module.css";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from "../../../redux/actions/actions";
import Card from "../Card/Card";

export default function Cards() {
  const dispatch = useDispatch();
  const ongoingServices = useSelector((state) => state.ongoingServices);
  const ongoingServicesPerPage = 10;
  const pageNumber = useSelector((state) => state.pageNumber);
  const pagesVisited = pageNumber * ongoingServicesPerPage;
//   const [pageNumberToShow, setPageNumberToShow] = useState(0);
  const displayOngoingServices =
    typeof ongoingServices !== "string" &&
    ongoingServices
      .slice(pagesVisited, pagesVisited + ongoingServicesPerPage)
      .map(({ cliente,
        tipoVehiculo,
        patenteParam,
        whatsapp,
        modelo,
        nombreTrabajador,
        tipoServicios
        }, index) => {
        return (
          <Card
            key={index}
            cliente={cliente}
            whatsapp={whatsapp}
            tipoVehiculo={tipoVehiculo}
            patenteParam={patenteParam}
            modelo={modelo}
            nombreTrabajador={nombreTrabajador}
            tipoServicios={tipoServicios}
          />
        );
      });

//   useEffect(() => {
//     setPageNumberToShow(pageNumber);
//   }, [pageNumber]);

  if (
    typeof displayOngoingServices === "object" &&
    displayOngoingServices.length === 0 &&
    ongoingServices[0]
  ) {
    dispatch(changePageNumber(0));
  }

  return (
    <div id="pagination" className={styles.container}>
      {/* {errorToShow ? (
        <p className={styles.error}>Error: {errorToShow}</p>
      ) : null} */}
      <div className={styles.cards}>
        {/* {typeof ongoingServices === "string" && errorToShow === "" ? (
          <p className={styles.message}>{ongoingServices}</p>
        ) : null}
        {!ongoingServices[0] && errorToShow === "" ? (
          <p className={styles.message}>No matches found</p>
        ) : null} */}
        {displayOngoingServices}
      </div>
    </div>
  );
}
