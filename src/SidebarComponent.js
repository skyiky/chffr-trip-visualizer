import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './App.css';

const styles = theme => ({
  formControl: {
    minWidth: '95%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  }
});

export class SidebarComponent extends Component {
  constructor(props) {
    super(props);

    this.createTripListMenuItems = this.createTripListMenuItems.bind(this);
  }

  createTripListMenuItems = () => {
    let tripList = [];

    if (this.props.tripList != null) {
      for (let i = 0; i < this.props.tripList.length; i++) {
        let tripListName = this.props.tripList[i];

        tripList.push(
          <MenuItem
            value={tripListName}
            key={i}
          >
            {tripListName.substring(0, tripListName.length - 5)}
          </MenuItem>
        );
      }
    }

    return tripList;
  };

  render() {
    const {classes} = this.props;

    return (
      <div className="sidebar-component">
        <div className="sidebar-component-nav">
          <h2 className="sidebar-component-nav-heading">Trip Statistics</h2>
        </div>
        <Divider/>
        <div className="sidebar-component-stat">
          Average Speed:
          <div className="sidebar-component-stat-value">
            {Number(this.props.avgSpeed.toFixed(1))} m/ph
          </div>
        </div>
        <Divider/>
        <div className="sidebar-component-stat">
          Max Speed:
          <div className="sidebar-component-stat-value">
            {Number(this.props.maxSpeed.toFixed(1))} m/ph
          </div>
        </div>
        <Divider/>
        <div className="sidebar-component-stat">
          Distance Travelled:
          <div className="sidebar-component-stat-value">
            {Number(this.props.distanceTravelled.toFixed(1))} Miles
          </div>
        </div>
        <Divider/>
        <div className="sidebar-component-stat">
          Start Time:
          <div className="sidebar-component-stat-value">
            {this.props.startTime.replace("T", " ")}
          </div>
        </div>
        <Divider/>
        <div className="sidebar-component-stat">
          End Time:
          <div className="sidebar-component-stat-value">
            {this.props.endTime.replace("T", " ")}
          </div>
        </div>
        <Divider/>
        <div className="sidebar-component-stat">
          Total Trip Time:
          <div className="sidebar-component-stat-value">
            {this.props.totalTime}
          </div>
        </div>
        <Divider/>
        <div className="sidebar-component-stat">
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="trip-placeholder">Trip Id</InputLabel>

              <Select
                value={this.props.tripName}
                onChange={this.props.setTripHandler}
                displayEmpty
                name="Trip"
                className={classes.selectEmpty}
                input={<Input name={this.props.tripName.substring(0, this.props.tripName.length - 5)}
                              id="trip-placeholder"/>}
              >
                {this.createTripListMenuItems()}
              </Select>
              <FormHelperText>YYYY-MM-DD--HH-MM-SS</FormHelperText>
            </FormControl>
          </form>
        </div>
        <div className="sidebar-component-stat-button">
          <Button variant="outlined" onClick={this.props.resetCenter}>
            Recenter
          </Button>
        </div>
      </div>
    );
  }
}

SidebarComponent.propTypes = {
  setTripHandler: PropTypes.func,
  resetCenter: PropTypes.func,
  tripName: PropTypes.string,
  tripList: PropTypes.array,
  avgSpeed: PropTypes.number,
  maxSpeed: PropTypes.number,
  distanceTravelled: PropTypes.number,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  totalTime: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarComponent);