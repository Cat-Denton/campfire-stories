import React from "react";
import NewStoryForm from "./NewStoryForm";
import StoryDetail from "./StoryDetail";
import StoryList from './StoryList';
import EditStoryForm from './EditStoryForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase';

class StoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      editingStory: false
    };
  }

  handleAddingNewStoryToList = () => {    
    this.setState({ formVisibleOnPage: false });    
  }

  handleChangingSelectedStory = (id) => {
    this.props.firestore.get({ collection: 'stories', doc: id }).then((story) => {
      const firestoreStory = {
        title: story.get('title'),
        author: story.get('author'),
        tags: story.get('tags'),
        entryList: story.get('entryList'),
        id: story.id
      }
      const { title, author, tags, entryList, id } = firestoreStory;
      const { dispatch } = this.props;
      const action = {
        type: 'SELECT_STORY',
        title,
        author,
        tags,
        entryList,
        id
      }
      dispatch(action);
    })
  }

  handleClick = () => {
    if (this.state.editingStory) {
      this.setState({
        formVisibleOnPage: false,
        editingStory: false
      })
    } else if (this.props.selectedStory != null) {
      this.setState({
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
    this.props.firestore.delete({collection: 'stories', doc: id});
    const action = {
      type: 'NULL_STORY'
    }
    dispatch(action);
  }

  handleEditStoryClick = () => {
    this.setState({ editingStory: true });
  }

  handleEditingStoryInList = (storyToEdit) => {
    const { dispatch } = this.props;
    const { title, author, tags, entryList, id } = storyToEdit;
    const action = {
      type: 'SELECT_STORY',
      title,
      author,
      tags,
      entryList,
      id
    }
    dispatch(action);
    this.setState({
      editing: false,
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editingStory) {
      currentlyVisibleState = <EditStoryForm story={this.props.selectedStory} onEditStory={this.handleEditingStoryInList} />
      buttonText = "Nevermind, I don't need to change anything";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStoryForm
        onNewStoryCreation={this.handleAddingNewStoryToList}
      />
      buttonText = "Nevermind, maybe read another story."
    } else if (this.props.selectedStory !== null) {
      currentlyVisibleState = <StoryDetail story={this.props.selectedStory} onClickingDelete={this.handleDeletingStory} onClickingEditStory={this.handleEditStoryClick} onClickingAddEntry={this.handleEditingStoryInList} onClickingAddTag={this.handleEditingStoryInList} />
      buttonText = "Find a different tale."
    } else {
      currentlyVisibleState = <StoryList storyList={this.props.masterStoryList} onStorySelection={this.handleChangingSelectedStory} />
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

export default withFirestore(StoryControl);
