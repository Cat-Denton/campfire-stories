import react from "react";
import React from "react";
import Entry from "./Entry";
import PropTypes from 'prop-types';

function Story(props) {
  
  return (
    <react.Fragment>
      <h1>{props.title}</h1>
      <h3>by {props.author}</h3>
      <br />
      <em>Tags:</em> {props.tags.map((tag, index) => 
          <span key={index}>
            {tag} {' '}         
          </span>
        )}
      
      <hr />
      {props.entryList.map((entry, index) => 
        
        <p key={index}>
          <Entry text={entry.text} />
        </p>)}
    </react.Fragment>
  )
}

Story.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.array,
  entryList: PropTypes.array
}

export default Story