import React from "react";
import NewStoryForm from "./NewStoryForm";
import StoryList from './StoryList';

class StoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStoryForm />
    } else {
      currentlyVisibleState = <StoryList />
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default StoryControl;
