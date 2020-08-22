import React, { Component } from 'react';
import styles from './style.module.css'
import {queryCinema} from '../../services/api'
import BScroll from 'better-scroll'
import CinemaCell from '../../components/cinemaCell'
import Search from '../../components/search'
import Nav from '../../components/nav'

class Cinema extends Component {
    state={
        cinema:[],
    }


    async componentDidMount(){
        new BScroll(`.${styles.wrapper}`, {
            scrollY: true,
            click: true,
            mouseWheel: true
        })
        let res = await queryCinema()
        this.setState({cinema:res.data.data})
    }
    render() {
        let {cinema} = this.state
        let path = this.props.location.pathname
        let styels = {
            top: path.includes('nav')? '88px' : '44px'
        }
        return (
            <div className='Cinema'>
                {path.includes('nav')&&<Nav></Nav>}
                <Search></Search>
                <div className={styles.wrapper} style={styels} >
                    <div className='content'>
                {
                    cinema.map((item,index)=>(
                         <CinemaCell 
                            key={item._id}
                            title={item.title}
                            sub_title={item.sub_title}
                            num={item.num}
                         />
                    ))
                }
                     </div>
                </div>
               
            </div>
        );
    }
}

export default Cinema;
