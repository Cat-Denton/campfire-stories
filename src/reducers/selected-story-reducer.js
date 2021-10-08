export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_STORY':
      return {placeholder: 'test'}
    default:
      return state;
  }
}