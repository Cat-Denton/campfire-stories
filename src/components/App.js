import React from 'react';
import Header from './Header'
import './../App.css'
import StoryControl from './StoryControl';

function App(){
  return(
    <React.Fragment>
      <Header />
      <StoryControl />
    </React.Fragment>
  )
}

export default App;