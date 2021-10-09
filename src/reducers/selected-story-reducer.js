export default (state = null, action) => {
  const {title, author, tags, entryList, id} = action;
  switch (action.type) {
    case 'SELECT_STORY':
      return {
        title,
        author,
        tags,
        entryList,
        id
      };
    case 'NULL_STORY':
      return null;
    default:
      return state;
  }
}