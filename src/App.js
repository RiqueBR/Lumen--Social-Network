import React, { Component } from 'react';
import './App.css';
import fire from './Routes/fire';
import Login from './Routes/Login';
import Home from './Routes/Home';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      loggedIn: null
    };
  }

  componentDidMount = () => {
    this.setState({loading: true});
    fire.auth().onAuthStateChanged(user => {
      if (user){
        this.setState({loggedIn: true, loading: false});
      } else {
        this.setState({loggedIn: false, loading: false})
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.loggedIn ? <Home /> : <Login />}
      </div>
    );
  }
}

export default App;
