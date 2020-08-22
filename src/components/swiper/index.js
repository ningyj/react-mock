import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import "./style.css"

class Banner extends Component {
  render() {
      let {data} =this.props;
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {data.length!==0&&data.map(item => (
            <a
              key={item._id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%' }}
            >
              <img
                src={item.banner}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
export default Banner