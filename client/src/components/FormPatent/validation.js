const validation = (patent) => {
  let error = "";

  if (!patent) {
    error = "Ingrese una patente";
  }
  if (patent.length < 6) {
    error = "Ingrese 6 caracteres como mínimo";
  }

  return error;
};

export default validation;
