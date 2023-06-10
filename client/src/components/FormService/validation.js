const validation = (selectedServices, fields, selectedWorkers = []) => {
  let errors = {};

  if (selectedServices[fields.length] === undefined) {
    errors.service = "Seleccione un servicio";
  }
  // console.log(
  //   selectedWorkers[0] &&
  //     selectedServices.map((service, index) => selectedWorkers[index]) ===
  //       undefined
  // );

  return errors;
};

export default validation;
