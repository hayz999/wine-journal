import React, { Component } from 'react';

class SignUp extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
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
      <div className="signUp-and-login" >
      <div className="form-style-6">
        <h1>Sign Up</h1>
        <form>
          <section className="form" >
            <section >
              <input name="firstName" type="text" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
            </section>
            <section>
              <input name="lastName" type="text" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
            </section>
            <section >
              <input name="email" type="text" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
            </section>
            <section >
              <input name="password" type="text" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
            </section>
            <button type="submit" > Submit </button> 
            </section>
        </form>
      </div>
      </div>
    );
  }
}

export default SignUp;