/* eslint-disable array-callback-return */
import {
  NEXT_PAGE,
  PREV_PAGE,
  RESET_NUM_PAGE,
  SET_PAGE_NUMBER,
} from "../actions/types";

const inicialState = {
  ongoingServices: [
    {
      client: "Lautaro Walter",
      vehicleType: "Sedán",
      patent: "HFT434",
      whatsapp: "03232313",
      model: "Spyder 911",
      workers: ["Gastón García", "Duvan", "Lautaro Walter"],
      brand: "Porshe",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Mario Martinez",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "10000" },
        { name: "Lavado Simple", value: "2500" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Lautaro Walter",
      vehicleType: "Sedán",
      patent: "HFT434",
      whatsapp: "03232313",
      model: "Spyder 911",
      workers: ["Gastón García", "Duvan", "Lautaro Walter"],
      brand: "Porshe",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
    },
    {
      client: "Julián Casablancas",
      vehicleType: "Sedán",
      patent: "JLP033",
      whatsapp: "15162324",
      model: "Ecosport",
      workers: ["Gastón García"],
      brand: "Ford",
      services: [
        { name: "Lavado Carrocería", value: "2000" },
        { name: "Lavado Simple", value: "1550" },
      ],
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
