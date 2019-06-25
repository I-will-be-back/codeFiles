import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    console.log('mount')
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <div>Header</div>
        <hr />
        <hr />
        {children}
        <div>Footer</div>
      </div>
    )
  }
}
