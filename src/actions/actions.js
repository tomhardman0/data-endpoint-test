import { Api } from '../clients/api';

export const actionTypes = {
  'REQUEST_DATA': 'REQUEST_DATA',
  'RECEIVE_DATA': 'RECEIVE_DATA',
  'REQUEST_ERROR': 'REQUEST_ERROR'
};

export const requestData = () => dispatch => {
  return dispatch({ type: actionTypes.REQUEST_DATA, isLoading: true });
};

export const receiveData = (data) => dispatch => {
  return dispatch({ type: actionTypes.RECEIVE_DATA, data, isLoading: false });
};

export const requestError = () => dispatch => {
  return dispatch({ type: actionTypes.REQUEST_ERROR, error: true, isLoading: false });
};

export const getData = () => async (dispatch) => {
  try {
    dispatch(requestData());
    const dataStr = await Api.getData();
    const data = JSON.parse(dataStr);
    return dispatch(receiveData(data));
  } catch (e) {
    console.error(e);
    return dispatch(requestError());
  }
};
