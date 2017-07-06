import React, { Component } from 'react';
import Preview from './Preview';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hello World'
    }

    this.handleTextArea = this.handleTextArea.bind(this);
  }
  handleTextArea(e) {
    return this.setState({value: e.target.value});
  }
  render() {
    var value = this.state.value;
    console.log(this.props);
    return (
      <div className="form">
        <form>
          <textarea
            value={value}
            onChange={this.handleTextArea}>
          </textarea>
        </form>
        <Preview previewText={value}/>
      </div>
    )
  }
}

export default Form;
