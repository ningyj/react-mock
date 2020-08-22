import React, { Component } from 'react';


import { SearchBar } from 'antd-mobile';

class Search extends Component {

  onChange= (ev) => {
  };

  render() {
    return (<div>
      <SearchBar placeholder="点击搜索" maxLength={8} onChange={this.onChange}/>
    </div>);
  }
}

export default Search;
