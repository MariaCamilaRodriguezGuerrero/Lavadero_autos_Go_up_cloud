import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "./FormService.module.css";
import Select from "react-select";
import validation from "./validation";
import getDate from "./getDate";
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
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patent = location.state === null ? "" : location.state.patent;
  const vehicleType = location.state === null ? "" : location.state.vehicleType;
  const { servicesData, workersData, postOrderMessage } = useSelector(
    (state) => state
  );
  const [fieldsOnView, setFieldsOnView] = useState(0);

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
    filterOptions();
  }, [selectedServices]);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(validation(selectedServices, fieldsOnView, selectedWorkers, true));
    if (!validation(selectedServices, fieldsOnView, selectedWorkers, true)) {
      const cleanArray = selectedServices.filter((service) => !!service);
      dispatch(
        postOrder({
          idVehicle: patent,
          services: cleanArray.map((service, index) => {
            return {
              idService: service.value,
              date: getDate(),
              workers: selectedWorkers[index].map((worker) => worker.value),
            };
          }),
        })
      );
      navigate(`/services`);
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
            if (!selectedServices[i]) continue;
            if (selectedServices[i].value === service.value)
              filteredService = false;
          }
          return filteredService;
        })
    );
  };

  const servicesChangeHandler = (value, action) => {
    const num = action.name;
    let servicesPrev = selectedServices.map((e) => e);
    servicesPrev[num] = value;
    setSelectedServices(servicesPrev);
  };
  const workersChangeHandler = (value, action) => {
    const num = action.name;
    let workersNew = selectedWorkers.map((e) => e);
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
      primary: "#3cd8f0",
    },
  });

  const addFields = () => {
    if (fieldsOnView >= "4") return;
    setError(validation(selectedServices, fieldsOnView, selectedWorkers));
    if (!validation(selectedServices, fieldsOnView, selectedWorkers)) {
      document.getElementById(fieldsOnView + 1).style.display = "flex";
      setFieldsOnView(fieldsOnView + 1);
    }
  };

  const eraseField = (event) => {
    const num = event.target.name;
    document.getElementById(fieldsOnView).style.display = "none";
    setFieldsOnView(fieldsOnView - 1);
    const servicesPrev = selectedServices.map((e) => e);
    servicesPrev.splice(num, 1);
    servicesPrev.push(null);
    setSelectedServices(servicesPrev);
    const workersNew = selectedWorkers.map((e) => e);
    workersNew.splice(num, 1);
    workersNew.push(null);
    setSelectedWorkers(workersNew);
    setError(validation(selectedServices, fieldsOnView, selectedWorkers));
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
            isClearable={true}
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
        <div className={style.inputDivDynamic} id="1">
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            isClearable={true}
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsServices}
            value={selectedServices[1]}
            onChange={servicesChangeHandler}
            name={1}
          />
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsWorkers}
            value={selectedWorkers[1]}
            onChange={workersChangeHandler}
            name={1}
          />
          <button
            type="button"
            onClick={eraseField}
            name={1}
            className={style.eraseFieldBtn}
          >
            x
          </button>
        </div>
        <div className={style.inputDivDynamic} id="2">
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            isClearable={true}
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsServices}
            value={selectedServices[2]}
            onChange={servicesChangeHandler}
            name={2}
          />
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsWorkers}
            value={selectedWorkers[2]}
            onChange={workersChangeHandler}
            name={2}
          />
          <button
            type="button"
            onClick={eraseField}
            name={2}
            className={style.eraseFieldBtn}
          >
            x
          </button>
        </div>
        <div className={style.inputDivDynamic} id="3">
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            isClearable={true}
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsServices}
            value={selectedServices[3]}
            onChange={servicesChangeHandler}
            name={3}
          />
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsWorkers}
            value={selectedWorkers[3]}
            onChange={workersChangeHandler}
            name={3}
          />
          <button
            type="button"
            onClick={eraseField}
            name={3}
            className={style.eraseFieldBtn}
          >
            x
          </button>
        </div>
        <div className={style.inputDivDynamic} id="4">
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            isClearable={true}
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsServices}
            value={selectedServices[4]}
            onChange={servicesChangeHandler}
            name={4}
          />
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsWorkers}
            value={selectedWorkers[4]}
            onChange={workersChangeHandler}
            name={4}
          />
          <button
            type="button"
            onClick={eraseField}
            name={4}
            className={style.eraseFieldBtn}
          >
            x
          </button>
        </div>
        <div className={style.inputDivDynamic} id="5">
          <Select
            classNamePrefix="select"
            placeholder="Seleccione un tipo de servicio"
            isClearable={true}
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsServices}
            value={selectedServices[5]}
            onChange={servicesChangeHandler}
            name={5}
          />
          <Select
            isMulti
            classNamePrefix="select"
            placeholder="Seleccione Trabajadores"
            theme={selectTheme}
            className={style.select}
            styles={selectStyles}
            options={optionsWorkers}
            value={selectedWorkers[5]}
            onChange={workersChangeHandler}
            name={5}
          />
          <button
            type="button"
            onClick={eraseField}
            name={5}
            className={style.eraseFieldBtn}
          >
            x
          </button>
        </div>
        {error && <p className={style.error}>{error}</p>}
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
