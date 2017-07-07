import React, { Component } from 'react';
import Input from '../containers/Input';
import MarkupPreview from '../containers/MarkupPreview';


class Main extends Component {
  render() {
    return (
      <div className="main">
        <Input />
        <MarkupPreview />
      </div>
    );
  }
}

export default Main;
