import React from "react";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userLocation: null,
    };

    // bind user location and coordinates
    this.getLocation = this.getLocation.bind(this)
    this.getUserCoordinates = this.getUserCoordinates.bind(this)

  }

//  use geolocation if supported by user browser to get coordinates
getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.getUserCoordinates);
} else {
    alert("Geolocation is not supported by this browser!")
}
}

getUserCoordinates(position){
    console.log(position)
    this.setState ({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    })
}

  render() {
    return (
      <div className="location">
        <h2>Distance</h2>
        <button onClick={this.getLocation}>Get Location</button>
        <h4>Cordinates</h4>
        <p>Latitude: {this.state.latitude}</p>
        <p>longitude: {this.state.longitude}</p>
        <h4>Map Location</h4>
        <p>Address: {this.state.userLocation}</p>
      </div>
    );
  }
}

export default Location;
