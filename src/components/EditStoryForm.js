import React from 'react';
import ReuseableStoryForm from './ReuseableStoryForm';
import PropTypes from 'prop-types';

function EditStoryForm (props) {
    const { story } = props;

    function handleEditStoryFormSubmission(event) {
        event.preventDefault();
        props.onEditStory({title: event.target.title.value, author: event.target.author.value, tags: [event.target.tags.value], entryList: [event.target.entryList.value], id: story.id})
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