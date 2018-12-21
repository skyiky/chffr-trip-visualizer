import React, {Component} from 'react';
import Sidebar from "react-sidebar";
import PropTypes from 'prop-types';
import SidebarComponent from './SidebarComponent';
import './App.css';


export class SidebarContainer extends Component {
  constructor(props) {
    super(props);

    this.setTripHandler = this.setTripHandler.bind(this);
    this.setLineWeight = this.setLineWeight.bind(this)
    this.calcAvgSpeed = this.calcAvgSpeed.bind(this);
    this.calcMaxSpeed = this.calcMaxSpeed.bind(this);
    this.calcDistanceTravelled = this.calcDistanceTravelled.bind(this);
    this.calcStartTime = this.calcStartTime.bind(this);
    this.calcEndTime = this.calcEndTime.bind(this);
    this.calcTotalTimeElapsed = this.calcTotalTimeElapsed.bind(this);
  }

  setTripHandler = (e) => {
    this.props.setTripHandler(e.target.value);
  };

  setLineWeight = (e) => {
    this.props.setLineWeight(e.target.value);
  };

  calcAvgSpeed = (props) => {
    const {coords} = this.props.data;
    let x = 0;
    let y = coords.length;
    for (let i = 0; i < coords.length; i++) {
      x += coords[i].speed;
    }
    return (x / y);
  };

  calcMaxSpeed = (props) => {
    const {coords} = this.props.data;
    let max = 0;
    for (let i = 0; i < coords.length; i++) {
      let x = coords[i].speed;
      if (x > max) {
        max = x;
      }
    }
    return max;
  };

  calcDistanceTravelled = (props) => {
    const {coords} = this.props.data;
    return (coords[coords.length - 1].dist - coords[0].dist);
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

    let endTime = this.props.data["end_time"];
    endTime = endTime.split("T")[1].split(":");

    let result = "";

    for (let i = 0; i < 3; i++) {
      let x = (Number(endTime[i]) - Number(startTime[i]));
      if (x < 0) {
        x = 0;
      }
      if (x < 10) {
        result = result + "0" + x.toString();
      } else {
        result = result + x.toString();
      }
      if (i !== 2) {
        result = result + ":";
      }
    }
    return result;
  };

  render() {
    let children = [];
    return (
      <Sidebar
        sidebar={
          <SidebarComponent
            setTripHandler={this.setTripHandler}
            setLineWeight={this.setLineWeight}
            avgSpeed={this.calcAvgSpeed()}
            maxSpeed={this.calcMaxSpeed()}
            distanceTravelled={this.calcDistanceTravelled()}
            startTime={this.calcStartTime()}
            endTime={this.calcEndTime()}
            totalTime={this.calcTotalTimeElapsed()}
            resetCenter={this.props.resetCenter}
            tripName={this.props.tripName}
            tripList={this.props.tripList}
            lineWeight={this.props.lineWeight}
          />
        }
        styles={{
          sidebar:
            {
              "background": "white",
              "maxHeight": "580px",
              "margin": "auto 0",
              "width": "260px",

            },
          overlay: {
            backgroundColor: "rgba(0,0,0,0)"
          }
        }}
        defaultSidebarWidth={260}
        docked={true}
      >
        {children}
      </Sidebar>
    );
  }
}

SidebarContainer.propTypes = {
  setTripHandler: PropTypes.func,
  setLineWeight: PropTypes.func,
  resetCenter: PropTypes.func,
  tripName: PropTypes.string,
  tripList: PropTypes.array,
  lineWeight: PropTypes.number,
  data: PropTypes.object,
};

export default SidebarContainer;