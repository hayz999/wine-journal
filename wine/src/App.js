import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Header from './components/Header';
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
      showForm: false,
      showHome: true
    }
  }
  
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(wines =>
        this.setState({data: wines.wines})
      ) 
  }

  componentDidUpdate() {
    fetch(url)
      .then(response => response.json())
      .then(wines =>
        this.setState({ data: wines.wines })
      ) 
  }

  form = () => {
    this.setState({
      showForm: true,
      showHome: false
    })
  }

  home = () => {
    this.setState({
      showForm: false,
      showHome: true
    })
  }

  render() {
    const showForm = this.state.showForm
    const showHome = this.state.showHome

    return (
      <div id="main-wrapper" className="App">
        <NavBar  form={this.form}
                 home={this.home} />
        <Header />
        {showHome ? <About /> : <span></span> }
        {showForm ? <Form data={this.state.data} /> : <span></span> } 
        <Footer />
      </div>
    );
  }
}

export default App;
