import { put, takeLatest } from 'redux-saga/effects'
import { UPDATE_UI_LIST, REQUEST_UPDATE_UI_LIST } from '../actions/usersearch';

function* updateUiListReducer(data) {
    yield put({ type: UPDATE_UI_LIST, data })
}

export function* commonSaga(){
    yield takeLatest(REQUEST_UPDATE_UI_LIST, updateUiListReducer)
}