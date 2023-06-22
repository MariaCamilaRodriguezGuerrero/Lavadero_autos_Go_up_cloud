import styles from "./CardsCanceled.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from "../../../redux/actions/actions";
import { useEffect, useState } from "react";
import CardCanceled from "../Card/CardCanceled";

const CardsCanceled = () => {
  const dispatch = useDispatch();
  const { ordersCancelledFilteredSuperAdmin } = useSelector((state) => state);
  const [cardsShowSuperAdmin, setCardsShowSuperAdmin] = useState([]);

  useEffect(() => {
    setCardsShowSuperAdmin(ordersCancelledFilteredSuperAdmin);
  }, [ordersCancelledFilteredSuperAdmin]);

  const ordersPerPage = 10;
  const pageNumber = useSelector((state) => state.pageNumber);
  const pagesVisited = pageNumber * ordersPerPage;

  const displayCards =
    typeof cardsShowSuperAdmin !== "string" &&
    !!cardsShowSuperAdmin.length &&
    cardsShowSuperAdmin
      .slice(pagesVisited, pagesVisited + ordersPerPage)
      .reverse()
      .map(
        (
          {
            licensePlate,
            client,
            orderDate,
            orderHour,
            serviceName,
            orderService
          },
          index
        ) => {
          return (
            <CardCanceled
              key={index}
              licensePlate={licensePlate}
              client={client}
              orderDate={orderDate}
              orderHour={orderHour}
              serviceName={serviceName}
              orderService={orderService}
            />
          );
        }
      );

  if (
    typeof displayCards === "object" &&
    displayCards.length === 0 &&
    cardsShowSuperAdmin[0]
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
};

export default CardsCanceled;
