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
} from "../actions/types";

const inicialState = {
  vehicleData: {},
  servicesData: [],
  workersData: [],
  postOrderMessage: "",
  postVehicleMessage: "",
  putVehicleMessage: "",
  putOrderMessage: "",
  orders: [],
  ordersFiltered: [],
};

export default function rootReducer(state = inicialState, { type, payload }) {
  switch (type) {
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: payload };
    case GET_VEHICLE:
      return { ...state, vehicleData: payload };
    case CLEAN_VEHICLE:
      return { ...state, vehicleData: payload };
    case GET_SERVICES:
      return { ...state, servicesData: payload };
    case GET_WORKERS:
      return { ...state, workersData: payload };
    case POST_ORDER:
      return { ...state, postOrderMessage: payload };
    case GET_ORDERS:
      return { ...state, orders: payload };
    case POST_VEHICLE:
      return { ...state, postVehicleMessage: payload };
    case PUT_VEHICLE:
      return { ...state, putVehicleMessage: payload };
    case PUT_ORDER:
      return { ...state, putOrderMessage: payload };
    case SEARCH_PATENT:
      return { ...state, vehicleData: payload };
    default:
      return { ...state };
  }
}
