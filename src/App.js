import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function ZeroChange(){
  let arr = this.state.title.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let zeros='';
    for (let j = 0; j < arr[i].length; j++) {
      zeros += '0';
    }
    arr[i] = zeros;
  }
 this.setState = {title: arr.join('_')};
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: 'Time For Zeros'
    }
  }
  handleZero = () => {
    let arr = this.state.title.split(' ');
    for (let i = 0; i < arr.length; i++) {
      let zeros='';
      for (let j = 0; j < arr[i].length; j++) {
        zeros += '0';
      }
      arr[i] = zeros;
    }
    let zeroed = arr.join('_');
   return this.setState = {title: zeroed};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
          <h3> Nothing Matters</h3>
        </header>
        <body>
          <button onClick={this.handleZero}>Click Me</button>
        </body>
      </div>
    );
  }
}

export default App;
