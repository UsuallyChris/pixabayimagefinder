import React, { Component } from 'react';
import { GridList, GridTitle } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import GridTile from 'material-ui/GridList/GridTile';

class ImageResults extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let imageListContent;
    const images = this.props.images;

    if(images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>by <strong>{img.user}</strong></span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color='white' />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt=""/>
            </GridTile>
          ))}
        </GridList>
      )
    } else {
      imageListContent = null;
    }

    return(
      {imageListContent}
    );
  }
}

export default ImageResults;