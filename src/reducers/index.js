import selectedStoryReducer from "./selected-story-reducer";
import storyListReducer from "./story-list-reducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  selectedStory: selectedStoryReducer,
  masterStoryList: storyListReducer,
  firestore: firestoreReducer
});

export default rootReducer;