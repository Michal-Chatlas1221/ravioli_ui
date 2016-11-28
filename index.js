import App from './src/components/App';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import './src/styles/style.scss';
import auth from './src/reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

const reducer = combineReducers ({
  auth,
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger()),
);

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
