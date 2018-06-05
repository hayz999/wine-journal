import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const url = 'https://wine-journal-api.herokuapp.com/wines/'

export default class Journal extends Component {
  handleDelete = (event) => {
    event.preventDefault()
    let deleteUrl = url + event.target.name

    fetch(deleteUrl, {
      method: "DELETE",
      headers: new Headers({ "content-type": "application/json" })
    }).then(response => response.json()).then(entry => {
      this.props.getData()
      console.log("Delete", entry)
    }).catch(err => {
      console.log('Error', err)
    })
  }

  render () {
    
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
            <Link to={`/pairings/${wine.id}`} name={wine.id} onClick={this.pairings} ><button>Pairings</button></Link>
          <div>
            <button  name={wine.id} onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
        </div>
      )
    })

  return (
    <div>
      <h1 className="journal-title" >Journals and Pairings</h1>
          <div id="journals" >{journals}</div>      
    </div> 
  )
  }
}


