import storyListReducer from "../../reducers/story-list-reducer";
import * as c from '../../actions/ActionTypes';

describe('storyListReducer', () => {
  let action;

  const currentState = {
    1: {title: 'dogs and cats', author: 'just a human', tags: ['funny', 'normal'], entryList: ['stuff stuff stuff', 'eat eat eat'], id: 1},
    2: {title: 'humans suck', author: 'a normal human', tags: ['true', 'normal'], entryList: ['jerks jerks jerks', 'totally just a normal human'], id: 2}
  }

  const storyData = {title: 'dogs and cats', author: 'just a human', tags: ['funny', 'normal'], entryList: ['stuff stuff stuff', 'eat eat eat'], id: 1}

  test('should return default state if no action type is recognized', () => {
    expect(storyListReducer({}, { type: null})).toEqual({});
  });

  test('should delete a story of correct id', () => {
    action = {
      type: c.DELETE_STORY,
      id: 1
    }
    const newState = {
      2: {title: 'humans suck', author: 'a normal human', tags: ['true', 'normal'], entryList: ['jerks jerks jerks', 'totally just a normal human'], id: 2}
    }
    expect(storyListReducer(currentState, action)).toEqual(newState)
  })
})