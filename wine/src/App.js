import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Journal from './components/Journal'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import FoodPairings from './components/FoodPairings';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import './Form.css'
import RatingChart from './components/RatingChart'

const url = 'https://wine-journal-api.herokuapp.com/wines/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
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


  render() {

    return (
      <div id="main-wrapper" className="App">
        
        <BrowserRouter>
        <div>
          <NavBar />
          <Header />
          <Switch>
            <Route exact path="/" component={About} />
              <Route exact path="/form" component={() => <Form data={this.state.data} refreshData={this.getData}/>} />
            <Route exact path="/journal" component={() => <Journal data={this.state.data} getData={this.getData}  />} />
            <Route exact path="/ratingChart" component={() => <RatingChart wines={this.state.data} />} />
              <Route exact path="/pairings/:wineId" component={FoodPairings} />
          </Switch>
        </div>
          
         
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App
