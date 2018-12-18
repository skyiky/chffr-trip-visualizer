import React, {Component} from 'react';
import MapContainer from './MapContainer';
import SidebarContainer from './SidebarContainer';
import PropTypes from 'prop-types';
import './App.css';

export class App extends Component {

  render() {
    return (
      <div>
        <div className="sidebar-container-parent">
          <SidebarContainer/>
        </div>
        <div className="map-container-parent">
          <MapContainer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;