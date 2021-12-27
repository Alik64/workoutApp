import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import AppContextProvider from './Context/appContext';


ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>

      <App />
    </AppContextProvider>

  </BrowserRouter>,
  document.getElementById('root')
);


