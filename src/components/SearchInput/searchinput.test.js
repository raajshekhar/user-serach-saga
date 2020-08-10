import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../../reducers'
import rootSaga from '../../sagas';
import SearchInput from './SearchInput';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

describe('<SearchInput />', () => {

    it('Renders successfully without error', () => {
        const SearchInputComponent = render(<Provider store={store}><SearchInput {...fieldData} /></Provider>);
        expect(SearchInputComponent.container).toBeTruthy();
    });

})

const fieldData = {
    "name": "title",
    "id": "title",
    "type": "search",
    "placeholder": "search here",
    "onChange": () => {},
    "maxLength": "150",
    "value": "Autocomplete",
    "readOnly": false,
    "colLength": "col-md-6 col-sm-12 col-xs-12",
    "labelName": "Title",
    "restrictions": ["numbers", "left-space", "special-characters"],
    "popOverPlacement": ["bottom", "bottom"],
    "autoComplete": "off",
    "labelImp": true,
    "autoFocus": true
}