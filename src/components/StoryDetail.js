import React from 'react';
import Entry from './Entry';
import PropTypes from 'prop-types'

function StoryDetail(props){
  const { story } = props;

  return (
    <React.Fragment>
      <h1>{story.title}</h1>
        <h3>by {story.author}</h3>
        <em>Tags:</em> {story.tags.map((tag, index) =>
          <span key={index}>
            {tag} {' '}
          </span>
        )}
        {story.entryList.map((entry, index) =>
          <span key={index}>
            <Entry text={story.entry} />
            {console.log(entry)}
          </span>
        )}
    </React.Fragment>
  )
}

StoryDetail.propTypes = {
  story: PropTypes.object
}

export default StoryDetail;