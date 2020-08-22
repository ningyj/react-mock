import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import axios from 'axios';

export default class Auth extends React.Component{

  state={
    hasSendAuth:false,//是否发送过授权请求
    err:2,//授权结果
    data:{}//预载数据
  };


  async componentDidMount(){
    let res = await axios({url:'/mock/user'});
    this.setState({
      err:res.data.err,
      hasSendAuth:true,
      data:res.data.data
    })
  }

  render(){
    if (!this.state.hasSendAuth) return null;

    let {component:Component} = this.props;//目标组件

    return <Route render={props=>(//...props 目标组件需要用到的路由信息
      this.state.err === 0 ?
        <Component {...props} data={this.state.data} /> :// 数据预载
        <Redirect to="/login" />

    )}/>


  }
}