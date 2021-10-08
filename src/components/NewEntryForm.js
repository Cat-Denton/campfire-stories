import React from 'react';
import PropTypes from 'prop-types'

function NewEntryForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.addingNewEntryHandler}>
                <textarea
                    rows="18"
                    cols="76"
                    name='entry'
                    placeholder='What twists and turns do you have in store for this tale?' />
                <br />
                <button type='submit'>Continue this tale</button>
            </form>
        </React.Fragment>
    )
}

NewEntryForm.propTypes = {
    addingNewEntryHandler: PropTypes.func
}

export default NewEntryForm;