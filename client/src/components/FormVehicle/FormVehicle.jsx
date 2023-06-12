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

const FormVehicle = () => {
  const { vehicleData, postVehicleMessage, putVehicleMessage } = useSelector(
    (state) => state
  );
  const [form, setForm] = useState({
    client: "",
    whatsapp: "",
    vehicleType: "",
    model: "",
    brand: "",
  });
  const [errors, setErrors] = useState({
    client: "",
    whatsapp: "",
    vehicleType: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patent = location.state === null ? "" : location.state.patent;

  useEffect(() => {
    location.state === null && navigate("/createVehicle");
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
    });
  }, [vehicleData]);

  const ejemploTipoVehiculo = [
    { value: "SEDAN/CITY CAR", label: "SEDAN/CITY CAR" },
    { value: "HATCHBACK", label: "HATCHBACK" },
    {
      value: "SUV/CAMIONETAS  (2 CORRIDAS)",
      label: "SUV/CAMIONETAS  (2 CORRIDAS)",
    },
    {
      value: "SUV/CAMIONETAS     (3 CORRIDAS)",
      label: "SUV/CAMIONETAS     (3 CORRIDAS)",
    },
    { value: "FURGON Y CAMION 3/4", label: "FURGON Y CAMION 3/4" },
  ];

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
          })
        );
      }
      if (
        vehicleData.client !== form.client ||
        vehicleData.vehicleType !== form.vehicleType.value ||
        vehicleData.whatsapp !== form.whatsapp ||
        vehicleData.brand !== form.brand ||
        vehicleData.model !== form.model
      ) {
        dispatch(
          putVehicle({
            licensePlate: patent,
            vehicleType: form.vehicleType.value,
            client: form.client,
            whatsapp: form.whatsapp,
            brand: form.brand,
            model: form.model,
          })
        );
      }

      navigate(`/formService`, {
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
            <label className={style.label}>Cliente*</label>
            <input
              name="client"
              type="text"
              value={form.client}
              className={style.input}
              onChange={changehandler}
            />
            {errors.client && <p className={style.error}>{errors.client}</p>}
            <label className={style.label}>WhatsApp*</label>
            <input
              name="whatsapp"
              type="text"
              value={form.whatsapp}
              className={style.input}
              onChange={whatsappChangeHandler}
            />
            {errors.whatsapp && (
              <p className={style.error}>{errors.whatsapp}</p>
            )}
            <label className={style.label}>Tipo de vehiculo*</label>
            <Select
              name="vehicleType"
              options={ejemploTipoVehiculo}
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
            <label className={style.label}>Marca</label>
            <input
              name="brand"
              type="text"
              value={form.brand}
              className={style.input}
              onChange={changehandler}
            />
            <label className={style.label}>Patente</label>
            <p className={style.patent}>{patent}</p>
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
