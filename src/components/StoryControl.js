import React from "react";
import NewStoryForm from "./NewStoryForm";
import StoryDetail from "./StoryDetail";
import StoryList from './StoryList';
import EditStoryForm from './EditStoryForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Story from "./Story";

class StoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterStoryList: [],
      selectedStory: null,
      editingStory: false
    };
  }

  handleAddingNewStoryToList = (newStory) => {
    // const newMasterStoryList = this.state.masterStoryList.concat(newStory);
    // this.setState({masterStoryList: newMasterStoryList,
    // formVisibleOnPage: false, selectedStory: newStory });
    const { dispatch } = this.props;
    const { title, author, tags, entryList, id} = newStory;
    const action = {
      type: 'ADD_STORY',
      title,
      author,
      tags,
      entryList,
      id
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false, selectedStory: newStory});
  }
  
  handleChangingSelectedStory = (id) => {
    const selectedStory = this.props.masterStoryList[id];
    this.setState({selectedStory: selectedStory});
  }

  handleClick = () => {
    if (this.state.editingStory) {
      this.setState({
        formVisibleOnPage: false,
        editingStory: false
      })
    } else if (this.state.selectedStory != null) {
      this.setState({
        selectedStory: null,
        formVisibleOnPage: false,
        editingStory: false
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        selectedStory: null,
        editingStory: false
      }));
    }
  }

  handleDeletingStory = (id) => {
    // const newMasterStoryList = this.state.masterStoryList.filter(story => story.id !== id);
    // this.setState({
    //   masterStoryList: newMasterStoryList,
    //   selectedStory: null
    // })
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_STORY',
      id
    }
    dispatch(action);
    this.setState({selectedStory: null});
  }

  handleEditStoryClick = () => {
    this.setState({editingStory: true});
  }

  handleEditingStoryInList = (storyToEdit) => {
    // const editedMasterStoryList = this.state.masterStoryList.filter(story => story.id !== this.state.selectedStory.id).concat(storyToEdit);    
    // this.setState({
    //   masterStoryList: editedMasterStoryList,
    //   editingStory: false,
    //   selectedStory: storyToEdit
    // });
    const { dispatch } = this.props;
    const { title, author, tags, entryList, id } = storyToEdit;
    const action = {
      type: 'ADD_STORY',
      title,
      author,
      tags,
      entryList,
      id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedStory: storyToEdit
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editingStory) {
      currentlyVisibleState = <EditStoryForm story = {this.state.selectedStory} onEditStory = {this.handleEditingStoryInList} />
      buttonText = "Nevermind, I don't need to change anything";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStoryForm 
      onNewStoryCreation = {this.handleAddingNewStoryToList}
      />
      buttonText = "Nevermind, maybe read another story."
    } else if (this.state.selectedStory !== null) {
      currentlyVisibleState = <StoryDetail story = {this.state.selectedStory} onClickingDelete = {this.handleDeletingStory} onClickingEditStory = {this.handleEditStoryClick} onClickingAddEntry = {this.handleEditingStoryInList} onClickingAddTag={this.handleEditingStoryInList} />
      buttonText = "Find a different tale."
    } else {
      currentlyVisibleState = <StoryList storyList={this.props.masterStoryList} onStorySelection = {this.handleChangingSelectedStory} />
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

StoryControl.propTypes = {
  masterStoryList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterStoryList: state
  }
}

StoryControl = connect(mapStateToProps)(StoryControl);

export default StoryControl;
