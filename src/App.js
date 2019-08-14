import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = () => {
    this.props.store.addItem(this.state.newItem)
    // this.props.store.editItem('Potatoes')
  }



  render() {
    // console.log(this.props.store.list)
    return (
      <div className="App" >
        < DevTools />
        <input onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        {this.props.store.list.map((i, ind) => <Item store={this.props.store} item={i}
          key={ind}
          />
        )}
      </div >
    );
  }
}
export default App;
