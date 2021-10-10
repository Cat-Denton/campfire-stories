import * as c from './../actions/ActionTypes';

const selectedStoryReducer = (state = null, action) => {
  const {title, author, tags, entryList, id} = action;
  switch (action.type) {
    case c.SELECT_STORY:
      return {
        title,
        author,
        tags,
        entryList,
        id
      };
    case c.NULL_STORY:
      return null;
    default:
      return state;
  }
}

export default selectedStoryReducer;