import React, { Component } from "react";
import "./styles.css";
import routes from './routes';
import { withRouter } from 'react-router-dom';
import Header from './components/Header'

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      loggedIn: false
     }
  }

  render() {
    return (
      <div>
        {
          this.props.location.pathname !== '/view2' ? <Header /> : null
        }
        { routes }
      </div>
    );
  }
}

export default withRouter(App);