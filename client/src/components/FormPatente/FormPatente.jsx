import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./FormPatente.module.css";
import { useDispatch } from "react-redux";
import { getVehicle, cleanVehicleData } from "../../redux/actions/actions";

const FormPatente = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [patent, setPatent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(cleanVehicleData());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getVehicle(patent.toUpperCase()));
    if (patent) {
      navigate(`/formVehicle`, {
        state: {
          patent: patent.toUpperCase(),
        },
      });
    } else {
      setError("Por favor, ingresa la patente del vehículo");
    }
  };

  return (
    <div className={style.mainDiv}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.title}>INGRESAR PATENTE DEL VEHÍCULO</label>
        <input
          className={style.input}
          type="text"
          value={patent}
          onChange={(e) => setPatent(e.target.value)}
        />
        {error && <div className={style.error}>{error}</div>}
        <button type="submit" className={style.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormPatente;
