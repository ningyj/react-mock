import React, { Component } from 'react';
import styles from './style.module.css'
class CinemaCell extends Component {
    render() {
        let { title, sub_title, num } = this.props
        return (
            <div className={styles.CinemaCell}>
                <div className={styles.item}>
                    <div className={styles['item-container']}>
                        <a className={styles['item-in']} href='/#'>
                            <h3>
                                <div className={styles['title-left']}>
                                    <span className={styles.title}>{title}</span>
                                </div>
                                <span className={styles.price}>￥{num}元</span>
                            </h3>
                            <div className={styles['item-addres']}>
                                <span className={styles.distance}>           --km         </span>
                                <div className={styles.location}>
                                    {sub_title}
                                </div>
                            </div>
                            <div className={styles.support}>
                                <div className={styles.tags}>
                                    <p>特惠票</p>
                                    <p>可退票</p>
                                    <p>可改签</p>
                                    <p>激光厅</p>
                                    <p>可停车</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CinemaCell;
