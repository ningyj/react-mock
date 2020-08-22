import React, { Component } from 'react';
import styles from './style.module.css'
import Input from '../../components/input'
import Button from '../../components/button'
import {queryReg} from "../../services/user";

class Reg extends Component {

    state = {
        username: '',
        password: '',
        errorMess: ''//失败信息
    };

    changeIpt = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    };

    reg = async()=>{
        let {username,password} = this.state;
        let res = await queryReg({username,password,icon:this.icon});
        if (res.data.err === 0 ){
            this.props.history.push('/login')
          } else {
            this.setState({errorMess:res.data.msg})
          }
    }
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
                    placeholder='请输入账号'
                    model={{ name: 'username', value: this.state.username, onChange: this.changeIpt }}
                ></Input>
                <Input
                    type='password'
                    placeholder='请输入密码'
                    model={{ name: 'password', value: this.state.password, onChange: this.changeIpt }}
                ></Input>
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
                    onClick={()=>this.reg()}
                >
                    注册
                </Button>
                {this.state.errorMess}
            </div>
        );
    }
}

export default Reg;
