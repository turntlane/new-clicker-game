import React, { Component } from "react";
import Nav from "./nav";

export class Reaction extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      interval: 0,
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
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 0.1);
    this.setState({ bgColor: "green" });
  };

  resetTimer = () => {
    this.setState({
      bgColor: "green",
      timer: this.state.timer,
      isActive: false,
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
    let style = {};
    return (
      <div className="clicker-container">
        <Nav />
        {/* <div className="start-btn-container" onClick={this.handleTimeOut}>
          
        </div> */}

        <button
          className="start-btn"
          disabled={
            this.state.bgColor === "" || this.state.bgColor === "cadetblue"
          }
          onClick={this.resetTimer}
          onDoubleClick={this.clearTimer}
          style={{ backgroundColor: this.state.bgColor }}
        >
          {this.state.bgColor === "red" ? "get ready..." : null}
          {this.state.bgColor === "green" ? (
            <p style={{whiteSpace: 'pre'}}> {`${this.state.timer}\nDouble Click To Restart`}</p>
          ) : null}
        </button>

        <button
          className="other-btn"
          onClick={this.handleTimeOut}
          style={
            this.state.bgColor === "green" || this.state.bgColor === "red"
              ? { display: "none" }
              : null
          }
        >
          Click Here to begin
        </button>
      </div>
    );
  }
}

export default Reaction;
