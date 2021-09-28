import react from "react";
import React from "react";
import Entry from "./Entry";

function Story() {
  const title = "Scary Story";
  const author = "Cat";
  const tags = ["scary", "dark", "mature"]
  const text = {"entry 1":"stuf stuff stuff stuff stuff stuff", "entry 2": "eat eat eat eat eat eat eat eat eat"}
  return (
    <react.Fragment>
      <h1>{title}</h1>
      <h3>by {author}</h3>
      <br />
      <ul>
        <em>Tags:</em> {tags.map((tag, index) => 
          <li key={index}>
            {tag}            
          </li>
        )}
      </ul>
      <hr />
      <Entry text={text["entry 1"]} />
      <Entry text={text["entry 2"]} />
      {/* {Object.values(text).map((entry,index) => 
         
         <p key={index}>{entry}</p>
      )} */}
    </react.Fragment>
  )
}

export default Story