import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
      monsters : [
        {
          id : "1",
          name : "ghost"
        },
        {
          id : "2",
          name : "vampire"
        },
        {
          id : "3",
          name : "zombie"
        },
        {
          id : "4",
          name : "dracula"
        }

      ]
    }
  }
  
 
  render() {
    return (
      <div className = 'App'>
        {this.state.monsters.map(monster => <h1 key = {monster.id}>{monster.name}</h1>)}
      </div>
    )
  }
}
