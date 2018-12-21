import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, GoogleApiWrapper, Polyline, Marker} from 'google-maps-react';
import './App.css';

const dimensions = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
    this.mapRef = React.createRef();

    this.getLocationTripEnd = this.getLocationTripEnd.bind(this);
    this.createPolylinePath = this.createPolylinePath.bind(this);
    this.pathColor = this.pathColor.bind(this);
    this.createPolyline = this.createPolyline.bind(this);
  }

  getLocationTripEnd = () => {
    const { coords } = this.props.data;
    return {lat: coords[coords.length-1].lat, lng: coords[coords.length-1].lng};
  };

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

      for (let i = 1; i < this.props.data.coords.length; i += 1) {
        let aLat, aLng, bLat, bLng;
        aLat = this.props.data.coords[i - 1].lat;
        aLng = this.props.data.coords[i - 1].lng;
        bLat = this.props.data.coords[i].lat;
        bLng = this.props.data.coords[i].lng;
        let speedAverage = (this.props.data.coords[i - 1].speed + this.props.data.coords[i].speed) / 2;
        polylines.push(
          <Polyline
            path={this.createPolylinePath(aLat, aLng, bLat, bLng)}
            strokeColor={this.pathColor(speedAverage)}
            strokeOpacity={1}
            strokeWeight={this.props.lineWeight}
            key={i / 2}
          />
        );
      }
    }
    console.log("i was called");
    return polylines;
  };

  render() {
    return (
      <div>
        <Map
          ref={this.mapRef}
          google={this.props.google}
          zoom={this.props.zoom}
          style={dimensions}
          styles={this.props.mapStyles}
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

          <Marker
            name={'Trip End'}
            position={this.getLocationTripEnd()}
          />

        </Map>
      </div>
    );
  }
}

MapContainer.defaultProps = {
  mapStyles: [{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}]
};

MapContainer.propTypes = {
  data: PropTypes.object,
  currentLatLng: PropTypes.object,
  lineWeight: PropTypes.number,
  zoom: PropTypes.number,
};

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
