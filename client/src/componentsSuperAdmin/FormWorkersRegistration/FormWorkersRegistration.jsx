import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postWorker, getWorkers } from "../../redux/actions/actions";

import style from "./FormWorkersRegistration.module.css";

const FormWorkers = () => {
  const { workersData } = useSelector((state) => state);
  const [form, setForm] = useState({
    rut_passport: "",
    address: "",
    name: "",
    profitPercentage: "",
    goal: "",
    branch: "",
    percentageAfterGoal: ""
  });
  const [errors, setErrors] = useState({
    rut_passport: "",
    address: "",
    name: "",
    profitPercentage: "",
    goal: "",
    branch: "",
    percentageAfterGoal: ""
  });
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    location.state === null && navigate("/su/workersregistration");
  }, [location.state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    let hasErrors = false;
    const newErrors = {
      rut_passport: "",
      address: "",
      name: "",
      profitPercentage: "",
      goal: "",
      branch: "",
      percentageAfterGoal: ""
    };

    if (form.rut_passport.trim() === "") {
      newErrors.rut_passport = "El RUT o pasaporte es obligatorio";
      hasErrors = true;
    }

    if (form.name.trim() === "") {
      newErrors.name = "El nombre es obligatorio";
      hasErrors = true;
    }

    if (form.branch.trim() === "") {
      newErrors.branch = "La sede es obligatoria";
      hasErrors = true;
    }

    if (form.profitPercentage.trim() === "") {
      newErrors.profitPercentage = "El porcentaje de ganancias es obligatorio";
      hasErrors = true;
    }

    if (form.goal.trim() === "") {
      newErrors.goal = "La meta es obligatoria";
      hasErrors = true;
    }

    if (form.percentageAfterGoal.trim() === "") {
      newErrors.percentageAfterGoal = "El porcentaje después de la meta es obligatorio";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      dispatch(postWorker(form));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <Link to={"/createVehicle"}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <h1 className={style.title}>Registro de trabajadores</h1>
      <p className={style.subtitle}>Los campos con * son obligatorios</p>
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <div className={style.column}>
            <label className={style.label}>RUT ó Pasaporte*</label>
            <input
              name="rut_passport"
              type="text"
              value={form.rut_passport}
              className={style.input}
              onChange={handleChange}
            />
            {errors.rut_passport && <p className={style.error}>{errors.rut_passport}</p>}
            
            <label className={style.label}>Nombre*</label>
            <input
              name="name"
              type="text"
              value={form.name}
              className={style.input}
              onChange={handleChange}
            />
            {errors.name && <p className={style.error}>{errors.name}</p>}
            
            <label className={style.label}>Dirección</label>
            <input
              name="address"
              type="text"
              value={form.address}
              className={style.input}
              onChange={handleChange}
            />
            
            <label className={style.label}>Sede*</label>
            <input
              name="branch"
              type="text"
              value={form.branch}
              className={style.input}
              onChange={handleChange}
            />
            {errors.branch && <p className={style.error}>{errors.branch}</p>}
          </div>
          <div className={style.column}>
            <label className={style.label}>Porcentaje de ganancias*</label>
            <input
              name="profitPercentage"
              type="number"
              value={form.profitPercentage}
              className={style.input}
              onChange={handleChange}
            />
            {errors.profitPercentage && (
              <p className={style.error}>{errors.profitPercentage}</p>
            )}
            
            <label className={style.label}>Meta*</label>
            <input
              name="goal"
              type="number"
              value={form.goal}
              className={style.input}
              onChange={handleChange}
            />
            {errors.goal && <p className={style.error}>{errors.goal}</p>}
            
            <label className={style.label}>Porcentaje despues de la meta*</label>
            <input
              name="percentageAfterGoal"
              type="number"
              value={form.percentageAfterGoal}
              className={style.input}
              onChange={handleChange}
            />
            {errors.percentageAfterGoal && (
              <p className={style.error}>{errors.percentageAfterGoal}</p>
            )}
          </div>
        </div>
        <button type="submit" className={style.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormWorkers;