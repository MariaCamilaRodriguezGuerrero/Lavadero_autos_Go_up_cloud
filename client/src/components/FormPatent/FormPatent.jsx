import style from "./FormPatent.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cleanVehicleData } from "../../redux/actions/actions";
import validation from "./validation";

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
    setError(validation(patent));
    if (!validation(patent)) {
      navigate(`/ad/formVehicle`, {
        state: {
          patent: patent.toUpperCase(),
        },
      });
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
        {error && <p className={style.error}>{error}</p>}
        <button type="submit" className={style.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormPatente;
