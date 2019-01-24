import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './Routes/fire';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
