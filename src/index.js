// Imports de React
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './components/App';


// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);