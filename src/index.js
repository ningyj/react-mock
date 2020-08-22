import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Default from './layouts/default'

import store from './plugins/redux';
import { Provider } from 'react-redux';

import './assets/js/font'
import './assets/css/base.css'
import 'swiper/dist/css/swiper.css';
import './assets/font/iconfont.css'

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={Default} />
    </BrowserRouter>
  </Provider>

  ,
  document.getElementById('root')
);
