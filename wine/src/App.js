import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Journal from './components/Journal';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import './Form.css';

const url = 'https://wine-journal-api.herokuapp.com/wines'

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
        this.setState({
          data: wines.wines
        })
      ) 
      .then(res => console.log(this.state.data)) 
  }

  render() {

    return (
      <div className="App">
        <NavBar />
        <Header />
        <SignUp />
        <Login />
        <About />
        <Form />
        <Journal data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
