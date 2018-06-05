import React from 'react'

const PairingForm = (props) => {  
  return (
    <div>
        <div className="form-style-6">
          <h1>New Pairing</h1>
          <form onSubmit={props.handleSubmit}>
            <section className="form" >
              <section >
                <input name="recipeName"
                  type="text"
                  value={props.recipeName}
                  onChange={props.handleChange}
                  placeholder="Recipe Name"/>
              </section>
              <section >
                <input name="link"
                  type="text"
                  value={props.link}
                  onChange={props.handleChange}
                  placeholder="Link" />
              </section>
              <section >
                <input name="description"
                  type="text"
                  value={props.description}
                  onChange={props.handleChange}
                  placeholder="Description of pairing" />
              </section>
              </section>
            <button type="submit" > Submit </button> 
            </form>
          </div>
        </div>
  )
}

export default PairingForm