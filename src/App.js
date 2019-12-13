import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function ZeroChange() {
  let arr = this.state.title.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let zeros = "";
    for (let j = 0; j < arr[i].length; j++) {
      zeros += "0";
    }
    arr[i] = zeros;
  }
  this.setState = { title: arr.join("_") };
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Time For Zeros"
    };
  }
  handleZero = () => {
    let arr = this.state.title.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let zeros = "";
      for (let j = 0; j < arr[i].length; j++) {
        zeros += "0";
      }
      arr[i] = zeros;
    }
    let zeroed = arr.join("_");
    return this.setState({ title: zeroed });
  };

  render() {
    return (
      <Route path="/">
        <div className="App">
          <header className="App-header">
            <NavBar title={this.state.title} />
          </header>
          <Body title={this.state.title} />
          <Footer />
        </div>
      </Route>
    );
  }
}

export default App;
