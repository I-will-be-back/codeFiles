import React from 'react';
import {Input, Button, Divider} from 'antd'

function Filed (props) {
  // console.log(props)
  const {value, index} = props;
  return(
    <div>
      <Divider />
      <div>
        姓名: <Input value={value.name} placeholder="name" onChange={e => {props.onChange(e.target.value, 'name', index)}} />
      </div>
      <div>
        地址: <Input value={value.address} placeholder="address" onChange={e => {props.onChange(e.target.value, 'address', index)}} />
      </div>
      <Button type="primary" onClick={() => {
        props.onDelete(index)
      }}>删除</Button>
    </div>
  );
}

class DynamicField extends React.Component {
  state = {
    lists: [
      {
        name: '',
        address: '',
      }
    ],
  }
  handleChange = (value, key, index) => {
    let lists = this.state.lists.slice(0);
    const obj =  lists[index];
    const newObj = {
      ...obj,
      [key]: value
    }
    lists[index] = newObj
    this.setState({
      lists
    })
  }
  handleDelete = (index) => {
    const lists = this.state.lists.slice(0);
    lists.splice(index, 1);
    this.setState({
      lists
    })
  }
  handleAddFiled = () => {
    let lists = this.state.lists.slice(0);
    lists.push({
      name: '',
      address: ''
    });
    this.setState({
      lists
    })
  }
  render () {
    const {lists} = this.state;
    return (
      <div>
        {
          lists.map((list, i) => {
            return (
              <Filed key={i} 
              value={list} 
              onChange={this.handleChange} 
              onDelete={this.handleDelete}
              index={i} />
            );
          })
        }
        <Button type="primary" onClick={this.handleAddFiled}>添加</Button>
      </div>
    );
  }
}

export default DynamicField;