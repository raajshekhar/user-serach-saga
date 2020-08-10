import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
        const SearchInputComponent = render(<Provider store={store}><SearchInput /></Provider>);
        expect(SearchInputComponent.container).toBeTruthy();
    });

    it('Renders successfully without error', () => {
        const { getByText } = render(<Provider store={store}><SearchInput /></Provider>);
        const childElementString = getByText(/Search/i);
        expect(childElementString.textContent).toMatch('Search');
    });

})
