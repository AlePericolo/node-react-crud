import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import appReducers from "./store/reducers/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

import "./sass/main.scss";

import App from './App';

const reducers = combineReducers({
  form: reduxFormReducer,
  ...appReducers
})

const store = createStore(reducers, applyMiddleware(thunk, logger));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
