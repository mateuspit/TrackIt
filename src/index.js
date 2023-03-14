import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Reset from "./Reset"
import SizingBox from "./SizingBox"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SizingBox />
    <Reset />
    <App />
  </React.StrictMode>
);


