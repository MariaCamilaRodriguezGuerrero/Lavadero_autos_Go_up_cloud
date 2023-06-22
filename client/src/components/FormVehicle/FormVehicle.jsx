import style from "./FormVehicle.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import {
  getVehicle,
  postVehicle,
  putVehicle,
} from "../../redux/actions/actions";
import validation from "./validation";
import vehicleTypes from "../../utils/vehicleTypes";

const FormVehicle = () => {
  const { vehicleData, postVehicleMessage, putVehicleMessage } = useSelector(
    (state) => state
  );
  const [form, setForm] = useState({
    client: "",
    whatsapp: null,
    vehicleType: "",
    model: "",
    brand: "",
    color: "", // Nuevo campo para el color del vehículo
  });
  const [errors, setErrors] = useState({
    client: "",
    brand: "",
    vehicleType: "",
    color: "", // Nuevo campo para los errores del color del vehículo
  });
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patent = location.state === null ? "" : location.state.patent;

  useEffect(() => {
    location.state === null && navigate("/ad/createVehicle");
  }, [location.state, navigate]);

  useEffect(() => {
    patent && dispatch(getVehicle(patent.toUpperCase()));
  }, [dispatch, patent]);

  useEffect(() => {
    console.log(postVehicleMessage);
  }, [postVehicleMessage]);
  useEffect(() => {
    console.log(putVehicleMessage);
  }, [putVehicleMessage]);

  useEffect(() => {
    console.log(vehicleData);
    setForm({
      client: vehicleData.client,
      vehicleType: vehicleData.vehicleType
        ? {
            value: vehicleData.vehicleType,
            label: vehicleData.vehicleType,
          }
        : null,
      whatsapp: vehicleData.whatsapp,
      brand: vehicleData.brand,
      model: vehicleData.model,
      color: vehicleData.color, // Asignar el valor del color del vehículo
    });
  }, [vehicleData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(form));
    if (!Object.values(validation(form)).filter((e) => !!e).length) {
      if (vehicleData.status) {
        dispatch(
          postVehicle({
            licensePlate: patent,
            vehicleType: form.vehicleType.value,
            client: form.client,
            whatsapp: form.whatsapp,
            brand: form.brand,
            model: form.model,
            color: form.color, // Enviar el color del vehículo
          })
        );
      }
      if (
        vehicleData.client !== form.client ||
        vehicleData.vehicleType !== form.vehicleType.value ||
        vehicleData.whatsapp !== form.whatsapp ||
        vehicleData.brand !== form.brand ||
        vehicleData.model !== form.model ||
        vehicleData.color !== form.color // Comprobar si el color del vehículo ha cambiado
      ) {
        dispatch(
          putVehicle({
            licensePlate: patent,
            vehicleType: form.vehicleType.value,
            client: form.client,
            whatsapp: form.whatsapp,
            brand: form.brand,
            model: form.model,
            color: form.color, // Enviar el color del vehículo
          })
        );
      }

      navigate(`/ad/formService`, {
        state: {
          patent,
          vehicleType: form.vehicleType,
        },
      });
    }
  };

  const changehandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };
  const whatsappChangeHandler = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Filtrar solo caracteres numéricos
    setForm({
      ...form,
      whatsapp: value,
    });
  };
  const vehicleTypeChangeHandler = (value, action) => {
    setForm({
      ...form,
      [action.name]: value,
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
      <Link to={"/ad/createVehicle"}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <h1 className={style.title}>Datos del Vehículo</h1>
      <p className={style.subtitle}>Los campos con * son obligatorios</p>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>Patente</label>
        <p className={style.patent}>{patent}</p>
        <div className={style.form}>
          <div className={style.column}>
            <label className={style.label}>Cliente*</label>
            <input
              name="client"
              type="text"
              value={form.client}
              className={style.input}
              onChange={changehandler}
            />
            {errors.client && <p className={style.error}>{errors.client}</p>}
            <label className={style.label}>Telefono</label>
            <input
              name="whatsapp"
              type="text"
              value={form.whatsapp}
              className={style.input}
              onChange={whatsappChangeHandler}
            />
            <label className={style.label}>Tipo de vehiculo*</label>
            <Select
              name="vehicleType"
              options={vehicleTypes}
              placeholder="Seleccione un tipo"
              className={style.select}
              styles={selectStyles}
              value={form.vehicleType}
              onChange={vehicleTypeChangeHandler}
              theme={selectTheme}
              isClearable={true}
            />
            {errors.vehicleType && (
              <p className={style.error}>{errors.vehicleType}</p>
            )}
          </div>
          <div className={style.column}>
            <label className={style.label}>Modelo</label>
            <input
              name="model"
              type="text"
              value={form.model}
              className={style.input}
              onChange={changehandler}
            />
            <label className={style.label}>Marca*</label>
            <input
              name="brand"
              type="text"
              value={form.brand}
              className={style.input}
              onChange={changehandler}
            />
            {errors.brand && <p className={style.error}>{errors.brand}</p>}
            <label className={style.label}>Color*</label>
            <input
              name="color"
              type="text"
              value={form.color}
              className={style.input}
              onChange={changehandler}
            />
            {errors.color && <p className={style.error}>{errors.color}</p>}
          </div>
        </div>
        <button type="submit" className={style.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormVehicle;
