import style from "./FormWorkersRegistration.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { postWorker } from "../../redux/actions/actions";


const FormWorkers = () => {
  const { workersData } = useSelector(
    (state) => state
  );
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
    location.state === null && navigate("/workersregistration");
  }, [location.state, navigate]);



  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createWorker(form));
  };

  const changehandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };

  const selectStyles = {
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    valueContainer: (styles) => ({ ...styles, paddingLeft: "36px" }),
  };

  const selectTheme = (theme) => ({
    ...theme,
    borderRadius: "20px",
    colors: {
      ...theme.colors,
      primary25: "#3cd8f0",
      primary: "black",
    },
  });
  return (
    <div>
      <Link to={"/createVehicle"}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <h1 className={style.title}>Datos del Vehículo</h1>
      <p className={style.subtitle}>Los campos con * son obligatorios</p>
      <form onSubmit={handleSubmit}>       
        
        <div className={style.form}>
          <div className={style.column}>
            <label className={style.label}>rut/passport*</label>
            <input
              name="rut_passport"
              type="text"
              value={form.rut_passport}
              className={style.input}
              onChange={changehandler}
            />
            {errors.rut_passport && <p className={style.error}>{errors.rut_passport}</p>}
            <label className={style.label}>Nombre*</label>
            <input
              name="name"
              type="text"
              value={form.name}
              className={style.input}
              onChange={changehandler}
            />
            {errors.name && <p className={style.error}>{errors.name}</p>}
            <label className={style.label}>Dirección</label>
            <input
              name="address"
              type="text"
              value={form.address}
              className={style.input}
              onChange={changehandler}
            />  
            <label className={style.label}>Sede</label>
            <input
              name="branch"
              type="text"
              value={form.branch}
              className={style.input}
              onChange={changehandler}
            />           
                        
          </div>
          <div className={style.column}>
            <label className={style.label}>Porcentaje de ganancias</label>
            <input
              name="profitPercentage"
              type="number"
              value={form.profitPercentage}
              className={style.input}
              onChange={changehandler}
            />
            <label className={style.label}>Meta</label>
            <input
              name="goal"
              type="number"
              value={form.goal}
              className={style.input}
              onChange={changehandler}
            />
            {errors.goal && (
              <p className={style.error}>{errors.goal}</p>
            )}
            <label className={style.label}>Porcentaje despues de la meta</label>
            <input
              name="percentageAfterGoal"
              type="number"
              value={form.percentageAfterGoal}
              className={style.input}
              onChange={changehandler}
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