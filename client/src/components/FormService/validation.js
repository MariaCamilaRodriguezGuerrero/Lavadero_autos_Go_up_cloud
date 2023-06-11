const validation = (
  selectedServices,
  fieldsOnView,
  selectedWorkers,
  submit
) => {
  let error = "";

  if (!selectedServices[fieldsOnView] || !selectedWorkers[fieldsOnView]) {
    error = "Seleccione un servicio y trabajadores";
  }
  if (submit) {
    const arr = [];
    for (let i = 0; i <= fieldsOnView; i++) {
      arr.push(
        !selectedServices[i] || !selectedWorkers[i] || !selectedWorkers[i][0]
      );
    }
    if (arr.find((e) => e === true)) {
      error = "Seleccione un servicio y trabajadores";
    }
  }
  return error;
};

export default validation;
