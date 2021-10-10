import React from "react";
import PropTypes from 'prop-types';
import ReuseableStoryForm from "./ReuseableStoryForm";
import { useFirestore } from 'react-redux-firebase';

function NewStoryForm(props){

  const firestore = useFirestore();

  function addStoryToFirestore(event) {
    event.preventDefault();
    props.onNewStoryCreation();

    return firestore.collection('stories').add(
      {
        title: event.target.title.value,
        author: event.target.author.value,
        tags: event.target.tags.value.split(" "),
        entryList: event.target.entryList.value.split("\n")
      }
    )
  }

  // function handleNewStoryFormSubmission(event) {
  //   event.preventDefault();
  //   props.onNewStoryCreation({title: event.target.title.value, author: event.target.author.value, tags: [event.target.tags.value], entryList: [event.target.entryList.value], id: v4()});
  // }

  return (
    <React.Fragment>
      <ReuseableStoryForm storyFormSubmissionHandler={addStoryToFirestore} buttonText='Share your tale far and wide' />
    </React.Fragment>
  )
}

NewStoryForm.propTypes = {
  onNewStoryCreation: PropTypes.func
}

export default NewStoryForm;