import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas';
import App from './App';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


describe('<App />', () => {

    it('Renders successfully without error', () => {
        const listItemComponent = render(<Provider store={store}><App /></Provider>);
        expect(listItemComponent.container).toBeTruthy();
    });

})