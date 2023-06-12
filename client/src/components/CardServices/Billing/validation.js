const validation = (medioPago) => {
  let error = "";

  if (!medioPago) error = "Seleccione un medio de pago";
  return error;
};

export default validation;
