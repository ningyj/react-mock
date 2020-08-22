import React, { Component } from 'react';
import styles from './style.module.css'
import Input from '../../components/input'
import Button from '../../components/button'

import qs from 'qs';
import {queryLogin} from "../../services/user";

class Login extends Component {

    state = {
        username: '',
        password: '',
        errorMess: ''//失败信息
    };

    changeIpt = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    };

    
    login = async () => {
        let {username,password} = this.state;
        let res = await queryLogin({username,password});
        if (res.data.err === 0 ){
          //同步local qs库 加密
          window.localStorage.setItem('user',qs.stringify(res.data));
    
          //跳转路径
          let path = qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path;
    
          if (path && !path.includes('/login')){
            //跳转之前
            this.props.history.push(path)
          } else {
            //跳转user
            this.props.history.push('/user')
          }
    
        } else {
          this.setState({errorMess:res.data.msg})
        }
      };





    render() {
        return (
            <div className={styles.login}>
                <div className={styles['login-label-text']}>
                    <div className={styles.content}>
                        <div className={styles['login-blocks']}>
                            <div className={styles.logo}>
                                <div className={styles['tb-logo']}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <Input
                    placeholder='手机号/邮箱/会员名'
                    model={{ name: 'username', value: this.state.username, onChange: this.changeIpt }}
                ></Input>
                <Input
                    type='password'
                    placeholder='请输入登录密码'
                    model={{ name: 'password', value: this.state.password, onChange: this.changeIpt }}
                ></Input>

                <div className={styles['login-links']}>
                    {/* <a className={styles.left} href='/#'></a> */}
                    <a className={styles.right}  href='../reg'>免费注册</a>
                </div>
                <Button
                    style={{
                        background: '-webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat',
                        color: '#fff',
                        boxShadow: '0 2px 4px #f7c7b1',
                        height: ' 45px',
                        borderRadius: '35px',
                        marginTop: '15px',
                        fontSize: ' 16px',
                        border: '1px solid #ff9000',
                        lineHeight: '42px',
                        width:'100%',
                    }}
                    onClick={()=>this.login()}
                >
                    登录
                </Button>
            </div>
        );
    }
}

export default Login;
