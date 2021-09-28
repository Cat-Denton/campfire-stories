import React from "react";
import PropTypes from 'prop-types';

function Entry(props){
  return (
    <React.Fragment>
      <p>{props.text}</p>
    </React.Fragment>
  )
}

Entry.propTypes = {
  text: PropTypes.string
}

export default Entry
