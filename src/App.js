import React, { Component } from 'react'

export default class App extends Component { 
  constructor(){
    super();
    this.state={
      counterval: 0,
      greet :'hi i am chunmun'
    }
  }
  addcounterFunc =()=>{
    this.setState({counterval : this.state.counterval +1})
  }

  subcounterFunc =()=>{
    this.setState({counterval : this.state.counterval - 1})
  }
  render() {
    return (
      <div>
        <button onClick={this.subcounterFunc}>-</button>
        {this.state.counterval}
        <button onClick={this.addcounterFunc}>+</button>
        
      </div>
    )
  }
}
