import style from "./FormServicesRegistration.module.css";
import Select from "react-select";
import { useState } from "react";
import validationServicesForm from "../../validations/validationsServicesForm";
import vehicleTypes from "../../utils/vehicleTypes";
import { postService } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FormServices = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        serviceName: "",
        vehicleType: "",
        cost: "",
        discountDay: ""
    });
    const [errors, setErrors] = useState({
        serviceName: "",
        vehicleType: "",
        cost: "",
        discountDay: ""
    });

    const [visButton, setVisButton] = useState(false);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value });
        setErrors(validationServicesForm({ ...form, [property]: value }, 'errors'));  // agregar el state "errors" si se hará validación del botón
        setVisButton(validationServicesForm({ ...form, [property]: value }));
    };

    const vehicleHandleChange = (value, event) => {
        setForm({
            ...form,
            [event.name]: value,
        });
        setErrors(validationServicesForm({ ...form, [event.name]: value }, 'errors'));
        setVisButton(validationServicesForm({ ...form, [event.name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postService({
            serviceName: form.serviceName,
            vehicleType: form.vehicleType.value,
            cost: form.cost,
            discountDay: form.discountDay
        }));

        alert('Servicio creado!');
        navigate('/su/services');
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
            <h1 className={style.title}>Registro de servicios</h1>
            <p className={style.subtitle}>Los campos con * son obligatorios</p>
            <form onSubmit={handleSubmit}>
                <div className={style.form}>
                    <div className={style.column}>
                        <label className={style.label}>Nombre del servicio*</label>
                        <input
                            name="serviceName"
                            type="text"
                            value={form.serviceName}
                            className={style.input}
                            onChange={handleChange}
                        />
                        {errors.serviceName && <p className={style.error}>{errors.serviceName}</p>}

                        <label className={style.label}>Tipo de vehículo*</label>
                        <Select
                            name="vehicleType"
                            options={vehicleTypes}
                            placeholder="Seleccione un tipo"
                            className={style.select}
                            styles={selectStyles}
                            value={form.vehicleType}
                            onChange={vehicleHandleChange}
                            theme={selectTheme}
                            isClearable={true}
                        />

                        {errors.vehicleType && <p className={style.error}>{errors.vehicleType}</p>}

                    </div>
                    <div className={style.column}>
                        <label className={style.label}>Costo*</label>
                        <input
                            name="cost"
                            type="number"
                            value={form.address}
                            className={style.input}
                            onChange={handleChange}
                        />
                        {errors.cost && <p className={style.error}>{errors.cost}</p>}

                        <label className={style.label}>Descuento del día</label>
                        <input
                            name="discountDay"
                            type="number"
                            value={form.branch}
                            className={style.input}
                            onChange={handleChange}
                        />
                        {errors.discountDay && <p className={style.error}>{errors.discountDay}</p>}

                    </div>
                </div>
                <button className={style.submit} disabled={!visButton} onClick={handleSubmit}>
                    Enviar
                </button>
            </form>
        </div>
    );

}

export default FormServices;