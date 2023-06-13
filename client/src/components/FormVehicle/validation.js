const validation = (form) => {
  let errors = {
    client: "",
    brand: "",
    vehicleType: "",
    color: "", // Nuevo campo para los errores del color del vehículo
  };

  if (!form.client) errors.client = "Ingrese el nombre del cliente";
  if (!form.brand) errors.brand = "Ingrese el número de la marca";
  if (!form.vehicleType) errors.vehicleType = "Seleccione un tipo de vehículo";
  if (!form.color) errors.color = "Ingrese el color del vehículo"; // Validar el campo de color del vehículo
  return errors;
};

export default validation;