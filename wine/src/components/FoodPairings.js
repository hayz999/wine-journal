import React, { Component } from 'react'
import PairingForm from './PairingForm'

const pairingsURL = 'https://wine-journal-api.herokuapp.com/pairings'

export default class FoodPairings extends Component {
  
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      recipeName: '',
      link: '',
      description: '',
      pairingsData: [],
      currentPairings: []
    }
  }

  componentDidMount() {
   this.getPairings()
  }

  getPairings = () => {
    fetch(pairingsURL)
      .then(response => response.json())
      .then(response => {
        let currentPairings = response.pairings.filter(pairing => {
          return pairing.wines_id == this.props.match.params.wineId
        })
        this.setState({
          currentPairings: currentPairings
        })
      })
  }

  handleChange = (event) => {
    const value = event.target.value
    const key = event.target.name
    this.setState({
      [key]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      nameOfFood: this.state.recipeName,
      recipeURL: this.state.link,
      description: this.state.description,
      wines_id: this.props.match.params.wineId
    })
    fetch(pairingsURL, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: body
    })
      .then(response => response.json())
      .then(entry => {
        this.getPairings()
      })
      .then(this.setState({
        recipeName: '',
        link: '',
        description: ''
      }))
  }

  render () {
    const foodPairings = this.state.currentPairings.map(food => {
      return (
        <div key={food.id} className="form-style-6">
          <h1>{food.nameOfFood}</h1>
          <h2><a target='_blank' href={food.recipeURL}>Recipe</a></h2>
          <p>{food.description}</p>
        </div>
      )
    })
  
  return (
    <div className="pairing-page">
      <h1 className="journal-title" >Suggested Pairings</h1>
    <div  >
      {foodPairings}
    </div>
      <PairingForm handleChange={this.handleChange} 
                   handleSubmit={this.handleSubmit} />
    </div>
  )
  }
}
