export const RECEIVE_SUCCESS_API_RESPONSE = 'RECEIVE_SUCCESS_API_RESPONSE';
export const RECEIVE_FAILURE_API_RESPONSE = 'RECEIVE_FAILURE_API_RESPONSE';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const IS_LOADING = 'IS_LOADING';

export const updateLoader = (data) => ({ type: IS_LOADING, data });

export const receiveSuccessResponse = (data) => ({ type: RECEIVE_SUCCESS_API_RESPONSE, data });

export const receiveFailuresResponse = (data) => ({ type: RECEIVE_FAILURE_API_RESPONSE, data });

export const fetchApiRequest = () => ({ type: FETCH_USER_LIST });