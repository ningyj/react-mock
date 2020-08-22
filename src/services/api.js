import axios from '../plugins/axios';
import qs from 'qs';

//服务： 就是一个异步函数 ，返回promise
export const queryHome = async (params) => {
  return axios({
    url:'/mock/home',
    params: params || {_page:1, _limit:30}
  })
};



export const queryBanner = async (params) => {
  return axios({
    url:'/mock/banner',
    params: params || {_page:1, _limit:5}
  })
};

export const queryCinema = async (params) => {
  return axios({
    url:'/mock/cinema',
    params: params || {_page:1, _limit:30}
  })
};


export const queryDetail = async ({_id,search}) => {
  let collectionName=qs.parse(search,{ignoreQueryPrefix:true}).collectionName;
  return axios({
    url:`/mock/${collectionName}?_id=${_id}`
  })
};


export const queryAll = async (arr) => {
  return axios.all(arr).then(axios.spread((banner,home)=>({banner,home})))
};

