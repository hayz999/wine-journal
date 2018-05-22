import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import './Form.css';

const url = 'https://wine-journal-api.herokuapp.com/wines/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(wines =>
        this.setState({data: wines.wines})
      ) 
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <SignUp />
        <Login />
        <About />
        <Form data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
