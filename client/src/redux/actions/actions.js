import {
  SET_PAGE_NUMBER,
  GET_VEHICLE,
  CLEAN_VEHICLE,
  GET_SERVICES,
  GET_WORKERS,
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
