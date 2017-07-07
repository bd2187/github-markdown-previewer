import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Hello World'
//     }
//
//     this.handleTextArea = this.handleTextArea.bind(this);
//   }
//   handleTextArea(e) {
//     return this.setState({value: e.target.value});
//   }
//   render() {
//     var value = this.state.value;
//     console.log(this.props);
//     return (
//       <div className="form">
//         <form>
//           <textarea
//             value={value}
//             onChange={this.handleTextArea}>
//           </textarea>
//         </form>
//         <Preview previewText={value}/>
//       </div>
//     )
//   }
// }

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Hello World'
//     }
//
//     this.handleTextArea = this.handleTextArea.bind(this);
//   }
//   handleTextArea(e) {
//     return this.setState({value: e.target.value});
//   }
//   render() {
//     var value = this.state.value;
//     console.log(this.props);
//     return (
//       <div className="form">
//         <form>
//           <textarea
//             value={value}
//             onChange={this.handleTextArea}>
//           </textarea>
//         </form>
//         <Preview previewText={value}/>
//       </div>
//     )
//   }
// }


function Form ({input, onChange}) {
  return (
    <div className="form">
      <form>
        <textarea
          value={input}
          onChange={(e) => onChange(e.target.value)}>
        </textarea>
      </form>
    </div>
  );
}

export default Form;
