import react from "react";
import React from "react";
import PropTypes from 'prop-types';

function Story(props) {

  return (
    <react.Fragment>
      <div onClick={() => props.whenStoryClicked(props.id)}>
        <h1>{props.title}</h1>
        <h3>by {props.author}</h3>
        <em>Tags:</em> {props.tags.map((tag, index) =>
          <span key={index}>
            {tag} {' '}
          </span>
        )}
      </div>
    </react.Fragment>
  )
}

Story.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.array,
  entryList: PropTypes.array,
  id: PropTypes.string,
  whenStoryClicked: PropTypes.func
}

export default Story