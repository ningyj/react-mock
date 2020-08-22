import React, { Component } from 'react';
import styles from './style.module.css'
class User extends Component {
    render() {
        let {nikename,icon} = this.props.data.data;
        return (
            <div className={styles.user}>
                <div className={styles.profile}>
                    <a className={styles.pushwindow} href="/#">
                        <div className={styles['header-wrap']}>
                            <div className={styles['header-userinfo']}> 
                                <div className={styles['header-avatar-warper']}>
                                    <div className={styles['header-avatar']} style={{backgroundImage:`url(${icon})`}}></div>
                                </div>
                                <p className={styles.nickname}>{nikename}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles['menu-wrapper']}>
                    <div className={styles['menu-grid-wrapper']}>
                        <div className={styles['group-wrapper']}>
                            <a className={styles['group-item']} href="/#">
                                <i className='iconfont icon-dianyingpiao' style={{color:'#FF5269',fontSize:'25px'}}></i>
                                <span>电影票</span>
                            </a>
                            <a className={styles['group-item']} href="/#">
                                <i className='iconfont icon-youhuiquan' style={{color:'#FEA54C',fontSize:'25px'}}></i>
                                <span>优惠券</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles['menu-grid-wrapper']}>
                        <div className={styles['item-wrapper']}>
                            <a className={styles.tappable} href="/#">
                                <span className={styles.username}>淘票票乐影卡</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles['menu-grid-wrapper']}>
                    <div className={styles['item-wrapper']}>
                            <a className={styles.tappable} href="/#">
                                <span className={styles.username}>帮助与反馈</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;