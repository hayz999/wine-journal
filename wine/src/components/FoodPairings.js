import React, { Component } from 'react';
import PairingForm from './PairingForm';

export default class FoodPairings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  form = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render () {
    const showForm = this.state.showForm

    const foodPairings = this.props.currentPairings.map(food => {
      return (
        <div key={food.id} className="form-style-6">
          <h1>{food.nameOfFood}</h1>
          <h2><a target='_blank' href={food.recipeURL}>Recipe</a></h2>
          <p>{food.description}</p>
        </div>
      )
    })
  
  return (
    <div className="pairing-page" >
    <div id="form-container">
      {foodPairings}
    </div>
    <div className="button-container" >
      <button onClick={this.form} >New Pairing</button>
        {showForm ? <PairingForm /> : <span></span> }
      <button onClick={this.props.pairings}>Back</button>
    </div>
    </div>
  );
  }
}
