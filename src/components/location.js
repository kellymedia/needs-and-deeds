import React from "react";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userLocation: null,
    };

    // bind user location
    this.getLocation = this.getLocation.bind(this)

  }

//  get geolocation if supported by user browser
getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getUserCoordinates);
} else {
    alert("Geolocation is not supported by this browser!")
}
}


  render() {
    return (
      <div className="location">
        <h2>Distance</h2>
        <button onClick={this.getLocation}>Get Location</button>
        <h4>Cordinates</h4>
        <p>Latitude</p>
        <p>longitude</p>
        <h4>Map Location</h4>
        <p>Address: {this.state.userLocation}</p>
      </div>
    );
  }
}

export default Location;
