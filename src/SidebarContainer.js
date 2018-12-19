import React, {Component} from 'react';
import Sidebar from "react-sidebar";
import PropTypes from 'prop-types';
import SidebarComponent from './SidebarComponent';
import './App.css';


export class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.setTripHandler = this.setTripHandler.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  setTripHandler = (e) => {
    this.props.setTripHandler(e.target.value);
  };

  calcAvgSpeed = (props) => {

  };

  calcMaxSpeed = (props) => {

  };

  calcDistanceTravelled = (props) => {

  };

  calcStartTime = (props) => {
    // 2016-07-04T21:47:21
    return this.props.data["start_time"];
  };

  calcEndTime = (props) => {
    return this.props.data["end_time"];
  };

  calcTotalTimeElapsed = (props) => {
    let startTime = this.props.data["start_time"];
    startTime = startTime.split("T")[1].split(":");

    let endTime =  this.props.data["end_time"];
    endTime = endTime.split("T")[1].split(":");

    let result = "";

    for (let i = 0; i < 3; i++) {
      result += (endTime[i] - startTime[i])
    }

  };

  render() {
    return (
      <Sidebar
        sidebar={
          <SidebarComponent
            setTripHandler={this.setTripHandler}
            avgSpeed={this.calcAvgSpeed()}
            maxSpeed={this.calcMaxSpeed()}
            distanceTravelled={this.calcDistanceTravelled()}
            startTime={this.calcStartTime()}
            endTime={this.calcEndTime()}
            totalTime={this.calcTotalTimeElapsed()}
          />
          }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar:
            {
              "background": "white",
              "maxHeight": "600px",
              "margin": "auto 0",
              "width": "250px",

            },
          overlay: {
            backgroundColor: "rgba(0,0,0,0)"
          }
        }}
        transitions={true}
        defaultSidebarWidth={0}
        docked={true}
      >
        <button className="sidebar-container-button" onClick={() => this.onSetSidebarOpen(true)} >
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

SidebarContainer.propTypes = {
  setTripHandler: PropTypes.func,
  tripName: PropTypes.string,
  data: PropTypes.object,
};

export default SidebarContainer;