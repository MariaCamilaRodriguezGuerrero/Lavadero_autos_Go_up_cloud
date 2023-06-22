const validationServicesForm = (form, state) => {      // agregar state si se hará validación del botón
    const errors = {};
    let visButton = true;

    if (!form.serviceName) errors.serviceName = '*Campo requerido';
    else if (form.serviceName.length > 40) errors.serviceName = '*40 caracteres máximo!';
    else if (form.serviceName.includes('  ')) errors.serviceName = "*No puede haber más de dos espacios seguidos";
    else if (form.serviceName[0] === ' ' || form.serviceName[form.serviceName.length - 1] === ' ') errors.serviceName = "*No puede haber espacios iniciales o finales";

    if (!form.vehicleType) errors.vehicleType = '*Campo requerido';

    if (!form.cost) errors.cost = '*Campo requerido';
    else if (form.cost <= 0) errors.cost = '*Debe ser mayor a cero!';
    else if (form.cost < 0) errors.cost = '*Debe ser un número positivo!';
    // else if (form.cost > ****) errors.cost = '*Costo máximo';    // Por si se necesita un costo máximo

    if (form.discountDay < 0) errors.discountDay = '*Debe ser un número positivo';

    if (Object.keys(errors).length) visButton = false;

    if (state === 'errors') return errors;
    else return visButton;
};

export default validationServicesForm;