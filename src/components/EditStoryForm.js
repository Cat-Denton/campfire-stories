import React from 'react';
import ReuseableStoryForm from './ReuseableStoryForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase'

function EditStoryForm (props) {
    const firestore = useFirestore();
    const { story } = props;

    function handleEditStoryFormSubmission(event) {
        event.preventDefault();
        const propertiesToUpdate = {title: event.target.title.value, author: event.target.author.value, tags: [event.target.tags.value], entryList: [event.target.entryList.value]}
        return firestore.update({collection: 'stories', doc: story.id}, propertiesToUpdate)
    }
    return (
        <React.Fragment>
            <ReuseableStoryForm storyFormSubmissionHandler={handleEditStoryFormSubmission} buttonText="Change story details" />
        </React.Fragment>
    )
}

EditStoryForm.propTypes = {
    story: PropTypes.object,
    onEditStory: PropTypes.func
}

export default EditStoryForm;