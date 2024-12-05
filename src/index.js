import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Your main app component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Only here, wrap with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
