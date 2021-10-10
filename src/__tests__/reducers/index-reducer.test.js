import rootReducer from '../../reducers/index.js';
import { createStore } from 'redux';
import selectedStoryReducer from '../../reducers/selected-story-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  
  // test('Should return default state if no action type is recognized', () => {
  //   expect(rootReducer({}, { type: null })).toEqual({
  //     firestore: {}, 
  //     selectedStory: null
  //   })
  // })
  
  test('Check that initial state of selectedStoryReducer matches root reducer', () => {
    expect(store.getState().selectedStory).toEqual(selectedStoryReducer(null, {type: null}));
  });

  test('Check that SELECT_STORY action works for selectedStoryReducer and root reducer', () => {
    const action = {
      type: c.SELECT_STORY,
      title: 'dogs',
      author: 'just a human',
      tags: ['amazing', 'smells'],
      entryList: ['stuff stuff', 'things things'],
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().selectedStory).toEqual(selectedStoryReducer(null, action));
  });
})

