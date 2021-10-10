import React from "react";
import Story from "./Story";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function StoryList(props) {

  useFirestoreConnect([
    { collection: 'stories' }
  ]);

  const stories = useSelector(state => state.firestore.ordered.stories);

  if (isLoaded(stories)) {
    return (
      <React.Fragment>
        <br />
        {stories.map((story) => {
          return <div>
            <Story
              whenStoryClicked={props.onStorySelection}
              title={story.title}
              author={story.author}
              tags={story.tags}
              entryList={story.entryList}
              id={story.id}
              key={story.id} />
            <hr />
          </div>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Waiting for sunset...</h3>
      </React.Fragment>
    )
  }

}

StoryList.propTypes = {
  onStorySelection: PropTypes.func
}
export default StoryList;