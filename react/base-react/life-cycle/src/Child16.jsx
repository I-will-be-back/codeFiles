import React from 'react'

class Child16 extends React.Component {
  state = {
    a: 1
  }
  // 16版本之后的生命周期
  // 根据返回值{} 更新 state,不更新 返回 null 
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', props)
    // return null
    return {
      count: props.count
    }
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate')
    return 666
  }
  //  a 在16版本之后才有的
  //  16之前 a === undefined
  //  16之后 a === getSnapshotBeforeUpdate()
  componentDidUpdate (preProps, preState, a) {
    console.log('componentDidUpdate', a)
  }
  handleStateChange = () => {
    this.setState({
      a: 10
    })
  }
  render () {
    console.log('渲染时候 state', this.state)
    return (
      <div>
        <button onClick={this.handleStateChange}>change state</button>
        Child16 Component
      </div>
    )
  }
}

export default Child16