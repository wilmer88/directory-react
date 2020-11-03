import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    person: "",
  };

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  iseClick = () => {
    console.log("you clicked button");
    // this.setState()
  };

  render() {
    return (
      <>
        <div className="input-group mb-3">
          <input
            name="person"
            value={this.state.person}
            onchange={this.handleInputChange}
            type="text"
            className="form-control"
            placeholder="find somone"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={this.iseClick}
            >
              Button
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Searchbar;
