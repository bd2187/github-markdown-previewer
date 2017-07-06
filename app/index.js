import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
//
// render(
//   <App/>,
//   document.getElementById('app')
// );



import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { changeInput } from './actions/actions';
import rootReducer from './reducers/reducers';

const defaultState = {
  input: 'hello world'
}

let store = createStore(rootReducer, defaultState);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
