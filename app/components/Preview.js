import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Preview({preview}) {
  return(
    <p>
      {preview}
    </p>
  );
}

Preview.propTypes = {
  preview: PropTypes.string.isRequired
}

export default Preview;
