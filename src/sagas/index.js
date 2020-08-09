import { all } from 'redux-saga/effects';
import { commonSaga } from  './commonSaga';
import { watchApiRequest } from './getuserlistSaga';

export default function* rootSaga() {
    yield all([
        commonSaga(),
        watchApiRequest()
    ])
  }