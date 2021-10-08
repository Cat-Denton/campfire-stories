import storyListReducer from "../../reducers/story-list-reducer";

describe('storyListReducer', () => {
  let action;

  const currentState = {
    1: {title: 'dogs and cats', author: 'just a human', tags: ['funny', 'normal'], entryList: ['stuff stuff stuff', 'eat eat eat'], id: 1},
    2: {title: 'humans suck', author: 'a normal human', tags: ['true', 'normal'], entryList: ['jerks jerks jerks', 'totally just a normal human'], id: 2}
  }

  const storyData = {title: 'dogs and cats', author: 'just a human', tags: ['funny', 'normal'], entryList: ['stuff stuff stuff', 'eat eat eat'], id: 1}

  test('should return default state if no action type is recognized', () => {
    expect(storyListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new story data to masterStoryList', () => {
    const { title, author, tags, entryList, id } = storyData;
    action = {
      type: 'ADD_STORY',
      title,
      author,
      tags,
      entryList,
      id
    };
    expect(storyListReducer({}, action)).toEqual({
      [id]: {
        title,
        author,
        tags,
        entryList,
        id
      }
    })
  })
})