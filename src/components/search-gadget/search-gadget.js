import React, { Component } from "react";
import "./search-gadget.css";
import Destination from '../destination/destination';
import ApiService from '../../services/api';

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

class SearchGadget extends Component {
    constructor(){
        super();
        this.apiService = new ApiService();
        this.state = {pickUpLocations: [], searchTerm: ''};
        this.handleInput = this.handleInput.bind(this);
        this.blurInput = this.blurInput.bind(this);
    }
    handleInput = debounce(searchTerm => {
      this.setState({pickUpLocations: []});

      if(searchTerm.length >= 2){
          this.apiService.getPickUpLocations(searchTerm).then((res) => {
            this.setState({pickUpLocations: res.results.docs});
          });
      }

      this.setState({searchTerm: searchTerm});
    }, 250);
    blurInput = () =>{
      this.setState({pickUpLocations: []});
    }
    render() {
        let pickUpLocationComponents = [];

        for (let pickUpLoc of this.state.pickUpLocations) {
          pickUpLocationComponents.push(<Destination key={pickUpLoc.index} location={pickUpLoc}></Destination>)
        }

        let pickUpSelect = <div>{pickUpLocationComponents}</div>;

        return (
          <div className="gadget-container">
            <h2>Let's find your ideal Ferrari</h2>

            <div className="pick-up-section">
              <div>Pick-up Location</div>

              <input placeholder="city, airport, station, region and district..." type="text"
                aria-label={this.state.pickUpInputText}
                aria-required="true"
                autoComplete="off"
                onChange={e => {this.handleInput(e.target.value)}}
                onBlur={this.blurInput}
                name="name">
              </input>

              {pickUpSelect}

            </div>
          </div>
        );
    }
}

export default SearchGadget