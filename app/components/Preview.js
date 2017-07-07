import React, { Component } from 'react';

class Preview extends Component {

  render() {
    // console.log(this.props);
    return (
      <div className="preview">
        <p>
          {this.props.previewText}
        </p>
      </div>
    )
  }
}

export default Preview;
