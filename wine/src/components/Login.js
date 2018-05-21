import React, { Component } from 'react';


class Login extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
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
        <h1>Login</h1>
        <form>
          <section className="form" >
            <section >
              <input name="email" type="text" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
            </section>
            <section >
              <input name="password" type="text" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
            </section>
            <button className="btn" type="submit" > Login </button>
          </section>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;