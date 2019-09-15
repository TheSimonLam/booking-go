import React, { Component } from "react";
import "./destination.css";

class Destination extends Component {
    constructor(){
        super();
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
      this.setState({pickUpInputText: event.target.value});
    }
    render() {
        return (
          <div className="">
            
          </div>
        );
    }
}

export default Destination