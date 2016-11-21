import App from './src/components/App';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

const store = createStore(combineReducers ({
    dummy: (state = {}, action) => state
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

const Connected = connect(state => state)(App);

ReactDOM.render((
    <Provider store={store}>
        <Connected />
    </Provider>
    ), document.getElementById('app'));

ReactDOM.render((
        <Footer />
), document.getElementById('footer'));

ReactDOM.render((
    <Header />
), document.getElementById('header'));