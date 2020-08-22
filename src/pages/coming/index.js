import React, { Component } from 'react';
import Cell from '../../components/cell'
import {connect} from 'react-redux'
import {actionHome} from '../../store/creators/list'
class Coming extends Component {



    async componentDidMount() {    
        this.props.dispatch(actionHome())
    }

    render() {
        let { home } = this.props;
        return (
            <div className='Coming'>
                {
                    home.map((item, index) => (
                        <Cell
                            coming={true}
                            key={item._id}
                            icon={item.icon}
                            title={item.title}
                            director={item.director}
                            star={item.star}
                        ></Cell>
                    ))
                }
            </div>
        );
    }
}

export default connect(state=>({home:state.home}))(Coming);