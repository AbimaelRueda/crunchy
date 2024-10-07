import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header  from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
