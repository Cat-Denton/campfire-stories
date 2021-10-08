export default (state = {}, action) => {
  const {title, author, tags, entryList, id} = action;
  switch (action.type) {
    case 'ADD_STORY':
      return Object.assign({}, state, {
        [id]: {
          title,
          author,
          tags,
          entryList,
          id
        }
      })
    case 'DELETE_STORY':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}