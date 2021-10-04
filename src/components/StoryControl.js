import React from "react";
import NewStoryForm from "./NewStoryForm";
import StoryList from './StoryList';

class StoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterStoryList: []
    };
  }
  handleAddingNewStoryToList = (newStory) => {
    const newMasterStoryList = this.state.masterStoryList.concat(newStory);
    this.setState({masterStoryList: newMasterStoryList,
    formVisibleOnPage: false });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStoryForm 
      onNewStoryCreation = {this.handleAddingNewStoryToList}
      />
      buttonText = "Nevermind, maybe read another story"
    } else {
      currentlyVisibleState = <StoryList storyList={this.state.masterStoryList} />
      buttonText = "Start a new story"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default StoryControl;
