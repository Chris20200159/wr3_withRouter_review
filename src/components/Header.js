import React from "react";
import { withRouter } from 'react-router-dom';

function Header(props) {

  console.log('Header props', props)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default withRouter(Header);