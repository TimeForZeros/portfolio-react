import React from 'react';
import './App.css';

let title = 'Time For Zeros';
function zeroChange(){
  let arr = title.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let zeros='';
    for (let j = 0; j < arr[i].length; j++) {
      zeros += '0';
    }
    arr[i] = zeros;
  }
 return this.setState = {title: arr.join('_')};
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <h3> Nothing Matters</h3>
      </header>
      <body>
        <button onClick={zeroChange}>Click Me</button>
      </body>
    </div>
  );
}

export default App;
