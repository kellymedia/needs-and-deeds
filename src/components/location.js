import React from "react";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userLocation: null,
    };

    // get user location
    
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

export default App;
