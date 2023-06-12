import styles from "./Cards.module.css";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from "../../../redux/actions/actions";
import Card from "../Card/Card";

export default function Cards() {
  const dispatch = useDispatch();
  const { ordersFiltered } = useSelector((state) => state);
  const ordersPerPage = 10;
  const pageNumber = useSelector((state) => state.pageNumber);
  const pagesVisited = pageNumber * ordersPerPage;
  //   const [pageNumberToShow, setPageNumberToShow] = useState(0);
  const displayOrders =
    typeof ordersFiltered !== "string" &&
    ordersFiltered.length &&
    ordersFiltered
      .slice(pagesVisited, pagesVisited + ordersPerPage)
      .reverse()
      .map(
        (
          {
            licensePlate,
            vehicleType,
            client,
            whatsapp,
            brand,
            model,
            services,
          },
          index
        ) => {
          return (
            <Card
              key={index}
              licensePlate={licensePlate}
              vehicleType={vehicleType}
              client={client}
              whatsapp={whatsapp}
              brand={brand}
              model={model}
              services={services}
            />
          );
        }
      );

  //   useEffect(() => {
  //     setPageNumberToShow(pageNumber);
  //   }, [pageNumber]);

  if (
    typeof displayOrders === "object" &&
    displayOrders.length === 0 &&
    ordersFiltered[0]
  ) {
    dispatch(changePageNumber(0));
  }

  return (
    <div className={styles.container}>
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
        {displayOrders}
      </div>
    </div>
  );
}
