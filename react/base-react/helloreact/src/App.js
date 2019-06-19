import React from 'react';
import Child from './Child'
import './App.css';
// PureComponent
// classComponent
class App extends React.Component {
  state = {
    msg: 'from state'
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        msg: 'change msg'
      })
    }, 3000)
  }
  renderFooter = () => {
    return (
      <footer>
        foot
      </footer>
    )
  }
  render () {
    const {msg} = this.state
    const isRed = true
    const red = 'red'
    const Main = (<p>main</p>)
    const lists = [1, 2, 3, 4, 5]
    const listsNode = lists.map((list, index) => <li key={index}>{list}</li>)
    return (
      <div className={isRed ? red : ''}>hello world
      <Child msg={msg} />
      {
        msg
      }
      <br />
      {
        isRed ? <span>red</span> : <span>nored</span>
      }
      {listsNode}
      <ul>
        {
          listsNode
        }
      </ul>
      {
        Main
      }
      {this.renderFooter()}
      </div>
    )
  }
}

export default App;
