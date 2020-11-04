import React, { Component } from "react";
import employees from "../../Employees.json"

class Searchbar extends Component {
  state = {
    result:employees,
    person: employees,
  };

  iseClick = () => {
    console.log("you clicked button");
    // this.setState()
  };

  handleInputChange = event => {
    const value = event.target.value;
    console.log(value)
    const filtered = this.state.person.filter(query => query.firstName.includes(value))
    this.setState({result: filtered})
  }

  render() {
    return (
      <>
        <div className="input-group mb-3">
          <input
            name="person"
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
            placeholder="find somone name"
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
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.result.map(element => (
                <tr>
                  <td>{element.id}</td>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                  <td>{element.email}</td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
      </>
    );
  }
}

export default Searchbar;
