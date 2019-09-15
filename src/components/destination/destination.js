import React, { Component } from "react";
import "./destination.css";

class Destination extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
      this.setState({pickUpInputText: event.target.value});
    }
    render() {
        let placeType;

        if(this.props.location.placeType === "C"){
          placeType = <div className="label label-city">City</div>
        }
        else if(this.props.location.placeType === "A"){
          placeType = <div className="label label-airport">Airport</div>
        }
        else if(this.props.location.placeType === "S"){
          placeType = <div className="label label-station">Station</div>
        }
        else if(this.props.location.placeType === "I"){
          placeType = <div className="label label-region">Region</div>
        }
        else if(this.props.location.placeType){
          placeType = <div className="label label-other">City</div>
        }

        return (
          <div className="destination-container">
            {placeType}
            {this.props.location.name}
          </div>
        );
    }
}

export default Destination