import React, {Component} from 'react'
import "./App.css"
export default class App extends Component{
  Arrow = (x, y) =>{
    return(x + y)
  }
  render(){
    return(
      <h1 className="one">Meu gato mais velho tem {this.Arrow(10,6)} anos</h1>
    )
  } 
} 