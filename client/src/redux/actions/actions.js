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
  SEARCH_PATENT,
  PUT_ORDER,
} from "./types";

import axios from "axios";

export const changePageNumber = (number) => {
  return async function (dispatch) {
    dispatch({ type: SET_PAGE_NUMBER, payload: number });
  };
};

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

export const cleanVehicleData = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: CLEAN_VEHICLE, payload: {} });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

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
export const putOrder = (id, status) => {
  return async function (dispatch) {
    try {
      const serverData = await axios.put(
        `http://lavadero_autos_api.test/orders/${id}`,
        status
      );
      dispatch({ type: PUT_VEHICLE, payload: serverData.data });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const searchPatente = (patent) => {
  return {
    type: SEARCH_PATENT,
    payload: patent,
  };
};
