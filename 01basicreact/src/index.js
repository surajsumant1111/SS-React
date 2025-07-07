import React from 'react';
import ReactDOM from 'react-dom/client';
import Chai from './Chai';
import App from './App';
import Aero from './custom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        <Chai />
        <App />
        <Aero/>
    </div>
    
  </React.StrictMode>
);


