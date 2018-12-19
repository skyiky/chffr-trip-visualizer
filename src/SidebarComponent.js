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
      <div>
        Trip Statistics:

      </div>
    );
  }
}

SidebarComponent.propTypes = {

};

export default SidebarComponent;