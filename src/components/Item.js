import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = () => {
    //your code here
  }
  checkItem = (e) => {
    let value = e.target.value
    console.log(value)
    this.props.store.checkItem(value)
  }
  editItem = () => {

    let name = this.props.item.name
    const value = prompt(`chose your new locution for ${name}`)
    console.log(value)
    this.props.store.editItem(name, value)
  }



  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }

  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox"
          value={item.name} onClick={this.checkItem} />
        {item.name} {item.location}
        <button className="editButton" onClick={this.editItem} >edit   </button>
        <button className="deleteButton" onClick={this.deleteItem} >delete </button> </div>)
  }
}

export default Item