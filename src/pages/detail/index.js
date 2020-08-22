import React, { Component, Fragment } from 'react';
import styles from './style.module.css'
import Button from '../../components/button'
import Nav from '../../components/nav'
import BScroll from 'better-scroll'
import { queryDetail } from "../../services/api";

class Detail extends Component {
    state = {
        data: {},
    }

    constructor(props) {
        super(props)
        let { match: { params: { _id } }, location: { search } } = props;
        queryDetail({ _id, search }).then(
            res => this.setState({ data: res.data.data[0] })
        )

    }

    componentDidMount() {
    }

    componentDidUpdate() {
        if (this.state.data.detail) {
            new BScroll(`.${styles.wrapper}`, {
                scrollY: true,
                click: true,
                mouseWheel: true
            })
        };
    }

    click = () => {
        let { history } = this.props;
        history.push('/cinema/nav')
    }
    render() {
        let { data } = this.state
        return (
            <Fragment>
                <Nav></Nav>
                {
                    data.detail !== undefined && (

                        <div className={styles.wrapper}  >
                            <div className='content'>
                                <div className={styles['fn-lazyload']} style={{ backgroundImage: `url(${data.detail.bgimg})` }}>
                                    <div className={styles['back-gradient']}></div>
                                </div>
                                <div className={styles['show-info']}>
                                    <div className={styles['poster-wrap']}>
                                        <div className={styles.poster} style={{ backgroundImage: `url(${data.icon})` }}></div>
                                    </div>
                                    <div className={styles['info-container']}>
                                        <div className={styles['movie-name']}>{data.title}</div>
                                    </div>
                                </div>
                                <div className={styles['movie-title']}>
                                    <span>简介 &gt;</span>
                                </div>
                                <div className={styles['movie-content']}>
                                    {data.detail.content}
                                </div>
                            </div>
                        </div>
                    )
                }

                <Button
                    text="选座购票"
                    style={{
                        width: "100%",
                        height: '55px',
                        fontSize: '17px',
                        lineHeight: '55px',
                        backgroundColor: '#ff5456',
                        color: '#fff',
                        position: 'fixed',
                        bottom: '0'
                    }}
                    onClick={this.click}
                ></Button>
            </Fragment>
        );
    }
}

export default Detail;
