import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      vintage: '',
      varietal: '',
      winery: '',
      location: '',
      notes: '',
      rating: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const value = event.target.value
    const key = event.target.name
    this.setState({
      [key]: value
    })
  }
  
  render() {
    return (
      <div id="form-container" >
      <div className="form-style-6">
      <h1>New Journal Submission</h1>
      <form>
        <section className="form" >
          <section >
            <input name="name" type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
          </section>
          <section >
            <input name="vintage" type="text" value={this.state.vintage} placeholder="Vintage" onChange={this.handleChange} />
          </section>
          <section >
            <input name="varietal" type="text" value={this.state.varietal} placeholder="Varietal" onChange={this.handleChange} />
          </section>
          <section >
            <input name="winery" type="text" value={this.state.winery} placeholder="Winery" onChange={this.handleChange} />
          </section>
          <section >
            <input name="location" type="text" value={this.state.location} placeholder="Location" onChange={this.handleChange} />
          </section>
          <section >
            <textarea name="notes" type="text" value={this.state.notes} placeholder="Tasting Notes" onChange={this.handleChange} />
          <section >
            <input name="rating" type="text" value={this.state.rating} placeholder="Rating" onChange={this.handleChange} />
          </section>
          </section>
        </section>
        <button type="submit" > Submit </button> 
      </form>
      </div>
        <div id="form-preview" className="form-style-6">
        <h1>Preview</h1>
          <h3>Name: <span>{this.state.name}</span></h3>
          <h3>Vintage: <span>{this.state.vintage}</span> </h3>
          <h3>Varietal: <span>{this.state.varietal}</span></h3>
          <h3>Winery: <span>{this.state.winery}</span></h3>
          <h3>Location: <span>{this.state.location}</span></h3>
          <h3>Tasting Notes:</h3>
          <span>{this.state.notes}</span>
          <h3>Rating: <span>{this.state.rating}</span></h3>
      </div>
      </div>
    );
  }
}