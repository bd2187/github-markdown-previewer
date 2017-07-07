import React, { Component } from 'react';
import Input from '../containers/Input';
import MarkdownPreview from '../containers/MarkdownPreview';


class Main extends Component {
  render() {
    return (
      <div className="main">
        <Input />
        <MarkdownPreview />
      </div>
    );
  }
}

export default Main;
