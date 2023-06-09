import styles from "./CardsBilling.module.css";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from "../../../redux/actions/actions";
import { useEffect, useState } from "react";
import CardBilling from "../Card/CardBilling";

export default function CardsBilling() {
  const dispatch = useDispatch();
  const { ordersCompletedFiltered } = useSelector((state) => state);
  const [cardsShow, setCardsShow] = useState([]);
  useEffect(() => {
    setCardsShow(ordersCompletedFiltered);
  }, [ordersCompletedFiltered]);
  const ordersPerPage = 10;
  const pageNumber = useSelector((state) => state.pageNumber);
  const pagesVisited = pageNumber * ordersPerPage;
  //   const [pageNumberToShow, setPageNumberToShow] = useState(0);
  const displayCards =
    typeof cardsShow !== "string" &&
    !!cardsShow.length &&
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
            invoiced,
          },
          index
        ) => {
          return (
            <CardBilling
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
    cardsShow[0]
  ) {
    dispatch(changePageNumber(0));
  }

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {displayCards}
      </div>
    </div>
  );
}
