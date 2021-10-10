import * as c from './../actions/ActionTypes'

export default (state = {}, action) => {
  const {id} = action;
  switch (action.type) {
    // case c.ADD_STORY:
    //   return Object.assign({}, state, {
    //     [id]: {
    //       title,
    //       author,
    //       tags,
    //       entryList,
    //       id
    //     }
    //   })
    case c.DELETE_STORY:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}