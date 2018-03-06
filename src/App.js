import React, { Component } from 'react';
import './App.css';
import Items from './components/items';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      Items: [  {text: "",
                key: Date.now(),
                isFinished: false,
                isRemoved: true,
                isEditing: false}
              ],
    }
  }
  
  render() {
    
    return (
      <div className="App">
        <Items {...this.state}/>
      </div>
    );
  }
}

export default App;

