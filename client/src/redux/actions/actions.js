import {
  SET_PAGE_NUMBER,
  GET_VEHICLE,
  CLEAN_VEHICLE,
  GET_SERVICES,
  GET_WORKERS,
  POST_ORDER,
  GET_ORDERS,
  POST_VEHICLE,
  PUT_VEHICLE,
  SEARCH_FILTER,
  PUT_ORDER,
  GET_ORDERS_COMPLETED,
  GET_PAYROLLS,
  POST_PAYROLLS,
  GET_USERS,
  SET_USER_TYPE,
  GET_ORDERS_COMPLETED_SUPER_ADMIN,
  GET_ORDERS_CANCELLED_SUPER_ADMIN,
  POST_WORKER,
  PUT_WORKER,
  DELETE_ORDER,
  POST_SERVICE,
  PUT_SERVICE,
  SELECT_SERVICE,
  GET_TOTAL_INVOICED,
  GET_PAYMENT,
  PUT_PAYMENT,
} from "./types";

import axios from "axios";

const getDate = (date = new Date()) => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}${month}${day}`;
};

// Acción para cambiar el número de página
export const changePageNumber = (number) => {
  return async function (dispatch) {
    dispatch({ type: SET_PAGE_NUMBER, payload: number });
  };
};

// Acción para obtener información de un vehículo
export const getVehicle = (patent) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(`/cars/${patent}`);
      dispatch({ type: GET_VEHICLE, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para limpiar la información de un vehículo
export const cleanVehicleData = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: CLEAN_VEHICLE, payload: {} });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para obtener información de los servicios
export const getServices = () => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(`/services`);
      dispatch({ type: GET_SERVICES, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para obtener información de los trabajadores
export const getWorkers = () => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(`/workers`);
      dispatch({ type: GET_WORKERS, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para crear una nueva orden
export const postOrder = (services) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.post(`/orders`, services);
      dispatch({ type: POST_ORDER, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para obtener información de las órdenes
export const getOrders = () => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(`/orders?orderStatus=pending`);
      dispatch({ type: GET_ORDERS, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para obtener las órdenes completadas
export const getOrdersCompleted = () => {
  const today = new Date();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const year = today.getFullYear();
  return async function (dispatch) {
    try {
      const serverData = await axios.get(
        `/orders?orderStatus=completed&orderDay=${day}&orderMonth=${month}&orderYear=${year}`
      );
      dispatch({ type: GET_ORDERS_COMPLETED, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para crear un nuevo vehículo
export const postVehicle = (vehicle) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.post(`/cars`, vehicle);
      dispatch({ type: POST_VEHICLE, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para actualizar un vehículo existente
export const putVehicle = (vehicle) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.put(
        `/cars/${vehicle.licensePlate}`,
        vehicle
      );
      dispatch({ type: PUT_VEHICLE, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para actualizar una orden existente
export const putOrder = (id, status) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.put(`/orders/${id}`, status);
      dispatch({ type: PUT_ORDER, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para aplicar un filtro de búsqueda
export const searchFilter = (filteredArray, saveInto) => {
  return {
    type: SEARCH_FILTER,
    payload: { filteredArray, saveInto },
  };
};

// Acción para crear una nueva nómina
export const postPayroll = () => {
  const today = new Date();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const year = today.getFullYear();
  return async function (dispatch) {
    try {
      const serverData = await axios.post(`/payrolls/`, {
        date: `${year}${month}${day}`,
      });
      dispatch({ type: POST_PAYROLLS, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para obtener información de las nóminas
export const getPayrolls = () => {
  const today = new Date();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const year = today.getFullYear();
  return async function (dispatch) {
    try {
      const serverData = await axios.get(`/payrolls/${year}${month}${day}`);
      dispatch({ type: GET_PAYROLLS, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para obtener información de los usuarios
export const getUsers = () => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(`/users`);
      dispatch({ type: GET_USERS, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};
export const setUserType = (userType) => {
  return async function (dispatch) {
    try {
      dispatch({ type: SET_USER_TYPE, payload: userType });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// -------------------- ACTIONS DE SUPER ADMIN -------------------------//

// Acción para obtener las órdenes completadas para superAdmin
export const getOrdersCompletedSuperAdmin = () => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(`/orders?orderStatus=completed`);
      dispatch({
        type: GET_ORDERS_COMPLETED_SUPER_ADMIN,
        payload: serverData.data,
      });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para obtener las órdenes canceladas para superAdmin
export const getOrdersCanceledSuperAdmin = () => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(`/orders?orderStatus=cancelled`);
      dispatch({
        type: GET_ORDERS_CANCELLED_SUPER_ADMIN,
        payload: serverData.data,
      });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para crear los trabajadores
export const postWorker = (worker) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.post(`/workers`, worker);
      dispatch({ type: POST_WORKER, payload: serverData.data });
      alert("Trabajador creado con exito");
    } catch (error) {
      alert("Este trabajador ya esta registrado");
    }
  };
};

// Acción para EDITAR los trabajadores
export const putWorker = (id, changes) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.put(`/workers/${id}`, changes);
      dispatch({ type: PUT_WORKER, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para Borrar los trabajadores

export const deleteOrder = (orderService) => {
  return async function (dispatch) {
    try {
      await axios.delete(`/orders/${orderService}`);
      dispatch({ type: DELETE_ORDER, payload: orderService });
    } catch (error) {
      // Manejar el error aquí
      console.log(error.message);
    }
  };
};

// Acción para crear los servicios
export const postService = (service) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.post(`/services`, service);
      dispatch({ type: POST_SERVICE, payload: serverData.data });
    } catch (error) {
      alert("Este servicio ya esta registrado");
    }
  };
};

// Acción para editar los servicios
export const putService = (id, service) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.put(`/services/${id}`, service);
      dispatch({ type: PUT_SERVICE, payload: serverData.data });
    } catch (error) {
      alert("Error");
    }
  };
};

// Acción para añadir el servicio seleccionado
export const selectService = (service) => {
  return { type: SELECT_SERVICE, payload: service };
};

export const getPayrollsChart = (startDate, endDate) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(
        `/payrolls/chart?startDate=${getDate(startDate)}&endDate=${getDate(
          endDate
        )}`
      );
      dispatch({ type: GET_PAYROLLS, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const getTotalInvoiced = () => {
  const today = new Date();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  return async function (dispatch) {
    try {
      const serverData = await axios.get(
        `/orders/date?orderMonth=${month}&orderStatus=completed`
      );
      dispatch({ type: GET_TOTAL_INVOICED, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const getPayment = (workerId) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(
        `http://lavadero_autos_api.test/payrolls/date?&workerId=${workerId}`
      );
      dispatch({ type: GET_PAYMENT, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const putPayment = (ids, status) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.put(
        `http://lavadero_autos_api.test/payrolls/${ids}`,
        status
      );
      dispatch({ type: PUT_PAYMENT, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};
