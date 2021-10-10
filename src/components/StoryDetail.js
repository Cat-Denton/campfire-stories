import React from 'react';
import Entry from './Entry';
import PropTypes from 'prop-types'
import NewEntryForm from './NewEntryForm';
import NewTagForm from './NewTagForm';
import { useFirestore } from 'react-redux-firebase';
import { firestore } from 'firebase';

function StoryDetail(props){
  const firestore = useFirestore();
  const { story, onClickingDelete, onClickingEditStory, onClickingAddEntry, onClickingAddTag } = props;

  function handleAddingNewEntryToStory(event) {
    event.preventDefault();
    const updatedEntryList = {entryList: story.entryList.concat(event.target.entry.value)}
    onClickingAddEntry({title: story.title, author: story.author, tags: story.tags, entryList: story.entryList.concat(event.target.entry.value), id: story.id})
    return firestore.update({collection: 'stories', doc: story.id}, updatedEntryList)
  }

  function handleAddingTagToStory(event) {
    event.preventDefault();
    const updatedTags = {tags: story.tags.concat(event.target.tag.value)}
    onClickingAddTag({title: story.title, author: story.author, tags: story.tags.concat(event.target.tag.value), entryList: story.entryList, id: story.id})
    return firestore.update({collection: 'stories', doc: story.id}, updatedTags)
  }

  return (
    <React.Fragment>
      <h1>{story.title}</h1>
        <h3>by {story.author}</h3>
        <em>Tags:</em> {story.tags.map((tag, index) =>
          <span key={index}>
            {'•'} {tag} {' '}
          </span>
        )}
        <br />
        <NewTagForm addingNewTagHandler={handleAddingTagToStory} />       
        <hr />
        {story.entryList.map((entry, index) =>
          <span key={index}>
            <Entry text={entry} />
          </span>
        )}
        <NewEntryForm addingNewEntryHandler={handleAddingNewEntryToStory}/>
        <hr />
        <button onClick={()=> onClickingEditStory()}>Change this story's details.</button>
        <button onClick={()=> onClickingDelete(story.id) }>Erase this tale from time.</button>

    </React.Fragment>
  )
}

StoryDetail.propTypes = {
  story: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickinEditStory: PropTypes.func,
  onClickingAddEntry: PropTypes.func,
  onClickingAddTag: PropTypes.func
}

export default StoryDetail;