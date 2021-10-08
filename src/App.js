import React, { Component } from 'react'
import './App.css'
import Reaction from './Reaction'
import { Route } from 'react-router-dom'
import Clicker from './Clicker'
import Nav from './nav'



export class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/nav' component={Nav} />
        <Route exact path='/Clicker' component={Clicker} />
        <Route exact path='/Reaction' component={Reaction} />
      </div>
    )
  }
}

export default App


