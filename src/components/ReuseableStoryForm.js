import React from 'react';
import PropTypes from 'prop-types';

function ReuseableStoryForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.storyFormSubmissionHandler}>
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
                    placeholder='Tags' />
                <br />
                <br />
                <textarea
                    rows="18"
                    cols="76"
                    name='entryList'
                    placeholder='Start telling your tale' />
                <br />
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    )
}

ReuseableStoryForm.propTypes = {
    storyFormSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
}

export default ReuseableStoryForm;