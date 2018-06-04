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
      currentPairings: [],
      recipeName: '',
      link: '',
      description: ''
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
      recipeName: this.state.recipeName,
      link: this.state.link,
      description: this.state.description
    })
    fetch(pairingsURL, {
        method: "POST",
        headers: new Headers ({"content-type": "application/json"}),
        body: body
      })
      .then(response => response.json())
      .then(entry =>	{
        console.log(entry);
        
      })
      .then(this.setState({
        recipeName: '',
        link: '',
        description: ''
      }))
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
        <div id="form-preview" className="form-style-6 journals" key={wine.id} >
        <div>
          <h1>{wine.name}</h1>
          <h3>Name: <span>{wine.name}</span></h3>
          <h3>Vintage: <span>{wine.vintage}</span> </h3>
          <h3>Varietal: <span>{wine.varietal}</span></h3>
          <h3>Winery: <span>{wine.winery}</span></h3>
          <h3>Location: <span>{wine.location}</span></h3>
          <h3>Tasting Notes:</h3>
          <span>{wine.notes}</span>
          <h3>Rating: <span>{wine.rating}</span></h3>
        </div>
          <div className="journal-buttons">
            <button name={wine.id} onClick= {this.pairings} >Pairings</button>
            <button name={wine.id}>Add Pairing</button>
            <div>
              <button  name={wine.id} onClick={this.props.handleDelete} type="delete" >Delete</button>
            </div>
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
      <PairingForm data={this.state.data}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}/>
      
    </div> 
  );
  }
};


