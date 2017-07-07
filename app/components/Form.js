import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Form.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Form;
