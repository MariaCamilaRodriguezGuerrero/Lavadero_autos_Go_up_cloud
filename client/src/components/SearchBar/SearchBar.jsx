import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../redux/actions/actions";
import style from "./Search.module.css";
import { useLocation } from "react-router-dom";
const SearchBar = ({ array }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/billinglist")
      dispatch(searchFilter(array, "ordersCompletedFiltered"));
    if (location.pathname === "/services")
      dispatch(searchFilter(array, "ordersFiltered"));
  }, [dispatch, array]);

  const onSearch = (event) => {
    const value = event.target.value;
    const filteredArray = array.filter((e) =>
      e.licensePlate.toLowerCase().includes(value.toLowerCase())
    );
    if (location.pathname === "/billinglist")
      dispatch(searchFilter(filteredArray, "ordersCompletedFiltered"));
    if (location.pathname === "/services")
      dispatch(searchFilter(filteredArray, "ordersFiltered"));
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="search"
        onChange={onSearch}
        placeholder="Buscar Patente"
      />
    </div>
  );
};

export default SearchBar;
