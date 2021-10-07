import React from "react";
import NewStoryForm from "./NewStoryForm";
import StoryDetail from "./StoryDetail";
import StoryList from './StoryList';

class StoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterStoryList: [],
      selectedStory: null
    };
  }

  handleAddingNewStoryToList = (newStory) => {
    const newMasterStoryList = this.state.masterStoryList.concat(newStory);
    this.setState({masterStoryList: newMasterStoryList,
    formVisibleOnPage: false, selectedStory: newStory });
  }
  
  // handleAddingNewEntryToStoryInList = (id, entry) => {
  //   const newMasterStoryList = this.state.masterStoryList.story[id].entryList.concat(entry)
  //   this.setState({masterStoryList: newMasterStoryList})
  // }

  handleChangingSelectedStory = (id) => {
    const selectedStory = this.state.masterStoryList.filter(story => story.id === id)[0];
    this.setState({selectedStory: selectedStory});
  }

  handleClick = () => {
    if (this.state.selectedStory != null) {
      this.setState({
        selectedStory: null,
        formVisibleOnPage: false
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        selectedStory: null
      }));
    }
  }

  handleDeletingStory = (id) => {
    const newMasterStoryList = this.state.masterStoryList.filter(ticket => ticket.id !== id);
    this.setState({
      masterStoryList: newMasterStoryList,
      selectedStory: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStoryForm 
      onNewStoryCreation = {this.handleAddingNewStoryToList}
      />
      buttonText = "Nevermind, maybe read another story."
    } else if (this.state.selectedStory !== null) {
      currentlyVisibleState = <StoryDetail story = {this.state.selectedStory} onClickingDelete = {this.handleDeletingStory} />
      buttonText = "Find a different tale."
    } else {
      currentlyVisibleState = <StoryList storyList={this.state.masterStoryList} onStorySelection = {this.handleChangingSelectedStory} />
      buttonText = "Start a new story."
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
