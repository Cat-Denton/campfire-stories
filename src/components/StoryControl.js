import React from "react";
import NewStoryForm from "./NewStoryForm";
import StoryDetail from "./StoryDetail";
import StoryList from './StoryList';
import EditStoryForm from './EditStoryForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      editingStory: false
    };
  }

  handleAddingNewStoryToList = (newStory) => {
    // const { dispatch } = this.props;
    // // const { title, author, tags, entryList, id} = newStory;
    // // const action = {
    // //   type: 'ADD_STORY',
    // //   title,
    // //   author,
    // //   tags,
    // //   entryList,
    // //   id
    // // }
    // dispatch(action);
    this.setState({formVisibleOnPage: false});
    // const { dispatch } = this.props;
    // const { title, author, tags, entryList, id} = newStory;
    // const action = {
    //   type: 'SELECT_STORY',
    //   title,
    //   author,
    //   tags,
    //   entryList,
    //   id
    // }
    // dispatch(action);

  }
  
  handleChangingSelectedStory = (storyId) => {
    const selectedStory = this.props.masterStoryList[storyId];
    const { dispatch } = this.props;
    const { title, author, tags, entryList, id} = selectedStory;
    const action = {
      type: 'SELECT_STORY',
      title,
      author,
      tags,
      entryList,
      id
    }
    dispatch(action);
  }

  handleClick = () => {
    if (this.state.editingStory) {
      this.setState({
        formVisibleOnPage: false,
        editingStory: false
      })
    } else if (this.props.selectedStory != null) {
      this.setState({
        // selectedStory: null,
        formVisibleOnPage: false,
        editingStory: false
      })
      const { dispatch } = this.props;
      const action = {
        type: 'NULL_STORY'
      }
      dispatch(action);
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        // selectedStory: null,
        editingStory: false
      }));
      const { dispatch } = this.props;
      const action = {
        type: 'NULL_STORY'
      }
      dispatch(action)
    }
  }

  handleDeletingStory = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_STORY',
      id
    }
    dispatch(action);
    const action2 = {
      type: 'NULL_STORY'
    }
    dispatch(action2);
  }

  handleEditStoryClick = () => {
    this.setState({editingStory: true});
  }

  handleEditingStoryInList = (storyToEdit) => {
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
    const action2 = {
      type: 'SELECT_STORY',
      title,
      author,
      tags,
      entryList,
      id
    }
    dispatch(action2);
    this.setState({
      editing: false,
      // selectedStory: storyToEdit
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editingStory) {
      currentlyVisibleState = <EditStoryForm story = {this.props.selectedStory} onEditStory = {this.handleEditingStoryInList} />
      buttonText = "Nevermind, I don't need to change anything";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStoryForm 
      onNewStoryCreation = {this.handleAddingNewStoryToList}
      />
      buttonText = "Nevermind, maybe read another story."
    } else if (this.props.selectedStory !== null) {
      currentlyVisibleState = <StoryDetail story = {this.props.selectedStory} onClickingDelete = {this.handleDeletingStory} onClickingEditStory = {this.handleEditStoryClick} onClickingAddEntry = {this.handleEditingStoryInList} onClickingAddTag={this.handleEditingStoryInList} />
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
  masterStoryList: PropTypes.object,
  selectedStory: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterStoryList: state.masterStoryList,
    selectedStory: state.selectedStory
  }
}

StoryControl = connect(mapStateToProps)(StoryControl);

export default StoryControl;
