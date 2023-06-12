const validation = (form) => {
  let errors = {
    client: "",
    whatsapp: "",
    vehicleType: "",
  };

  if (!form.client.trim()) errors.client = "Ingrese el nombre del cliente";
  if (!form.whatsapp.trim()) errors.whatsapp = "Ingrese el número del cliente";
  if (form.whatsapp.trim().length > 9)
    errors.whatsapp = "Ingrese máximo 9 caracteres";
  if (!form.vehicleType) errors.vehicleType = "Seleccione un tipo de vehículo";
  return errors;
};

export default validation;
