import React, { Component,Fragment } from 'react';

import Loadable from 'react-loadable';
import Header from '../header'
import Footer from '../footer'
import {Route, Redirect,Switch} from 'react-router-dom'
import Home from '../../pages/home'
import Cinema from '../../pages/cinema'
import Coming from '../../pages/coming'
import User from '../../pages/user'
import NoPage from '../../pages/no-page'
import Loading from '../../components/loading'
import Login from '../../pages/login'
import Reg from '../../pages/reg'
// import Detail from '../../pages/detail'

import Auth from '../../guard/Auth'

import {connect} from 'react-redux'
import {actionFoot, actionNav} from "../../store/creators/global";

import 'swiper/dist/css/swiper.css';
const Detail = Loadable({
  loader: () => import('../../pages/detail'),
  loading:()=>{return null}
})


class Default extends Component{


  state={
    ipt:'',
    ipt2:'',
    bannerData:[],
    home:[],
  };

  static getDerivedStateFromProps(nextProps,nextState){
    let path = nextProps.location.pathname;
    if (/home/.test(path)){
      nextProps.dispatch(actionNav(true));
      nextProps.dispatch(actionFoot(true));
    }
    if (/login|reg|detail/.test(path)){
      nextProps.dispatch(actionNav(false));
      nextProps.dispatch(actionFoot(false));
    }
    if (/user|cinema/.test(path)){
      nextProps.dispatch(actionNav(false));
      nextProps.dispatch(actionFoot(true));
    }

    return null;
  }
  render(){
    let {bNav,bFoot,bLoading} = this.props;
    return (
      <Fragment>
        {bLoading&&<Loading></Loading>}
        {bNav === true ? <Header/> : null}
        <Switch>
          <Route path='/home/being' component={Home}></Route>
          <Route path='/cinema' component={Cinema}></Route>
          <Route path='/home/coming' component={Coming}></Route>
          <Route path="/detail/:_id" component={Detail} />
          <Auth path='/user' component={User}></Auth>
          <Route path="/Login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Redirect from="/" to="/home/being" exact />
          <Route component={NoPage} />
        </Switch>
        {bFoot && <Footer/>}
      </Fragment>
    )
  }
}

export default connect(
  ({global:{bNav,bFoot,bLoading}}) => ({bNav,bFoot,bLoading})
)(Default)
