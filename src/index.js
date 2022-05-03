import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
// import './custom.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

