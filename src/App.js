import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.intervalFlag= null
    this.state = {
      title: "Текущее время",
      date: new Date(),
      counter: 0,
    };
  }
    
componentDidMount() {

  this.intervalFlag=setInterval(() => {
    this.setState((state, props) => ({
      date: new Date(),
      counter: state.counter + 1,
    }));
  }, 1000);
}


componentDidUpdate() {
  console.log( 'CLASS component Did update - выводится при каждом обновлении, можно выполнить действия после обновления');
  //console.log( this.state);

}

componentWillUnmount() {
  clearInterval(this.intervalFlag);
}
  render() {
    return (
      <div className="App">
        <p>{this.state.title}</p>
        <p>{this.state.counter}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default App;
