import React from "react";
import ReactDOM from "react-dom";
import "./Style";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Setup redux
import { applyMiddleware, createStore, compose } from "redux";

import {Provider} from 'react-redux';


import rootReducer from './redux/reducers/rootReducer'
// setup redux thunk - thu vien middleware cua redux
import thunk from 'redux-thunk'
const middleware = applyMiddleware(thunk);

// gop middleware va redux devtool lai thanh 1 
const enhancer = compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer,enhancer)
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
