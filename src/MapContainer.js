import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, GoogleApiWrapper, Polyline} from 'google-maps-react';
import './App.css';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createPolylinePath = this.createPolylinePath.bind(this);
    this.pathColor = this.pathColor.bind(this);
    this.createPolyline = this.createPolyline.bind(this);
  }

  createPolylinePath = (aLat, aLng, bLat, bLng) => {
    let path = [];
    let latlonA = {lat: aLat, lng: aLng};
    let latlonB = {lat: bLat, lng: bLng};

    path.push(latlonA);
    path.push(latlonB);

    return path;
  };

  pathColor = (speed) => {
    if (speed < 1) {
      return "#FF0000"
    } else if (speed < 5) {
      return "#FF3300"
    } else if (speed < 10) {
      return "#ff6600"
    } else if (speed < 15) {
      return "#ff9900"
    } else if (speed < 20) {
      return "#FFCC00"
    } else if (speed < 30) {
      return "#FFFF00"
    } else if (speed < 40) {
      return "#ccff00"
    } else if (speed < 50) {
      return "#99ff00"
    } else if (speed < 60) {
      return "#66ff00"
    } else if (speed < 70) {
      return "#33ff00"
    } else {
      return "#00FF00"
    }
  };

  createPolyline = () => {
    let polylines = [];

    if (this.props.data != null) {
      for (let i = 1; i < this.props.data.coords.length; i += 2) {
        let aLat = this.props.data.coords[i - 1].lat;
        let aLng = this.props.data.coords[i - 1].lng;
        let bLat = this.props.data.coords[i].lat;
        let bLng = this.props.data.coords[i].lng;
        let speedAverage = (this.props.data.coords[i - 1].speed + this.props.data.coords[i].speed) / 2;
        polylines.push(
          <Polyline
            path={this.createPolylinePath(aLat, aLng, bLat, bLng)}
            strokeColor={this.pathColor(speedAverage)}
            strokeOpacity={1}
            strokeWeight={6}
            key={i / 2}
          />
        );
      }
    }

    return polylines;
  };

  render() {

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{
            lat: this.props.currentLatLng.lat,
            lng: this.props.currentLatLng.lng
          }}
          center={{
            lat: this.props.currentLatLng.lat,
            lng: this.props.currentLatLng.lng
          }}
        >
          {this.createPolyline()}
        </Map>
      </div>
    );
  }
}

MapContainer.propTypes = {
  data: PropTypes.object,
  currentLatLng: PropTypes.object,
};

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
