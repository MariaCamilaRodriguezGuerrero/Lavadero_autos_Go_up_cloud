import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../redux/actions/actions";
import style from "./Search.module.css";
import { useLocation } from "react-router-dom";
const SearchBar = ({ array }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/su/billingListSuperAdmin")
      dispatch(searchFilter(array, "ordersCompletedFilteredSuperAdmin"));
  }, [dispatch, array]);

  const onSearch = (event) => {
    const value = event.target.value;
    const filteredArray = array.filter((e) =>
      e.licensePlate.toLowerCase().includes(value.toLowerCase())
    );
    if (location.pathname === "/su/billingListSuperAdmin")
      dispatch(searchFilter(filteredArray, "ordersCompletedFilteredSuperAdmin"));
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
