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
} from "../actions/types";

// Estado inicial de la aplicación
const initialState = {
  vehicleData: {}, // Datos del vehículo
  servicesData: [], // Datos de los servicios
  workersData: [], // Datos de los trabajadores
  postOrderMessage: "", // Mensaje de respuesta al crear una orden
  postVehicleMessage: "", // Mensaje de respuesta al crear un vehículo
  putVehicleMessage: "", // Mensaje de respuesta al actualizar un vehículo
  putOrderMessage: "", // Mensaje de respuesta al actualizar una orden
  orders: [], // Lista de órdenes
  ordersFiltered: [], // Lista de órdenes filtradas
  ordersCompleted: [], // Lista de órdenes completadas
  ordersCompletedFiltered: [], // Lista de órdenes completadas filtradas
  payrolls: [], // Lista de nóminas
  postPayrollMessage: "", // Mensaje de respuesta al crear una nómina
  usersData: [], // Datos de los usuarios
};

// Reducer que maneja el estado de la aplicación
export default function rootReducer(state = initialState, { type, payload }) {
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
    case SEARCH_FILTER:
      return { ...state, [payload.saveInto]: payload.filteredArray };
    case POST_VEHICLE:
      return { ...state, postVehicleMessage: payload };
    case PUT_VEHICLE:
      return { ...state, putVehicleMessage: payload };
    case PUT_ORDER:
      return { ...state, putOrderMessage: payload };
    case GET_ORDERS_COMPLETED:
      return { ...state, ordersCompleted: payload };
    case GET_PAYROLLS:
      return { ...state, payrolls: payload };
    case POST_PAYROLLS:
      return { ...state, postPayrollMessage: payload };
    case GET_USERS:
      return { ...state, usersData: payload };
    default:
      return { ...state };
  }
}