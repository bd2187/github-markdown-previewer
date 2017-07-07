import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { changeInput } from './actions/actions';
import rootReducer from './reducers/reducers';
import App from './components/App';
import './styles/css/main.css';

const defaultInput = `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

const defaultState = {
  input: defaultInput
}

let store = createStore(rootReducer, defaultState);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
