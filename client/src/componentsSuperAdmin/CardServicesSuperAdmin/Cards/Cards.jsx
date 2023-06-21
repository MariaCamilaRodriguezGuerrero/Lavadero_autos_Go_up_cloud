import styles from "./Cards.module.css";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from "../../../redux/actions/actions";
import { useEffect, useState } from "react";
import CardSuperAdmin from "../Card/Card";

export default function CardsSuperAdmin() {
  const dispatch = useDispatch();
  const { ordersFiltered } = useSelector((state) => state);
  const [cardsShow, setCardsShow] = useState("");
  useEffect(() => {
    setCardsShow(ordersFiltered);
  }, [ordersFiltered]);
  const ordersPerPage = 10;
  const pageNumber = useSelector((state) => state.pageNumber);
  const pagesVisited = pageNumber * ordersPerPage;
  //   const [pageNumberToShow, setPageNumberToShow] = useState(0);
  const displayCards =
    typeof cardsShow !== "string" &&
    cardsShow.length &&
    cardsShow
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
            color,
          },
          index
        ) => {
          return (
            <CardSuperAdmin
              key={index}
              licensePlate={licensePlate}
              vehicleType={vehicleType}
              client={client}
              whatsapp={whatsapp}
              brand={brand}
              model={model}
              services={services}
              color={color}
            />
          );
        }
      );

  //   useEffect(() => {
  //     setPageNumberToShow(pageNumber);
  //   }, [pageNumber]);

  if (
    typeof displayCards === "object" &&
    displayCards.length === 0 &&
    cardsShow[0]
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
        {displayCards}
      </div>
    </div>
  );
}
