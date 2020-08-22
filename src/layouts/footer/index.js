import React, { Component } from 'react';
import styles from './style.module.css'
import {  NavLink } from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <div className={styles.tab}>
                        <NavLink to='/home/being' activeClassName={styles.active} className={styles.link}>
                            <span className={styles.re} ></span>
                            <span className={styles.name}>热映</span>
                        </NavLink>
                        <NavLink to='/cinema' activeClassName={styles.active} className={styles.link}>
                            <span className={styles.ying}></span>
                            <span className={styles.name}>影院</span>
                        </NavLink>
                        <NavLink to='/user' activeClassName={styles.active} className={styles.link}>
                            <span className={styles.my} ></span>
                            <span className={styles.name}>我的</span>
                        </NavLink>
                </div>
            </div>
        );
    }
}

export default Footer;