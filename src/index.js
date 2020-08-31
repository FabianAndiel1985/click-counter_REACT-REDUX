import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import increaseReducer from './reducers/incrementReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';


let store = createStore(increaseReducer);


ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);




