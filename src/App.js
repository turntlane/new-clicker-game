import React, { Component } from 'react'

import Timer from './timer'

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
      clicks: 0,
      timer: 5
    }
  }

  clickCounter = () => {
    let clicks = this.state.clicks
    clicks += 1
    this.setState({clicks: clicks})
  }


  handleTimer = () => {
    this.setState({isActive: true})
    this.interval =  setInterval(() => {
        if(this.state.timer <= 1) {
            clearInterval(this.interval)
        }
        console.log(this.interval)
        this.setState(prevState => ({
            timer: prevState.timer - 1
        }))
    }, 1000);
    return () => {
      clearInterval(this.interval)
    }
    }

    resetTime = () => {
      clearInterval(this.interval)
      this.setState({
        timer: 5,
        clicks: 0,
        isActive: false})
    }


  render() {
    return (
      <div>
        <button onClick={this.state.isActive ? this.clickCounter : this.handleTimer} disabled={this.state.timer === 0} >{this.state.clicks}</button>
        {this.state.timer}
        <button onClick={this.resetTime}></button>
      </div>
    )
  }
}

export default App

