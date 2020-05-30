import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ValuesProvider from './context/Values';



ReactDOM.render(
  <React.StrictMode>
     <ValuesProvider>
       <App />
       </ValuesProvider>
           
  </React.StrictMode>,
  document.getElementById('root')
);

