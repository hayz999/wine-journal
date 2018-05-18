import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <Header />
        <SignUp />
        <Login />
        <Form />
      </div>
    );
  }
}

export default App;
