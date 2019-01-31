import {FETCH_START, FETCH_FAILURE, FETCH_SUCCESS} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: '',
        fetching: true
      };
    case FETCH_SUCCESS:
    return{
      ...state,
      characters: [...state.characters, ...action.payload],
      fetching: false,
      error: ''
    }
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    default:
      return state;
  }
};
