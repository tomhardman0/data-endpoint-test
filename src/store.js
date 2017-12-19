import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { actionTypes } from './actions/actions';

const initialState = {
  data: null,
  isLoading: true,
  error: null
};

// REDUCER
export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.REQUEST_DATA:
    return {...state, isLoading: action.isLoading };
  case actionTypes.RECEIVE_DATA:
    return {...state, isLoading: action.isLoading, data: action.data };
  case actionTypes.REQUEST_ERROR:
    return {...state, error: action.error, isLoading: action.isLoading };
  default:
    return state;
  }
};

export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};
