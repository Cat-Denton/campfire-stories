import React from "react";
import Story from "./Story";

function StoryList(props) {
  const storyList = [{title: "Scary Story",
  author: "Cat",
  tags: ["scary", "dark", "mature"],
  entryList: [{text:"stuf stuff stuff stuff stuff stuff"}, {text: "eat eat eat eat eat eat eat eat eat"}]},
  {title: "Scary Story",
  author: "Cat",
  tags: ["scary", "dark", "mature"],
  entryList: [{text:"stuf stuff stuff stuff stuff stuff"}, {text: "eat eat eat eat eat eat eat eat eat"}]}]
  return (
    <React.Fragment>
      {storyList.map((story,index) =>
        <div key={index}>
          <Story
            title={story.title}
            author={story.author}
            tags={story.tags}
            entryList={story.entryList}
          />
        </div>
        )}
      
    </React.Fragment>
  )
}

export default StoryList;