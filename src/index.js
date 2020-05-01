import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
