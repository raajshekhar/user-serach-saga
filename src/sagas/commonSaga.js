import { put, takeLatest, call, takeEvery } from 'redux-saga/effects'
import { filterFromList, resetFilterList, setEditFormIndex, resetEditFormIndex, updateUserData, requestFilterListForMainList,
    resetFilterListForMainList } from '../actions'
 import { REQUEST_FILTER_FROM_LIST, REQUEST_RESET_FILTER_FROM_LIST,REQUEST_TO_UPDATE_USER_DATA, REQUEST_SET_EDIT_FORM_INDEX,
    REQUEST_RESET_EDIT_FORM_INDEX, REQUEST_MAIN_FILTER_FROM_LIST, REQUEST_RESET_MAIN_FILTER_FROM_LIST } from '../actions'

function* editSelectedUserInfo(action){
    yield put(setEditFormIndex(action))
}

function* resetSelectedUserInfo(){
    yield put(resetEditFormIndex())
}

function* updateUserDataInfo(data){
    yield put(updateUserData(data));
    yield call(resetSelectedUserInfo);
}

function* searchFromList(data){
    yield put(filterFromList(data));
}

function* resetSearchFromList(data){
    yield put(resetFilterList(data));
}

function* requestSearchForMainList(data){
    yield put(requestFilterListForMainList(data));
}

function* requestResetForMainList(data){
    yield put(resetFilterListForMainList(data));
}

export function* commonSaga(){
    yield takeLatest(REQUEST_SET_EDIT_FORM_INDEX, editSelectedUserInfo);
    yield takeLatest(REQUEST_RESET_EDIT_FORM_INDEX, resetSelectedUserInfo);
    yield takeEvery(REQUEST_TO_UPDATE_USER_DATA, updateUserDataInfo);
    yield takeLatest(REQUEST_FILTER_FROM_LIST, searchFromList);
    yield takeEvery(REQUEST_RESET_FILTER_FROM_LIST, resetSearchFromList);

    yield takeLatest(REQUEST_MAIN_FILTER_FROM_LIST, requestSearchForMainList);
    yield takeLatest(REQUEST_RESET_MAIN_FILTER_FROM_LIST, requestResetForMainList);
}