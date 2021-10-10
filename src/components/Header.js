import campfireLogo from './../assets/img/campfireLogo.gif'
import React from 'react';

function Header() {
  return (
    
    <h1>Campfire Stories
      <br />
      <img src={campfireLogo} alt='Stay a while and listen' />
      <p>(click on a story to read it and write the next chapter)</p>
    </h1>
  )
}

export default Header;

