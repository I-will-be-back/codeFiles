import React, { Component } from 'react';
import { decDebounce, decArrowDebounce, decDisplayName } from './util';

// 加了一个静态属性 displayName
@decDisplayName('CustomExampleDeBounce')
class ExampleDeBounce extends Component {
  state = {}
  // 防抖
  @decDebounce(1000)
  handleSubmit() {
    console.log('submit request');
  }
  // 防抖
  @decArrowDebounce(1000)
  handleBuy = () => {
    console.log('buy now');
  }
  // handleSubmit = debounce(function () {
  //   console.log('submit request');
  // }, 1000);
  render() {
    // console.log(this.handleSubmit);
    // console.log(this.handleBuy);
    return (
      <div>
        <button onClick={this.handleSubmit}>提交订单</button>
        <button onClick={this.handleBuy}>立即购买</button>
      </div>
    );
  }
}
 
export default ExampleDeBounce;