import React from 'react'

// 16版本之后context
// 返回一个对象 两个组件
const ThemContext = React.createContext({
  // defaultValue
  theme: 'purple',
})
class MyButton extends React.Component {
  render () {
    return (
      <ThemContext.Consumer>
        {
          (value) => {
            return (
              <button 
              onClick={value.handleToggleBlue}
              style={{
                backgroundColor: value.theme
              }}>
              {this.props.children}
              </button>
            )
          }
        }
      </ThemContext.Consumer>
    )
  }
}
class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
        <MyButton>delete</MyButton>
      </div>
    )
  }
}

class Context16 extends React.Component {
  constructor () {
    super()
    this.handleToggleBlue = () => {
      this.setState(state => {
        return {
          theme: 'blue'
        }
      })
    }
    // state = {} static 属性
    this.state = {
      theme: 'purple',
      handleToggleBlue: this.handleToggleBlue
    }
  }
  handleToggleTheme = () => {
    this.setState({
      theme: 'red'
    })
  }
  render () {
    const msgs = ['msg1', 'msg2', 'msg3']
    return (
      <ThemContext.Provider value={this.state}>
        {this.props.children}
        <button onClick={this.handleToggleTheme}>toggle theme</button>
        {
          msgs.map((msg, i) => {
            return <Message key={i} text={msg} />
          })
        }
      </ThemContext.Provider>
    )
  }
}

export default Context16