import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

function createMarkup(markup)  {
  return {
    __html: marked(markup)
  };
}

function Preview({preview}) {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={createMarkup(preview)}/>

  );
}

Preview.propTypes = {
  preview: PropTypes.string.isRequired
}

export default Preview;
