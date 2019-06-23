import React from 'react'

// 计数器 + -
class Counter extends React.Component {
  render () {
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <div>
        {value}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;