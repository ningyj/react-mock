import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './style.module.css'
class Button extends Component {

    static defaultProps={
        onClick:()=>undefined,
        style:{},
        disabled:false,
        text:'按 牛'
    }
    static propTypes={
        type: propTypes.string,
        onClick: propTypes.func,
        style: propTypes.object,
        disabled: propTypes.bool,
        text:propTypes.string
    }
    render() {
        let { onClick, style, disabled, text, children} = this.props
        return (
            <div className='Button'>
                <button
                    className={styles.but}
                    style={style}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {children?children:text}
                </button>
            </div>
        );
    }
}

export default Button;