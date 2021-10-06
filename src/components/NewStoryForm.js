import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewStoryForm(props){

  function handleNewStoryFormSubmission(event) {
    event.preventDefault();
    props.onNewStoryCreation({title: event.target.title.value, author: event.target.author.value, tags: [event.target.tags.value], entryList: [event.target.entryList.value], id: v4()});
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewStoryFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Title' />
        <input
          type='text'
          name='author'
          placeholder='Author' />
        <input
          type='text'
          name='tags'
          placeholder='Initial tag' />
        <br />
        <br />
        <textarea
          rows="18"
          cols="76"
          name='entryList'
          placeholder='Start telling your tale' />
        <br />
        <button type='submit'>Stay a while, and listen</button>
      </form>
      
    </React.Fragment>
  )
}

NewStoryForm.propTypes = {
  onNewStoryCreation: PropTypes.func
}

export default NewStoryForm;