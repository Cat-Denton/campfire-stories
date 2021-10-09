import selectedStoryReducer from '../../reducers/selected-story-reducer';

describe("selectedStoryReducer", () => {
  let action;

  const storyData = {
    title: 'dogs and cats',
    author: 'just a human',
    tags: ['funny', 'normal'],
    entryList: ['stuff stuff stuff', 'eat eat eat'],
    id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(selectedStoryReducer(null, { type: null})).toEqual(null);
  });

  test('should successfully add selected story data to selectedStory state slice', () => {
    const { title, author, tags, entryList, id } = storyData
    action = {
      type: 'SELECT_STORY',
      title,
      author,
      tags,
      entryList,
      id
    }
    expect(selectedStoryReducer(null, action)).toEqual(storyData);
  });

  test('should successfully set selected story to null', () => {
    expect(selectedStoryReducer(storyData, {type: 'NULL_STORY'})).toEqual(null);
  })
});
