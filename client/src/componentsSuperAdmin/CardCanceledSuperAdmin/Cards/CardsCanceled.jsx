import styles from "./CardsCanceled.module.css";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from "../../../redux/actions/actions";
import { useEffect, useState } from "react";
import CardCanceled from "../Card/CardCanceled";

export default function CardsCanceled() {
  const dispatch = useDispatch();
  const { ordersCancelledFilteredSuperAdmin } = useSelector((state) => state);
  const [cardsShowSuperAdmin, setCardsShowSuperAdmin] = useState([]);
  
  useEffect(() => {
    setCardsShowSuperAdmin(ordersCancelledFilteredSuperAdmin);
  }, [ordersCancelledFilteredSuperAdmin]);
  const ordersPerPage = 10;
  const pageNumber = useSelector((state) => state.pageNumber);
  const pagesVisited = pageNumber * ordersPerPage;
  //   const [pageNumberToShow, setPageNumberToShow] = useState(0);
  const displayCards =
    typeof cardsShow !== "string" &&
    cardsShowSuperAdmin.length &&
    cardsShowSuperAdmin
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
            invoiced
          },
          index
        ) => {
          return (
            <CardCanceled
              key={index}
              licensePlate={licensePlate}
              vehicleType={vehicleType}
              client={client}
              whatsapp={whatsapp}
              brand={brand}
              model={model}
              services={services}
              invoiced={invoiced}
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
    cardsShowSuperAdmin[0]
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
