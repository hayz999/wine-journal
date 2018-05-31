import React, { Component } from 'react';
import FoodPairings from './FoodPairings';
import PairingForm from './PairingForm';

const pairingsURL = 'https://wine-journal-api.herokuapp.com/pairings'

export default class Journal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPairings: true,
      pairingsData: [],
      currentPairings: []
    }
  }

  componentDidMount() {
    fetch(pairingsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        pairingsData: response.pairings
      })
      
    })
  }

  pairings = (event) => {
   let currentPairings = this.state.pairingsData.filter(pairing => {
      return pairing.wines_id == event.target.name
    })
    this.setState({
      showPairings: !this.state.showPairings,
      currentPairings: currentPairings
    })
  }

  render () {
    const showPairings = this.state.showPairings
    
    const journals = this.props.data.map(wine =>{
      return (
        <div id="form-preview" className="form-style-6" key={wine.id} >
          <h1>{wine.name}</h1>
          <h3>Name: <span>{wine.name}</span></h3>
          <h3>Vintage: <span>{wine.vintage}</span> </h3>
          <h3>Varietal: <span>{wine.varietal}</span></h3>
          <h3>Winery: <span>{wine.winery}</span></h3>
          <h3>Location: <span>{wine.location}</span></h3>
          <h3>Tasting Notes:</h3>
          <span>{wine.notes}</span>
          <h3>Rating: <span>{wine.rating}</span></h3>
          <button name={wine.id} onClick= {this.pairings} >Pairings</button>
          <button>Add Pairing</button>
          <div>
          <button className="delete-button" name={wine.id} onClick={this.handleDelete} type="delete" >Delete</button>
          </div>
        </div>
      )
    })

  return (
    <div>
      <h1 className="journal-title" >Journals and Pairings</h1>
      {showPairings ? 
          <div id="journals" >{journals}</div> : 
          <FoodPairings pairings={this.pairings}
                        currentPairings={this.state.currentPairings}/> }
      <PairingForm />
      
    </div> 
  );
  }
};


