import React, {Component} from 'react';
import MapContainer from './MapContainer';
import SidebarContainer from './SidebarContainer';
import PropTypes from 'prop-types';
import './App.css';

const trips = [
  "2016-07-02--11-56-24.json",  "2017-02-28--20-15-20.json",  "2017-05-28--16-41-55.json",  "2017-08-18--22-04-35.json",  "2017-09-03--10-57-30.json",
  "2016-07-02--13-09-31.json",  "2017-02-28--20-50-26.json",  "2017-05-29--21-00-46.json",  "2017-08-19--12-21-07.json",  "2017-09-03--23-03-52.json",
  "2016-07-02--16-01-50.json",  "2017-02-28--22-10-09.json",  "2017-05-29--21-11-04.json",  "2017-08-19--22-10-10.json",  "2017-09-04--11-49-19.json",
];

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: null,
      data: null,
      currentLatLng: {
        lat: 0,
        lng: 0
      }
    };


    this.setTripHandler = this.setTripHandler.bind(this);
    this.getGeoLocation = this.getGeoLocation.bind(this);
    this.resetCenter = this.resetCenter.bind(this);
  }

  setTripHandler = (index) => {
    let data = require('./trips/' + trips[index]);

    this.setState({
      tripName: trips[index],
      data: data,
      currentLatLng: {
        lat: data.coords[index].lat,
        lng: data.coords[index].lng,
      }
    });
  };

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          return {lat: position.coords.latitude, lng: position.coords.longitude}
        }
      )
    }
  };

  resetCenter = () => {
    this.setState({
      currentLatLng: {
        lat: this.state.data.coords[0].lat,
        lng: this.state.data.coords[0].lng
      }
    })
  };

  componentWillMount() {
    if (trips.length >= 1) {
      let data = require('./trips/' + trips[0]);
      this.setState({
        tripName: trips[0],
        data: data,
        currentLatLng: {
          lat: data.coords[0].lat,
          lng: data.coords[0].lng,
        }
      })
    }
  }

  render() {

    return (
      <div>
        <div className="sidebar-container-parent">
          <SidebarContainer setTripHandler={this.setTripHandler}/>
        </div>
        <div className="map-container-parent">
          <MapContainer
            tripName={this.state.tripName}
            data={this.state.data}
            currentLatLng={this.state.currentLatLng}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

export default App;