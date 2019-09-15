import React, { Component } from "react";
import "./search-gadget.css";

class SearchGadget extends Component {
    constructor(){
        super();
        this.state = {pickUpInputText: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({pickUpInputText: event.target.value});
    }
    render() {
        return (

          <div className="gadget-container">
            <h2>Let's find your ideal Ferrari</h2>

            <div className="pick-up-section">
              <div>Pick-up Location</div>
              <input placeholder="city, airport, station, region and district..." type="text"
                aria-label={this.state.pickUpInputText}
                aria-required="true"
                onChange={this.handleChange}
                value={this.state.pickUpInputText}
                name="name">
              </input>
            </div>
          </div>
        );
    }
}

export default SearchGadget