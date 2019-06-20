import React from 'react'

class Child extends React.Component {
  state = {
    childCount: 0
  }
  handleChildCountChange = () => {
    let {childCount} = this.state
    childCount++
    this.setState({
      childCount
    })
  }
  // 16版本之前的生命周期
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      console.log('child setInterval')
    }, 1000)
  }
  // props 更新的
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }
  // 组件 性能优化需要的 控制组件不必要的更新
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    if (nextProps.count !== this.props.count) {
      return true
    }
    return true
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  componentWillUnmount () {
    clearInterval(this.interval)
    console.log('componentWillUnmount')
  }
  render () {
    console.log('render funciton')
    const {count} = this.props
    const {childCount} = this.state
    return (
      <div>
        <button onClick={this.handleChildCountChange}>child state change</button>
        child Component <br />
        count: {count} <br />
        childCount: {childCount}
      </div>
    )
  }
}

export default Child