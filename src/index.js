import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import '../node_modules/glightbox/dist/css/glightbox.min.css';
import "../node_modules/aos/dist/aos.css";
import '../node_modules/swiper/swiper-bundle.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'glightbox/dist/js/glightbox.min.js';
// import purecounter from '@srexi/purecounterjs';

// import '../node_modules/swiper/swiper-bundle.min.mjs';
import "../node_modules/aos/dist/aos.js";
import '../node_modules/isotope-layout/dist/isotope.pkgd.min.js';
import '../node_modules/swiper/swiper-bundle.js';


import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
