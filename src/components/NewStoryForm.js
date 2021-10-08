import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReuseableStoryForm from "./ReuseableStoryForm";

function NewStoryForm(props){

  function handleNewStoryFormSubmission(event) {
    event.preventDefault();
    props.onNewStoryCreation({title: event.target.title.value, author: event.target.author.value, tags: [event.target.tags.value], entryList: [event.target.entryList.value], id: v4()});
  }

  return (
    <React.Fragment>
      <ReuseableStoryForm storyFormSubmissionHandler={handleNewStoryFormSubmission} buttonText='Share your tale far and wide' />
    </React.Fragment>
  )
}

NewStoryForm.propTypes = {
  onNewStoryCreation: PropTypes.func
}

export default NewStoryForm;