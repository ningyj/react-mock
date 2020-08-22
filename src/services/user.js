import axios from '../plugins/axios';

//服务： 就是一个异步函数 ，返回promise

//校验输入是否合法
export const checkUserInput = async (...arg) => {
  //业务
  return true;
};

//登录接口
export const queryLogin = async ({username,password}) => {
  if (checkUserInput(username) && checkUserInput(password)){
    // console.log('1')
    return axios({url:'/mock/login',method:'post',data:{username, password}})
  } else {
    // console.log('2')
    return new Promise((resolve,reject)=>reject('校验失败'))
  }
};

//注册接口
export const queryReg = async ({username,password,icon}) => {

  if (checkUserInput(username) && checkUserInput(password)){

    // let params = new FormData();
    // let params = new URLSearchParams();
    // params.append('username',username);
    // params.append('password',password);

    // if (icon.files.length>0){
    //   params.append('icon',icon.files[0]);
    // }

    return axios({url:'/mock/reg',method:'post',data:{username, password}})
  } else {
    return new Promise((resolve,reject)=>reject('校验失败'))
  }
};

//注销
export const queryLogout = async () => {
  return axios({url:'/mock/logout',method:'delete'})
};