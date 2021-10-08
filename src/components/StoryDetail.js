import React from 'react';
import Entry from './Entry';
import PropTypes from 'prop-types'
import NewEntryForm from './NewEntryForm';

function StoryDetail(props){
  const { story, onClickingDelete, onClickingEditStory } = props;

  function handleAddingNewEntryToStory(event) {
    event.preventDefault();
    props.onClickingAddEntry({title: story.title, author: story.author, tags: story.tags, entryList: story.entryList.concat(event.target.entry.value), id: story.id})
  }

  return (
    <React.Fragment>
      <h1>{story.title}</h1>
        <h3>by {story.author}</h3>
        <em>Tags:</em> {story.tags.map((tag, index) =>
          <span key={index}>
            {tag} {' '}
          </span>
        )}
        <hr />
        {story.entryList.map((entry, index) =>
          <span key={index}>
            <Entry text={entry} />
          </span>
        )}
        <hr />
        <NewEntryForm addingNewEntryHandler={handleAddingNewEntryToStory}/>
        <button onClick={()=> onClickingEditStory()}>Change this story's details.</button>
        <button onClick={()=> onClickingDelete(story.id) }>Erase this tale from time.</button>

    </React.Fragment>
  )
}

StoryDetail.propTypes = {
  story: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickinEditStory: PropTypes.func,
  onClickingAddEntry: PropTypes.func
}

export default StoryDetail;