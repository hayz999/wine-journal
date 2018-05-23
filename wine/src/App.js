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
      data: [],
      isHidden: true
    }
  }
  
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(wines =>
        this.setState({data: wines.wines})
      ) 
  }

  updateData = () => {
    fetch(url)
      .then(response => response.json())
      .then(wines =>
        this.setState({ data: wines.wines })
      ) 
  }

  removeHidden = () => {
    if (this.state.isHidden) {
      return "hidden"
    } else {
      return "signUp-and-login"
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar toggleHidden={this.toggleHidden} />
        <Header />
        <SignUp removeHidden={this.removeHidden} />
        <Login removeHidden={this.removeHidden} />
        <About />
        <Form data={this.state.data}
              updateDate={this.updateData} />
        <Footer />
      </div>
    );
  }
}

export default App;
