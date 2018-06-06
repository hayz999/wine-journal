import React, { Component } from 'react'
import Preview from './Preview'

const url = 'https://wine-journal-api.herokuapp.com/wines/'

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
    const body = JSON.stringify(this.state)
    fetch(url, {
      method: "POST",
      headers: new Headers ({"content-type": "application/json"}),
      body: body
    })
    .then(response => response.json())
    .then(entry =>	{
      this.props.refreshData()
    })
    .then(this.setState({
      name: '',
      vintage: '',
      varietal: '',
      winery: '',
      location: '',
      notes: '',
      rating: ''
    }))
  }

  render() {
    return (
      <div>
        <h1 className="journal-title" >Add a new wine!</h1>
        <div id="form-container" >
          <div className="form-style-6">
          <h1>New Journal Submission</h1>
          <form>
            <section className="form" >
              <section >
                <input name="name" 
                       type="text" 
                       value={this.state.name} 
                       placeholder="Name" 
                       onChange={this.handleChange} />
              </section>
              <section >
                <input name="vintage" 
                       type="text" 
                       value={this.state.vintage} 
                       placeholder="Vintage" 
                       onChange={this.handleChange} />
              </section>
              <section >
                <input name="varietal" 
                       type="text" 
                       value={this.state.varietal} 
                       placeholder="Varietal" 
                       onChange={this.handleChange} />
              </section>
              <section >
                <input name="winery" 
                       type="text" 
                       value={this.state.winery} 
                       placeholder="Winery" 
                       onChange={this.handleChange} />
              </section>
              <section >
                <input name="location" 
                       type="text" 
                       value={this.state.location} 
                       placeholder="Location" 
                       onChange={this.handleChange} />
              </section>
              <section >
                <textarea name="notes" 
                          type="text" 
                          value={this.state.notes} 
                          placeholder="Tasting Notes" 
                          onChange={this.handleChange} />
              <section >
                <input name="rating" 
                       type="text" 
                       value={this.state.rating} 
                       placeholder="Rating" 
                       onChange={this.handleChange} />
              </section>
              </section>
            </section>
              <button onClick={this.handleSubmit} 
                      type="submit" > Submit </button> 
          </form>
          </div>
          <Preview name={this.state.name}
                   vintage={this.state.vintage}
                   varietal={this.state.varietal}
                   winery={this.state.winery}
                   location={this.state.location}
                   notes={this.state.notes}
                   rating={this.state.rating} />
        </div>
      </div>
    )
  }
}