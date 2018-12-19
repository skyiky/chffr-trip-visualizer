import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: '5px 10px'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '80%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

export class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.createTripListMenuItems = this.createTripListMenuItems.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
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
            {tripListName.substring(0, tripListName.length-5)}
          </MenuItem>
        );
      }
    }

    return tripList;
  };

  render() {
    const { classes } = this.props;

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

        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="trip-placeholder">Trip Id</InputLabel>

            <Select
              value={this.props.tripName}
              onChange={this.props.setTripHandler}
              displayEmpty
              name="Trip"
              className={classes.selectEmpty}
              input={<Input name={this.props.tripName.substring(0, this.props.tripName.length-5)} id="trip-placeholder" />}
            >
              {this.createTripListMenuItems()}
            </Select>
            <FormHelperText>YYYY-MM-DD--HH-MM-SS</FormHelperText>
          </FormControl>
        </form>

      </div>
    );
  }
}

SidebarComponent.propTypes = {
  setTripHandler: PropTypes.func,
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