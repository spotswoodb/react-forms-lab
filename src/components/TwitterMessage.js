import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "" 
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  remainingCharacters = () => {
    return this.props.maxChars - (this.state.message.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(event) => this.handleChange(event)} />
        <div>{this.remainingCharacters()}</div>
      </div>
    );
  }
}

export default TwitterMessage;
