import { searchPatente } from "../../redux/actions/actions";
import axios from "axios";
import style from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = ({ array }) => {
  const dispatch = useDispatch();

  const onSearch = async (event) => {
    const value = event.target.value;
    console.log(array.filter((e) => e.licensePlate === value));
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
