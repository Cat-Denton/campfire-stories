import selectedStoryReducer from "./selected-story-reducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  selectedStory: selectedStoryReducer,
  firestore: firestoreReducer
});

export default rootReducer;