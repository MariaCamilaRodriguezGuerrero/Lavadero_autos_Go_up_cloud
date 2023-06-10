import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "./FormService.module.css";
import Select from "react-select";
import validation from "./validation";
import {
  getServices,
  getWorkers,
  postOrder,
} from "../../redux/actions/actions";

const FormService = () => {
  const [optionsServices, setOptionsServices] = useState([]);
  const [optionsWorkers, setOptionsWorkers] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [fields, setFields] = useState([]);
  const [errors, setErrors] = useState({
    service: "",
    workers: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patent = location.state === null ? "" : location.state.patent;
  const vehicleType = location.state === null ? "" : location.state.vehicleType;
  const { servicesData, workersData, postOrderMessage } = useSelector(
    (state) => state
  );

  useEffect(() => {
    location.state === null && navigate("/createVehicle");
  }, [location.state, navigate]);

  useEffect(() => {
    dispatch(getServices());
    dispatch(getWorkers());
  }, [dispatch]);

  useEffect(() => {
    servicesData.length &&
      setOptionsServices(
        servicesData
          .filter((service) => service.vehicleType === vehicleType.value)
          .map((service) => {
            return {
              label: service.serviceName,
              value: service.id,
            };
          })
      );
  }, [servicesData]);

  useEffect(() => {
    workersData.length &&
      setOptionsWorkers(
        workersData.map((worker) => {
          return {
            label: worker.name,
            value: worker.rut_passport,
          };
        })
      );
  }, [workersData]);

  useEffect(() => {
    console.log(postOrderMessage);
  }, [postOrderMessage]);

  const submitHandler = (e) => {
    e.preventDefault();

    setErrors(validation(selectedServices, fields, selectedWorkers));
    if (false) {
      /*
      var today = new Date();
      const year = today.getFullYear();
      const month =
        today.getMonth() + 1 < 10
          ? `0${today.getMonth() + 1}`
          : today.getMonth() + 1;
      const day =
        today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
      let hours =
        today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
      let minutes =
        today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
      let seconds =
        today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

      var dateTime = `${year}${month}${day}${hours}${minutes}${seconds}`;
      dispatch(
        postOrder({
          idVehicle: patent,
          services: selectedServices.map((service, index) => {
            return {
              idService: service.value,
              date: dateTime,
              workers: selectedWorkers[index].map((worker) => worker.value),
            };
          }),
        })
        );
        */
      //navigate(`/services`);
    }
  };

  const filterOptions = () => {
    setOptionsServices(
      servicesData
        .filter((service) => service.vehicleType === vehicleType.value)
        .map((service) => {
          return {
            label: service.serviceName,
            value: service.id,
          };
        })
        .filter((service) => {
          let filteredService = true;
          for (let i = 0; i < selectedServices.length; i++) {
            if (selectedServices[i].value === service.value)
              filteredService = false;
          }
          return filteredService;
        })
    );
  };
  const servicesChangeHandler = (value, action) => {
    const num = action.name;
    let servicesPrev = selectedServices;
    servicesPrev[num] = value;
    setSelectedServices(servicesPrev);
    filterOptions();
  };
  const workersChangeHandler = (value, action) => {
    const num = action.name;
    let workersNew = selectedWorkers;
    workersNew[num] = value;
    setSelectedWorkers(workersNew);
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

  const addFields = () => {
    if (fields.length > 4) return;
    setErrors(validation(selectedServices, fields));
    if (!validation(selectedServices, fields).service) {
      setFields([
        ...fields,
        <div className={style.inputDiv}>
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsServices}
            value={selectedServices[fields.length + 1]}
            onChange={servicesChangeHandler}
            name={fields.length + 1}
          />
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsWorkers}
            value={selectedWorkers[fields.length + 1]}
            onChange={workersChangeHandler}
            name={fields.length + 1}
          />
          <button type="button" onClick={eraseField} id={fields.length + 1}>
            Borrar
          </button>
        </div>,
      ]);
    }
  };

  const eraseField = (event) => {
    /*
    console.log(event.target.id);
    let arr = fields;
    console.log(arr);
    arr.splice(event.target.id, 1);
    console.log(arr);
    */
  };
  return (
    <div>
      <Link to={"/formVehicle"} state={patent}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <form className={style.form} onSubmit={submitHandler}>
        <h1 className={style.title}>Crear Servicios</h1>
        <div className={style.inputDiv}>
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsServices}
            value={selectedServices[0]}
            onChange={servicesChangeHandler}
            name={0}
          />
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsWorkers}
            value={selectedWorkers[0]}
            onChange={workersChangeHandler}
            name={0}
          />
        </div>
        {fields}
        {errors.service && <p className={style.error}>{errors.service}</p>}
        <button type="button" onClick={addFields} className={style.addBtn}>
          +
        </button>
        <button className={style.submit} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormService;
