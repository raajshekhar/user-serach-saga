import { SET_EDIT_FORM_INDEX, RESET_EDIT_FORM_INDEX, UPDATE_USER_DATA, FILTER_FROM_LIST, MAIN_FILTER_FROM_LIST, RESET_FILTER_FROM_LIST,
    RESET_MAIN_FILTER_FROM_LIST } from '../actions';
import { RECEIVE_SUCCESS_API_RESPONSE, RECEIVE_FAILURE_API_RESPONSE, IS_LOADING } from '../actions/getuserlist';
import { UPDATE_UI_LIST } from '../actions/usersearch';

const initialState = {
    isLoading: false,
    getUserList: [],
    getUserListError: '',
    selectedEditFormIndex: null,
    showUIList: [],
    list: [],
    filterList: []
};

const commonReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_EDIT_FORM_INDEX:
            return { ...state, editUserInfo: { ...state.list[action.index-1] } }

        case RESET_EDIT_FORM_INDEX:
            return { ...state, editUserInfo: null }

        case UPDATE_USER_DATA:
            let cloneList = {...state}['list'];
            cloneList[action.data.id-1] = {...action.data};
            return { ...state, showUIList: [...cloneList], editUserInfo: null }

        case FILTER_FROM_LIST:
            const cloneListForFilter = {...state}['list'];
            const filterList = !action.data ? [] : cloneListForFilter.filter(data => data.title.toLocaleLowerCase().includes(action.data.toLocaleLowerCase()))
            return { ...state, filterList }

        case RESET_FILTER_FROM_LIST:
            return { ...state, filterList: [] }

        case MAIN_FILTER_FROM_LIST:
            const cloneMainList = {...state}['list'];
            const ListFiltered = cloneMainList[action.data-1];
            return { ...state, cloneMainList, showUIList: [ListFiltered] }

        case RESET_MAIN_FILTER_FROM_LIST:
            return { ...state, showUIList: [...state.list] }

        case RECEIVE_SUCCESS_API_RESPONSE: 
            return { ...state, showUIList: [...action.data], list: [...action.data], isLoading: false }
        
        case RECEIVE_FAILURE_API_RESPONSE:
            return { ...state, showUIList: [], list: [], getUserListError: action.data.message, isLoading: false }

        case UPDATE_UI_LIST:
            const listData = {...state}['list'].filter(data => data.title.toLocaleLowerCase().includes(action.data.data.toLocaleLowerCase()));
            return { ...state, filterList: [], showUIList: listData }

        case IS_LOADING:
            return { ...state, isLoading: action.data }

        default:
            return state;
    }
}

export const getSelectedIndexData = (state) => state.commonReducer.editUserInfo;
export const getUsersList = (state) => state.commonReducer.list;
export const getFilterList = (state) => state.commonReducer.filterList;
export const getUIList = (state) => state.commonReducer.showUIList;
export const getUserError = state => state.commonReducer.getUserListError;
export const getLoaderStatus = state => state.commonReducer.isLoading;


export default commonReducer;