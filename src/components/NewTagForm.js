import React from 'react';
import PropTypes from 'prop-types'

function NewTagForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.addingNewTagHandler}>
        <input
          type='text'
          name='tag'
          placeholder='A tag should be a single word and descriptive' />
        <br />
        <button type='submit'>Add tags, separated by spaces</button>
      </form>
    </React.Fragment>
  )
}

NewTagForm.propTypes = {
  addingNewTagHandler: PropTypes.func
}

export default NewTagForm;