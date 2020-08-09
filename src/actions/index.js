export { REQUEST_FILTER_FROM_LIST, REQUEST_RESET_FILTER_FROM_LIST, FILTER_FROM_LIST, RESET_MAIN_FILTER_FROM_LIST,
    REQUEST_MAIN_FILTER_FROM_LIST, REQUEST_RESET_MAIN_FILTER_FROM_LIST, MAIN_FILTER_FROM_LIST, RESET_FILTER_FROM_LIST } from './usersearch';
export { requestFilterFromList, filterFromList, resetFilterList,resetFilterFromList, requestFilterListForMainList, requestResetFilterListForMainList, filterListForMainList, resetFilterListForMainList } from './usersearch';

export const SET_EDIT_FORM_INDEX = 'SET_EDIT_FORM_INDEX';
export const RESET_EDIT_FORM_INDEX = 'RESET_EDIT_FORM_INDEX';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export const REQUEST_RESET_EDIT_FORM_INDEX = 'RESET_SET_EDIT_FORM_INDEX';
export const REQUEST_SET_EDIT_FORM_INDEX = 'REQUEST_SET_EDIT_FORM_INDEX';
export const REQUEST_TO_UPDATE_USER_DATA = 'REQUEST_TO_UPDATE_USER_DATA';

export const setEditFormIndex = (reducerData) => ({ type: SET_EDIT_FORM_INDEX, index: reducerData.index });
export const updateUserData = (reducerData) => ({ type: UPDATE_USER_DATA, data: reducerData });
export const resetEditFormIndex = () => ({ type: RESET_EDIT_FORM_INDEX });

export const requestResetEditFormIndex = () => ({ type: REQUEST_RESET_EDIT_FORM_INDEX });
export const requestSetEditFormIndex = (index) => ({ type: REQUEST_SET_EDIT_FORM_INDEX, index });
export const requestToUpdateUserData = (data) => ({ type: REQUEST_TO_UPDATE_USER_DATA, data });