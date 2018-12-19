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

  render() {
    return (
      <Sidebar
        sidebar={<SidebarComponent/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar:
            {
              "background": "white",
              "maxHeight": "600px",
              "margin": "auto 0",
              "width": "300px",

            },
          overlay: {
            backgroundColor: "rgba(0,0,0,0)"
          }
        }}
        transitions={true}
      >
        <button className="sidebar-container-button" onClick={() => this.onSetSidebarOpen(true)} >
          Open sidebar
        </button>
        <button className="sidebar-container-button" onClick={this.setTripHandler} value={2}>
          test
        </button>
      </Sidebar>
    );
  }
}

SidebarContainer.propTypes = {
  setTripHandler: PropTypes.func,
};

export default SidebarContainer;