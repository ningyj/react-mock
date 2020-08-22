import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom'
import qs from 'qs'
import store from '../plugins/redux'
import {actionLoading} from "../store/creators/global";

// 添加一个请求的拦截
axios.interceptors.request.use((config) => {

  //1抓取本地token，携带在请求头里   user = {token:'....',username,password}
  let user = window.localStorage.getItem('user');
  user = user ? qs.parse(user) : '';
  config.headers={'token': user.token};

  store.dispatch(actionLoading(true))
  return config;//2返回请求

}, function(error) {
  // 请求错误时做点事
  return Promise.reject(error);
});

//添加一个响应拦截
axios.interceptors.response.use(function(response) {
  // console.log('响应拦截',response);

  let router=new Router();
  //token过期: 返回值2,当前路由不是login时跳转
  if (response.data.err === 2 && !router.history.location.pathname.includes('/login')) {
    console.log('token 失败 跳转到login',router);
    window.location.href=require('../config/base').baseUrl+'/login?path='+router.history.location.pathname

    /*router.history.push({  //hash 模式可以，history模式有问题
      pathname: '/login',
      search: "path="+router.history.location.pathname
    })*/

  }

  store.dispatch(actionLoading(false))

  return response;

}, function(error) {

  return Promise.reject(error);
});

React.axios = axios;//axios绑到对象包上
React.Component.prototype.axios = axios; // axios绑定到Component类的原型   组件|this.axios
window.axios = axios;  //×   希望全局使用axios , 使用webpack 来配置
export default axios;