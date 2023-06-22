import style from "./Services.module.css";
import Service from "../../componentsSuperAdmin/Service/Service";
import { Link } from "react-router-dom";
import Select from "react-select";
import vehicleTypes from "../../utils/vehicleTypes";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../redux/actions/actions";

const Services = () => {

    const dispatch = useDispatch();

    const { servicesData } = useSelector((state) => state);

    const [selectedOption, setSelectedOption] = useState(vehicleTypes[0]);

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

    const filterServices = () => {
        const servicesFiltered = [];
        Array.isArray(servicesData) && servicesData.forEach(service => {
            if (selectedOption !== null && service.vehicleType === selectedOption.value) {
                servicesFiltered.push(service);
            };
        });
        return servicesFiltered;
    };

    const selectHandleChange = (option) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        dispatch(getServices())
    }, [dispatch])

    return (
        <div className={style.pageContainer}>
            <div className={style.itemsContainer}>
                <div className={style.itemsHeader}>
                    <h1 className={style.title}>Servicios</h1>
                    <Link to='/su/services/servicesRegistration'>
                        <button className={style.addService}>Agregar Servicio</button>
                    </Link>
                </div>
                <div className={style.list}>
                    <Select
                        name="vehicleType"
                        options={vehicleTypes}
                        placeholder="Seleccione un tipo"
                        className={style.select}
                        styles={selectStyles}
                        value={selectedOption}
                        onChange={selectHandleChange}
                        theme={selectTheme}
                        isClearable={true}
                    />
                    {filterServices().map(service => {
                        return <Service
                            key={service.id}
                            id={service.id}
                            serviceName={service.serviceName}
                            vehicleType={service.vehicleType}
                            cost={service.cost}
                            discountDay={service.discountDay} />
                    })}
                </div>
            </div>
        </div>
    )

};
export default Services;