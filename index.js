import App from './src/components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import colors from './src/reducers/colors';
import charts from './src/reducers/charts';
import { connect, Provider } from 'react-redux';

const store = createStore(combineReducers ({
    colors,
    charts
}));

const addLogging = store => {

    const rawDispatch = store.dispatch;

    return action => {
        console.log(store.getState());
        console.log(action);
        rawDispatch(action);
        console.log(store.getState());

    };
};

store.dispatch = addLogging(store);

const Connected = connect(state => state, dispatch => (
    { colorChanged: (color, value) => dispatch({
    type: 'CHANGE_VALUE',
    color: color,
    value: value
}) }))(App);

ReactDOM.render((
    <Provider store={store}>
        <Connected />
    </Provider>
    ), document.getElementById('app'));
