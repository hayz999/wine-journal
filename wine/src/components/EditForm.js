import React, { Component } from 'react'

const url = 'https://wine-journal-api.herokuapp.com/wines/'

export default class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.currentWine.name,
      vintage: this.props.currentWine.vintage,
      varietal: this.props.currentWine.varietal,
      winery: this.props.currentWine.winery,
      location: this.props.currentWine.location,
      notes: this.props.currentWine.notes,
      rating: this.props.currentWine.rating
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
    fetch((url + '/' + this.props.currentWine.id), {
      method: "PUT",
      headers: new Headers({ "content-type": "application/json" }),
      body: body
    })
      .then(response => response.json())
      .then(entry => {
        this.props.refreshData()
        window.location.href= '/journal'
      })
  }

  render() {
    return (
      <div className="pairing-page">
      <div className="form-style-6">
        <h1>Edit Journal</h1>
        <form>
          <section className="form" >
            <section >
              <input name="name"
                type="text"
                defaultValue={this.props.currentWine.name}
                placeholder="Name"
                onChange={this.handleChange} />
            </section>
            <section >
              <input name="vintage"
                type="text"
                defaultValue={this.props.currentWine.vintage}
                placeholder="Vintage"
                onChange={this.handleChange} />
            </section>
            <section >
              <input name="varietal"
                type="text"
                defaultValue={this.props.currentWine.varietal}
                placeholder="Varietal"
                onChange={this.handleChange} />
            </section>
            <section >
              <input name="winery"
                type="text"
                defaultValue={this.props.currentWine.winery}
                placeholder="Winery"
                onChange={this.handleChange} />
            </section>
            <section >
              <input name="location"
                type="text"
                defaultValue={this.props.currentWine.location}
                placeholder="Location"
                onChange={this.handleChange} />
            </section>
            <section >
              <textarea name="notes"
                type="text"
                defaultValue={this.props.currentWine.notes}
                placeholder="Tasting Notes"
                onChange={this.handleChange} />
              <section >
                <input name="rating"
                  type="text"
                  defaultValue={this.props.currentWine.rating}
                  placeholder="Rating"
                  onChange={this.handleChange} />
              </section>
            </section>
          </section>
          <button onClick={this.handleSubmit}
            type="submit" > Submit </button>
        </form>
      </div>
      </div>
    );
  }
};

