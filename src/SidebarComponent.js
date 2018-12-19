import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';


export class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div className="sidebar-component">
        <div className="sidebar-component-nav">
          Trip Statistics:
        </div>
        <div className="sidebar-component-stat">
        Average Speed: {this.props.avgSpeed}
        </div>

        <div className="sidebar-component-stat">
        Max Speed: {this.props.maxSpeed}
        </div>

        <div className="sidebar-component-stat">
        Distance Travelled: {this.props.distanceTravelled}
        </div>

        <div className="sidebar-component-stat">
        Start Time: {this.props.startTime}
        </div>

        <div className="sidebar-component-stat">
        End Time: {this.props.endTime}
        </div>

        <div className="sidebar-component-stat">
        Total Trip Time: {this.props.totalTime}
        </div>

        <button className="sidebar-component-button" onClick={this.props.setTripHandler} value={2}>
          test
        </button>
      </div>
    );
  }
}

SidebarComponent.propTypes = {
  setTripHandler: PropTypes.func,
  avgSpeed: PropTypes.number,
  maxSpeed: PropTypes.number,
  distanceTravelled: PropTypes.number,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  totalTime: PropTypes.string,
};

export default SidebarComponent;