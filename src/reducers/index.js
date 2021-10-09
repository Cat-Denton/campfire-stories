import selectedStoryReducer from "./selected-story-reducer";
import storyListReducer from "./story-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectedStory: selectedStoryReducer,
  masterStoryList: storyListReducer
});

export default rootReducer;