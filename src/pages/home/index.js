import React, { Component } from 'react';
import Banner from '../../components/swiper';
import Cell from '../../components/cell'
import BScroll from 'better-scroll'
import styles from './style.module.css'
import {actionHome} from '../../store/creators/list'
import {connect} from 'react-redux'
class Home extends Component {
    async componentDidMount() {

        new BScroll(`.${styles.wrapper}`, {
            scrollY: true,
            click: true,
            mouseWheel: true
        })

        this.props.dispatch(actionHome())
    }


    render() {
        let { home, banner } = this.props;
        return (
            <div className='home'>
                <div className={styles.wrapper}  >
                    <div className='content'>
                        <Banner data={banner}></Banner>
                        {
                            home.map((item, index) => (
                                <Cell
                                    key={item._id}
                                    icon={item.icon}
                                    title={item.title}
                                    director={item.director}
                                    star={item.star}
                                    to={{ pathname: '/detail', search: { collectionName: 'home', _id: item._id } }}>
                                </Cell>
                            ))
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(state=>({banner:state.banner,home:state.home}))(Home);
