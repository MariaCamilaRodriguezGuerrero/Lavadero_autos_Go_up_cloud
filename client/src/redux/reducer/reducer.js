import {
  SET_PAGE_NUMBER,
  GET_VEHICLE,
  CLEAN_VEHICLE,
  GET_SERVICES,
  GET_WORKERS,
} from "../actions/types";

const inicialState = {
  ongoingServices: [
    {
      patent: "HFT434",
      client: "Lautaro Walter",
      whatsapp: "03232313",
      brand: "Porshe",
      model: "Porsche Macan",
      vehicleType: "sedán",
      services: [
        {
          name: "Lavado Carrocería",
          value: "2000000",
          workers: [
            "Gastón García",
            "Duvan",
            "Lautaro Walter",
            "Yhilmar Sanchez",
          ],
          date: "08-06-2023 10:00",
        },
        {
          name: "Lavado Simple",
          value: "1550",
          workers: ["Gastón García", "Lautaro Walter"],
          date: "08-06-2023 12:15",
        },
      ],
    },
  ],
  vehicleData: {},
  servicesData: [],
  workersData: [],
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
    default:
      return { ...state };
  }
}
