import React, { Component } from 'react';
import propTypes from 'prop-types'
import styles from './style.module.css'
import { withRouter } from 'react-router-dom'
import Button from '../../components/button'
class Cell extends Component {
    static defaultProps = {
        title: '',
        director: '',
        star: '',
        to: null
    }
    static propTypes = {
        title: propTypes.string.isRequired,
        director: propTypes.string,
        star: propTypes.string,
        to: propTypes.shape({
            pathname: propTypes.string.isRequired,
            search: propTypes.shape({
                collectionName: propTypes.string.isRequired,
            })
        })
    }
    go = () => {
        let { to, history } = this.props;
        history.push({ pathname: to.pathname+'/'+to.search._id, search: `collectionName=${to.search.collectionName}` })
    }
    click = (ev) => {
        let { history } = this.props;
        ev.stopPropagation()
        history.push('/cinema')
    }

    render() {
        let { icon, title, director, star, coming } = this.props;
        return (
            <div className={styles.lists}
                onClick={this.go}
            >
                <div className={styles['lists-left']}>
                    <img src={icon} alt=''></img>
                </div>
                <div className={styles['lists-center']}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.director}>导演：{director}</div>
                    <div className={styles.star}>主演：{star}</div>
                </div>
                <div className={styles['lists-right']}>
                    {
                        !coming ? <Button
                            text="购票"
                            style={{
                                backgroundImage: 'linear-gradient(45deg,#ff5456,#ff3d5c)',
                                boxSizing: 'border-box',
                                height: '28px',
                                lineHeight: ' 28px',
                                padding: ' 0 13px',
                                fontSize: '12px',
                                borderRadius: '120px',
                                color: ' #fff',
                                backgroundColor: 'transparent',
                            }}
                            onClick={this.click}
                        ></Button> : <Button
                            text="预售"
                            style={{
                                backgroundImage: 'linear-gradient(45deg,#33bfff,#00afff)',
                                boxSizing: 'border-box',
                                height: '28px',
                                lineHeight: ' 28px',
                                padding: ' 0 13px',
                                fontSize: '12px',
                                borderRadius: '120px',
                                color: ' #fff',
                                backgroundColor: 'transparent',
                            }}
                        ></Button>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Cell);
