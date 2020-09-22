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
    this.getLocation = this.getLocation.bind(this);
    this.getUserCoordinates = this.getUserCoordinates.bind(this);
  }

  //  use geolocation if supported by user browser to get coordinates
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getUserCoordinates,
        this.handleLocationErrors
      );
    } else {
      alert("Geolocation is not supported by this browser!");
    }
  }

  getUserCoordinates(position) {
    console.log(position);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  // handle location errors
  handleLocationErrors(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
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
        {/* use ternary operator to check if late and lon is available and display image */}
        {this.state.latitude && this.state.longitude ? (
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&makers=color:red%7C${this.state.latitude},${this.state.longitude}&key=key`}
            alt=""
          />
        ) : null}
      </div>
    );
  }
}

export default Location;

{
  /* <img src={"https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=YOUR_API_KEY"} alt="" /> */
}
