import React, { Component } from "react";
import Nav from "./nav";

export class Reaction extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      isActive: false,
      bgColor: "",
    };
  }

  handleActive = () => {
    this.setState({ isActive: true, bgColor: "green" });
    console.log(this.state.isActive);
  };


  handleTimeOut = () => {
    this.setState({ bgColor: "red", isActive: false });
    let num = Math.floor(Math.random() * 5000);
    setTimeout(this.handleTimer, num);
  };

  handleTimer = () => {
    this.interval = setInterval(() => {
      console.log(this.interval);
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, .100);
    this.setState({bgColor: 'green'})
  };

  resetTimer = () => {
    this.setState({
        bgColor: "green",
      timer: this.state.timer,
    });
    clearInterval(this.interval);
  };

  clearTimer = () => {
    this.setState({
      isActive: false,
      bgColor: "cadetblue",
      timer: 0,
    });
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="content-container">
        <Nav />
        <button
          className="start-btn"
          onClick={this.handleTimeOut}
          onDoubleClick={this.resetTimer}
          style={{ backgroundColor: this.state.bgColor }}
        >
          <h1>{this.state.timer} ms</h1>
          {`Reaction Test:
             When the red box turns green, click ASAP.
              Click anywhere to start.`}

        </button>
        {this.state.bgColor === 'green' && !this.state.isActive ? <button onClick={this.resetTimer}><h1>{this.state.timer} ms</h1></button> : null}
        <button onClick={this.handleTimer} on onDoubleClick={this.resetTimer}>
          Count
        </button>
        <button onClick={this.clearTimer}>
          Reset
        </button>
      </div>
    );
  }
}

export default Reaction;
