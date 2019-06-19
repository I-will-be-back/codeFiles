import React from 'react' 

class CommentInput extends React.Component {
  state = {
    userName: '',
    comment: ''
  }
  handleUsernameChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  handleSubmit = () => {
    const {userName, comment} = this.state
    const {onSubmit} = this.props
    console.log(userName, comment)
    onSubmit({
      userName,
      comment
    })
  }
  render () {
    const {userName, comment} = this.state
    return (
      <div>
        <div>
          用户名:
          <input value={userName} onChange={this.handleUsernameChange} type="text" placeholder="请输入用户名" />
        </div>
        <div>
          评论:
          <textarea value={comment} onChange={this.handleCommentChange} cols="30" rows="10"></textarea>
        </div>
        <div>
          <button onClick={this.handleSubmit}>评论</button>
        </div>
      </div>
    )
  }
}

export default CommentInput