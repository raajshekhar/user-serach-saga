import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { receiveFailuresResponse, receiveSuccessResponse, FETCH_USER_LIST, updateLoader } from '../actions/getuserlist';

const fetchApi = async () => {
    try {
        const { data } = await axios.get('http://localhost:5000');
        return data.userList;
    } catch (error) {
        const errorObject = typeof(error) === 'object' ? error : { message: 'Something went wrong' };
        return Promise.reject(errorObject)        
    }
}

export function* fetchUserList() {
    try {
        yield put(updateLoader(true));
        const data = yield call(fetchApi);
        yield put(receiveSuccessResponse(data));
        yield put(updateLoader(false));
    } catch (error) {
        yield put(updateLoader(false));
        yield put(receiveFailuresResponse({message: error.message}));
    }
}

export function* watchApiRequest(){
    yield takeLatest(FETCH_USER_LIST, fetchUserList);
}