import { combineReducers } from 'redux';
import commonReducer from './commonReducer';

const appReducer = combineReducers({
    commonReducer
});

export default appReducer;