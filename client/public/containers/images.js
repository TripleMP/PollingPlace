import React, {Component} from "react";
import {connect} from 'react-redux';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';

class Images extends Component {
  renderImage() {
    return this.props.images.map((image) => {
      return (
      <MuiThemeProvider key={image.image}>
        <div className="personImage">
          <Avatar
          src={image.image}
          size={150}
          />
          <div>Name: <strong>{image.name}</strong></div>
          <div>Role: {image.position}</div>
          </div>
        </MuiThemeProvider>
      )
    })
  }

  render() {
    console.log("Ariel: images.js file===============");
    return (
      <div className="imagePadding">
        {this.renderImage()}
        </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.imageDevelopers
  };
}

export default connect(mapStateToProps)(Images);
