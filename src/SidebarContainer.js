import React, {Component} from 'react';
import Sidebar from "react-sidebar";
import PropTypes from 'prop-types';
import './App.css';


export class SidebarContainer extends Component {
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
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
        transitions={true}
        defaultSidebarWidth={600}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Close sidebar
        </button>
      </Sidebar>
    );
  }
}

SidebarContainer.propTypes = {

};

export default SidebarContainer;