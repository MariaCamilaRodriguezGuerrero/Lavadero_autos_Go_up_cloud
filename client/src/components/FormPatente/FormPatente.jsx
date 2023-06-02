import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./FormPatente.module.css";

const FormPatente = () => {
  const navigate = useNavigate();
  const [patente, setPatente] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (patente) {
      navigate(`/formVehicle/${patente}`);
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
          value={patente}
          onChange={(e) => setPatente(e.target.value)}
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
