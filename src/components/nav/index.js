import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
class Nav extends Component {


    render() {
        let {history}  = this.props
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{color:'#ff3d5c'}}/>}
                    onLeftClick={()=>history.go(-1)}
                ></NavBar>

            </div>
        );
    }
}


export default withRouter(Nav);
