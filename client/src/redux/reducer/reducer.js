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
} from "../actions/types";

const inicialState = {
  vehicleData: {},
  servicesData: [],
  workersData: [],
  postOrderMessage: "",
  postVehicleMessage: "",
  putVehicleMessage: "",
  putOrderMessage: "",
  orders: [ {
    "licensePlate": "ASDE11",
    "vehicleType": "SEDAN/CITY CAR",
    "client": "Carlos2",
    "whatsapp": "555555555",
    "brand": "",
    "model": "",
    "services": [
        {
            "serviceName": "LIMPIEZA FULL",
            "cost": "5000",
            "workers": [
                "Maria",
                "Duvan"
            ],
            "date": "12-06-2023 11:38"
        },
        {
          "serviceName": "LIMPIEZA FULL",
          "cost": "5000",
          "workers": [
              "Maria",
              "Duvan"
          ],
          "date": "12-06-2023 11:38"
      },
      {
        "serviceName": "LIMPIEZA FULL",
        "cost": "5000",
        "workers": [
            "Maria",
            "Duvan"
        ],
        "date": "12-06-2023 11:38"
    },
    {
      "serviceName": "LIMPIEZA FULL",
      "cost": "5000",
      "workers": [
          "Maria",
          "Duvan"
      ],
      "date": "12-06-2023 11:38"
  },
  {
    "serviceName": "LIMPIEZA FULL",
    "cost": "5000",
    "workers": [
        "Maria",
        "Duvan"
    ],
    "date": "12-06-2023 11:38"
},
{
  "serviceName": "LIMPIEZA FULL",
  "cost": "5000",
  "workers": [
      "Maria",
      "Duvan"
  ],
  "date": "12-06-2023 11:38"
},
{
  "serviceName": "LIMPIEZA FULL",
  "cost": "5000",
  "workers": [
      "Maria",
      "Duvan"
  ],
  "date": "12-06-2023 11:38"
},
{
  "serviceName": "LIMPIEZA FULL",
  "cost": "5000",
  "workers": [
      "Maria",
      "Duvan"
  ],
  "date": "12-06-2023 11:38"
},
{
  "serviceName": "LIMPIEZA FULL",
  "cost": "5000",
  "workers": [
      "Maria",
      "Duvan"
  ],
  "date": "12-06-2023 11:38"
},
    ]
},
{
    "licensePlate": "AABB55",
    "vehicleType": "SEDAN/CITY CAR",
    "client": "lautaro",
    "whatsapp": "1111111111",
    "brand": "",
    "model": "",
    "services": [
        {
            "serviceName": "LIMPIEZA FULL",
            "cost": "5000",
            "workers": [
                "Maria",
                "Duvan"
            ],
            "date": "12-06-2023 11:01"
        }
    ]
},],
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
    case SEARCH_FILTER:
      return { ...state, ordersFiltered: payload };
    case POST_VEHICLE:
      return { ...state, postVehicleMessage: payload };
    case PUT_VEHICLE:
      return { ...state, putVehicleMessage: payload };
    case PUT_ORDER:
      return { ...state, putOrderMessage: payload };
    default:
      return { ...state };
  }
}
