import styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumber } from "../../redux/actions/actions";

export default function Pagination() {
  const dispatch = useDispatch();
  const ongoingServices = useSelector((state) => state.ongoingServices);
  const ongoingServicesPerPage = 10;
  const pageCount = Math.ceil(ongoingServices.length / ongoingServicesPerPage);
  const pageNumber = useSelector((state) => state.pageNumber);
  // const pagesVisited = pageNumber * ongoingServicesPerPage;
  const [pageNumberToShow, setPageNumberToShow] = useState(0);
  // const displayOngoingServices =
  //   typeof ongoingServices !== "string" &&
  //   ongoingServices
  //     .slice(pagesVisited, pagesVisited + ongoingServicesPerPage)
  //     .map(({ cliente,
  //       tipoVehiculo,
  //       patenteParam,
  //       whatsapp,
  //       modelo,
  //       nombreTrabajador,
  //       tipoServicios
  //       }, index) => {
  //       return (
  //         <Card
  //           key={index}
  //           cliente={cliente}
  //           whatsapp={whatsapp}
  //           tipoVehiculo={tipoVehiculo}
  //           patenteParam={patenteParam}
  //           modelo={modelo}
  //           nombreTrabajador={nombreTrabajador}
  //           tipoServicios={tipoServicios}
  //         />
  //       );
  //     });

  useEffect(() => {
    setPageNumberToShow(pageNumber);
  }, [pageNumber]);

  let visibility = styles.hidden;
  if (
    typeof ongoingServices === "object" &&
    ongoingServices.length > ongoingServicesPerPage
  ) {
    visibility = styles.containerPaginate;
  }

  // if (
  //   typeof displayOngoingServices === "object" &&
  //   displayOngoingServices.length === 0 &&
  //   ongoingServices[0]
  // ) {
  //   dispatch(changePageNumber(0));
  // }

  const changePage = ({ selected }) => {
    dispatch(changePageNumber(selected));
  };

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
        {/* {displayOngoingServices} */}
      </div>
      <div className={visibility}>
        <ReactPaginate
          forcePage={pageNumberToShow}
          breakLabel="..."
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          previousLabel={<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>}
          nextLabel={<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          activeClassName={styles.paginationActive}
        />
      </div>
    </div>
  );
}
