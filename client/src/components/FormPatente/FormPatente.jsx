import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./FormPatente.module.css";
import Nav from "../Nav/Nav";

const FormPatente = () => {
  const navigate = useNavigate();
  const [patent, setPatent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (patent) {
      navigate(`/formVehicle`, {
        state: {
          patent,
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
