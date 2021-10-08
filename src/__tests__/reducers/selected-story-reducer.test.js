import selectedStoryReducer from '../../reducers/story-list-reducer';

describe("selectedStoryReducer", () => {
  let action;

  const selectedStory = {
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
    expect(selectedStoryReducer(selectedStory, {type: 'SELECT_STORY'})).toEqual(selectedStory);
  });
});
