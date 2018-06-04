import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Journal from './components/Journal';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import './Form.css';
import RatingChart from './components/RatingChart';

const url = 'https://wine-journal-api.herokuapp.com/wines/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      showForm: false,
      showHome: true,
      showJournal: false,
      showRatings: false
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

  handleDelete = (event) => {
    event.preventDefault();
    let deleteUrl = url + event.target.name
    fetch(deleteUrl, {
      method: "DELETE",
      headers: new Headers({ "content-type": "application/json" })
    })
      .then(response => response.json())
      .then(entry => {
        console.log(entry);
      })
  }

  form = () => {
    this.setState({
      showForm: true,
      showHome: false,
      showJournal: false,
      showRatings: false
    })
  }

  journal = () => {
    this.setState({
      showForm: false,
      showHome: false,
      showJournal: true,
      showRatings: false
    })
  }

  home = () => {
    this.setState({
      showForm: false,
      showHome: true,
      showJournal: false,
      showRatings: false
    })
  }

  ratings = () => {
    this.setState({
      showForm: false,
      showHome: false,
      showJournal: false,
      showRatings: true
    })
  }

  render() {
    const showForm = this.state.showForm
    const showHome = this.state.showHome
    const showJournal = this.state.showJournal
    const showRatings = this.state.showRatings

    return (
      <div id="main-wrapper" className="App">
        <NavBar  form={this.form}
                 home={this.home}
                 journal={this.journal}
                 ratings={this.ratings} />
        <Header />
        {showHome ? <About /> : <span></span> }
        {showForm ? <Form data={this.state.data} /> : <span></span> } 
        {showJournal ? <Journal data={this.state.data} handleDelete={this.handleDelete} /> : <span></span> }
        {showRatings ? <RatingChart wines={this.state.data}/> : <span></span> }
        <Footer />
      </div>
    );
  }
}

export default App;
