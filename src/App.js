import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  state = {
    maxChars: 280
  }

  login = ({ username, password }) => {
    this.preventDefault()
    this.setState((prevState) => {
      return {maxChars: prevState.maxChars - 20}
    })

  };

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={this.state.maxChars} />



      </div>
    )
  }
}

export default App
