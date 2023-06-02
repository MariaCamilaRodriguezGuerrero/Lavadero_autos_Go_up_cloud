import {
  NEXT_PAGE,
  PREV_PAGE,
  RESET_NUM_PAGE,
  RESET_PAGE,
  SET_PAGE_NUMBER
} from "./types";

export function resetPage() {
  return {
    type: RESET_PAGE,
  };
}

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function resetNumPage() {
  return {
    type: RESET_NUM_PAGE,
  };
}

//paginacion nueva
export const changePageNumber = (number) => {
  return async function (dispatch) {
    dispatch({ type: SET_PAGE_NUMBER, payload: number });
  };
};