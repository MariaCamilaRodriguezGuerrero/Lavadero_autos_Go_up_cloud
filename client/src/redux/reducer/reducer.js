/* eslint-disable array-callback-return */
import {
  NEXT_PAGE,
  PREV_PAGE,
  RESET_NUM_PAGE,
  SET_PAGE_NUMBER
} from "../actions/types"


const inicialState = {
  ongoingServices: 
  [{
    cliente: "Lautaro Walter",
    tipoVehiculo: "Sedán",
    patenteParam: "HFT434",
    whatsapp: "+32 03232313",
    modelo: "Spyder 911",
    nombreTrabajador: ["Gastón García", "Duvan", "Lautaro Walter"],
    marca: "Porshe",
    tipoServicios: ["Lavado Carrocería", "Lavado Simple"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  {
    cliente: "Julián Casablancas",
    tipoVehiculo: "Sedán",
    patenteParam: "JLP033",
    whatsapp: "+78 15162324",
    modelo: "Ecosport",
    nombreTrabajador: ["Gastón García"],
    marca: "Ford",
    tipoServicios: ["Lavado Carrocería"],
  },
  ],
  numPage: 1,
};

export default function rootReducer(state = inicialState, { type, payload }) {
  switch (type) {
    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    case RESET_NUM_PAGE:
      return {
        ...state,
        numPage: 1,
      };
      case SET_PAGE_NUMBER:
        return { ...state, pageNumber: payload };
    default:
      return { ...state };
  }
}