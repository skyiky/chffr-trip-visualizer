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
        Trip Statistics:

        Average Speed: {this.props.avgSpeed}

        Max Speed: {this.props.maxSpeed}

        Distance Travelled: {this.props.distanceTravelled}

        Start Time: {this.props.startTime}

        End Time: {this.props.endTime}

        Total Trip Time: {this.props.totalTime}
      </div>
    );
  }
}

SidebarComponent.propTypes = {
  avgSpeed: PropTypes.number,
  maxSpeed: PropTypes.number,
  distanceTravelled: PropTypes.number,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  totalTime: PropTypes.string,
};

export default SidebarComponent;