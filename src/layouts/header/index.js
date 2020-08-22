import React, { Component } from 'react';
import styles from './style.module.css';
import {  NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.city}>
                    <div className={styles['city-logo']}>
                        <div className={styles['city-name']}>上海</div>
                        <div className={styles.down}></div>
                    </div>
                </div>
                <div className={styles.tab}>
                    <ul>
                            <li><NavLink to='/home/being' activeClassName={styles.active}>正在热映</NavLink></li>
                            <li><NavLink to='/home/coming' activeClassName={styles.active}>即将上映</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
