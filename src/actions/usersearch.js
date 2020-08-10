export const FILTER_FROM_LIST = 'FILTER_FROM_LIST';
export const RESET_FILTER_FROM_LIST = 'RESET_FILTER_FROM_LIST';

export const MAIN_FILTER_FROM_LIST = 'MAIN_FILTER_FROM_LIST';
export const RESET_MAIN_FILTER_FROM_LIST = 'RESET_MAIN_FILTER_FROM_LIST';

export const REQUEST_UPDATE_UI_LIST = 'REQUEST_UPDATE_UI_LIST';
export const UPDATE_UI_LIST = 'UPDATE_UI_LIST';
export const RESET_UPDATE_UI_LIST = 'RESET_UPDATE_UI_LIST';

export const REQUEST_MAIN_FILTER_FROM_LIST = 'REQUEST_MAIN_FILTER_FROM_LIST';
export const REQUEST_RESET_MAIN_FILTER_FROM_LIST = 'REQUEST_RESET_MAIN_FILTER_FROM_LIST';

export const filterFromList = (search) => ({ type: FILTER_FROM_LIST, data: search });
export const resetFilterList = () => ({ type: RESET_FILTER_FROM_LIST });

/* ON SELECT FROM AUTO COMPLETE */

export const filterListForMainList = (search) => ({ type: MAIN_FILTER_FROM_LIST, data: search });
export const resetFilterListForMainList = () => ({ type: RESET_MAIN_FILTER_FROM_LIST });

export const requestResetFilterListForMainList = () => ({type: REQUEST_RESET_MAIN_FILTER_FROM_LIST});

/* ON SELECT FROM AUTO COMPLETE */

/* UPDATE THE UI LIST ACTIONS */

export const requestUpdateUIList = (search) => ({ type: REQUEST_UPDATE_UI_LIST, data: search });
export const resetUpdateUIList = () => ({ type: RESET_UPDATE_UI_LIST });

/* UPDATE THE UI LIST ACTIONS */