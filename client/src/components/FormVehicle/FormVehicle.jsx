import style from "./FormVehicle.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getVehicle } from "../../redux/actions/actions";

const FormVehicle = () => {
  const { vehicleData } = useSelector((state) => state);
  const [client, setClient] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [error, setError] = useState("");
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
    setClient(vehicleData.client);
    setVehicleType({
      value: vehicleData.vehicleType,
      label: vehicleData.vehicleType,
    });
    setWhatsapp(vehicleData.whatsapp);
    setBrand(vehicleData.brand);
    setModel(vehicleData.model);
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
    let valid = true;

    // Validar campos requeridos
    if (client.trim() === "") {
      valid = false;
      document.getElementById("clienteError").style.display = "block";
    } else {
      document.getElementById("clienteError").style.display = "none";
    }

    if (whatsapp.trim() === "") {
      valid = false;
      document.getElementById("whatsappError").style.display = "block";
    } else {
      document.getElementById("whatsappError").style.display = "none";
    }

    if (vehicleType === "") {
      valid = false;
      document.getElementById("tipoVehiculoError").style.display = "block";
    } else {
      document.getElementById("tipoVehiculoError").style.display = "none";
    }
    //envío Post o Put al Back
    /*
    console.log({
      id: patent,
      vehicleType: vehicleType.value,
      client,
      whatsapp,
      brand,
      model,
    });
    */
    if (valid) {
      navigate(`/formService`, {
        state: {
          patent,
          vehicleType,
        },
      });
    }
  };

  const handleWhatsappChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Filtrar solo caracteres numéricos
    setWhatsapp(inputValue);
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
              type="text"
              value={client}
              className={style.input}
              onChange={(e) => setClient(e.target.value)}
            />
            <p id="clienteError" className={style.error}>
              Ingrese el nombre del cliente
            </p>
            <label className={style.label}>WhatsApp*</label>
            <input
              type="text"
              value={whatsapp}
              className={style.input}
              onChange={handleWhatsappChange}
            />
            <p id="whatsappError" className={style.error}>
              Ingrese el número de WhatsApp
            </p>

            <label className={style.label}>Tipo de vehiculo*</label>
            <Select
              options={ejemploTipoVehiculo}
              placeholder="Seleccione un tipo"
              className={style.select}
              styles={selectStyles}
              value={vehicleType}
              onChange={(e) => setVehicleType(e)}
              theme={selectTheme}
            />
            <p id="tipoVehiculoError" className={style.error}>
              Seleccione el tipo de vehículo
            </p>
          </div>
          <div className={style.column}>
            <label className={style.label}>Modelo</label>
            <input
              type="text"
              value={model}
              className={style.input}
              onChange={(e) => setModel(e.target.value)}
            />
            <label className={style.label}>Marca</label>
            <input
              type="text"
              value={brand}
              className={style.input}
              onChange={(e) => setBrand(e.target.value)}
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
