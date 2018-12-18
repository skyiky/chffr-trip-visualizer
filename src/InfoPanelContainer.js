import React, {Component} from 'react';
import Menu from '@material-ui/core/Menu';

export class InfoPanelContainer extends Component {
  state = {
    showingInfoPanel: true,
    loadedRoute: null
  };


  onClose = props => {
    if (this.state.showingInfoPanel) {
      this.setState({
        showingInfoPanel: false
      });
    }
  };

  render() {
    return (
      <div>
       <Menu/>
      </div>
    );
  }
}

export default InfoPanelContainer;