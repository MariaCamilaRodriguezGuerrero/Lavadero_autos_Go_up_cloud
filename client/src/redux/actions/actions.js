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
  GET_ORDERS_COMPLETED_SUPER_ADMIN
} from "./types";


import axios from "axios";

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
      const serverData = await axios.get(
        `http://lavadero_autos_api.test/cars/${patent}`
      );
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
      const serverData = await axios.get(
        `http://lavadero_autos_api.test/services`
      );
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
      const serverData = await axios.get(
        `http://lavadero_autos_api.test/workers`
      );
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
      const serverData = await axios.post(
        `http://lavadero_autos_api.test/orders`,
        services
      );
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
      const serverData = await axios.get(
        `http://lavadero_autos_api.test/orders?orderStatus=pending`
      );
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
        `http://lavadero_autos_api.test/orders?orderStatus=completed&orderDay=${day}&orderMonth=${month}&orderYear=${year}`
      );
      dispatch({ type: GET_ORDERS_COMPLETED, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para obtener las órdenes completadas para superAdmin
export const getOrdersCompletedSuperAdmin = () => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get(
        `http://lavadero_autos_api.test/orders?orderStatus=completed`
      );
      dispatch({ type: GET_ORDERS_COMPLETED_SUPER_ADMIN, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

// Acción para crear un nuevo vehículo
export const postVehicle = (vehicle) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.post(
        `http://lavadero_autos_api.test/cars`,
        vehicle
      );
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
        `http://lavadero_autos_api.test/cars/${vehicle.licensePlate}`,
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
      const serverData = await axios.put(
        `http://lavadero_autos_api.test/orders/${id}`,
        status
      );
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
      const serverData = await axios.post(
        `http://lavadero_autos_api.test/payrolls/`,
        { date: `${year}${month}${day}` }
      );
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
      const serverData = await axios.get(
        `http://lavadero_autos_api.test/payrolls/${year}${month}${day}`
      );
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
      const serverData = await axios.get(
        `http://lavadero_autos_api.test/users`
      );
      dispatch({ type: GET_USERS, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};