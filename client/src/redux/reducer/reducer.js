import {
  SET_PAGE_NUMBER,
  GET_VEHICLE,
  CLEAN_VEHICLE,
  GET_SERVICES,
  GET_WORKERS,
  POST_ORDER,
  GET_ORDERS,
} from "../actions/types";

const inicialState = {
  orders: [
    {
      patent: "CDLG54",
      client: "María",
      whatsapp: "912376434",
      brand: "Renault",
      model: "R4",
      vehicleType: "Camión",
      services: [
        {
          name: "LIMPIEZA DE TECHO",
          value: "10000",
          workers: ["Duvan"],
          date: "09-06-2023 12:48",
        },
        {
          name: "LIMPIEZA DE PLASTICOS",
          value: "10000",
          workers: ["María", "Duvan"],
          date: "09-06-2023 12:15",
        },
      ],
    },
  ],
  vehicleData: {},
  servicesData: [],
  workersData: [],
  postOrderMessage: "",
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
    default:
      return { ...state };
  }
}
