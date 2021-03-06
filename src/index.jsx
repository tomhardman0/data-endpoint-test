import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import { initStore } from './store';
const store = initStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
