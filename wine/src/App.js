import React, { Component } from 'react'
import Form from './components/Form'
import Journal from './components/Journal'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import AppBar from './components/AppBar';
import FoodPairings from './components/FoodPairings';
import EditForm from './components/EditForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import './Form.css'
import RatingChart from './components/RatingChart'

const url = 'https://wine-journal-api.herokuapp.com/wines/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currentWine: {}
    }
  }
  
  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch(url)
      .then(response => response.json())
      .then(wines => {
        this.setState({ data: wines.wines })
      })
  }

  getCurrentWine = (event, wine) => {
    this.setState({
      currentWine: wine
    })
  }

  render() {

    return (
      <div id="main-wrapper" className="App">
        <BrowserRouter>
        <div>
          <AppBar />
          <Header />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/form" component={() => <Form data={this.state.data} refreshData={this.getData}/>} />
            <Route exact path="/journal" component={() => <Journal data={this.state.data} getData={this.getData} getCurrentWine={this.getCurrentWine}  />} />
            <Route exact path="/ratingChart" component={() => <RatingChart wines={this.state.data} />} />
            <Route exact path="/pairings/:wineId" component={FoodPairings} />
            <Route exact path="/journal/:wineId" component={() => <EditForm currentWine={this.state.currentWine} handleChange={this.handleChange} refreshData={this.getData} />} />
          </Switch>
        </div>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App
