import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../../redux/actions/actions";
import style from "./Search.module.css";

const SearchBar = ({ array }) => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state);

  useEffect(() => {
    dispatch(searchFilter(orders));
  }, [dispatch, orders]);

  const onSearch = (event) => {
    const value = event.target.value;
    const filteredArray = array.filter((e) =>
      e.licensePlate.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(searchFilter(filteredArray));
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